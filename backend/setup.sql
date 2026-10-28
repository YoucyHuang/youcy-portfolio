-- 黄鈺茜作品集 · 留言与访问记录
-- 在 Supabase 后台 → SQL Editor 里整段粘贴、运行一次即可（重复运行也没关系）。
--
-- 设计：
--   访客只能调用三个函数：记一次访问、发一条留言、读某篇的公开留言。
--   公开留言里不含称呼以外的任何信息；匿名留言连称呼也不给。
--   两张表的全部内容只有 admins 表里的邮箱登录后才能读、改、删。

create table if not exists public.visits (
  id        bigint generated always as identity primary key,
  at        timestamptz not null default now(),
  vid       text,            -- 浏览器里随机生成的访客编号，用来把同一个人的多次访问连起来
  path      text,            -- 看的是哪一页
  platform  text,            -- 从哪个平台来（微信、小红书……）
  src       text,            -- 链接里的 ?from= 标记
  referrer  text,
  device    text,
  ua        text,
  lang      text,
  screen    text,
  ip        text,
  geo       text             -- 大致地区，由后台页面第一次查看时补上
);
create index if not exists visits_at on public.visits (at desc);
create index if not exists visits_ip_at on public.visits (ip, at);

create table if not exists public.comments (
  id        bigint generated always as identity primary key,
  at        timestamptz not null default now(),
  thread    text not null,   -- 哪一篇：文章编号，或 diary / poems
  body      text not null,
  name      text,
  contact   text,            -- 只有后台可见
  anonymous boolean not null default false,
  vid       text,
  platform  text,
  device    text,
  ua        text,
  ip        text,
  geo       text,
  hidden    boolean not null default false
);
create index if not exists comments_thread on public.comments (thread, at);
create index if not exists comments_ip_at on public.comments (ip, at);

create table if not exists public.admins (email text primary key);

alter table public.visits   enable row level security;
alter table public.comments enable row level security;
alter table public.admins   enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from admins where lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')))
$$;

drop policy if exists "admin visits"   on public.visits;
drop policy if exists "admin comments" on public.comments;
drop policy if exists "admin admins"   on public.admins;
create policy "admin visits"   on public.visits   for all to authenticated using (is_admin()) with check (is_admin());
create policy "admin comments" on public.comments for all to authenticated using (is_admin()) with check (is_admin());
create policy "admin admins"   on public.admins   for select to authenticated using (is_admin());

-- 访客 IP：从请求头里取
create or replace function public.client_ip() returns text
language sql stable as $$
  select nullif(btrim(split_part(coalesce(
    current_setting('request.headers', true)::json ->> 'cf-connecting-ip',
    current_setting('request.headers', true)::json ->> 'x-real-ip',
    current_setting('request.headers', true)::json ->> 'x-forwarded-for', ''), ',', 1)), '')
$$;

create or replace function public.log_visit(v jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare cip text := client_ip();
begin
  -- 同一 IP 一分钟最多记 30 条，防刷
  if (select count(*) from visits where ip = cip and at > now() - interval '1 minute') >= 30 then return; end if;
  insert into visits (vid, path, platform, src, referrer, device, ua, lang, screen, ip)
  values (left(v->>'vid', 40), left(v->>'path', 200), left(v->>'platform', 40), left(v->>'src', 60),
          left(v->>'referrer', 300), left(v->>'device', 80), left(v->>'ua', 400), left(v->>'lang', 20),
          left(v->>'screen', 20), cip);
end $$;

create or replace function public.add_comment(c jsonb) returns json
language plpgsql security definer set search_path = public as $$
declare
  cip text := client_ip();
  b   text := btrim(coalesce(c->>'body', ''));
  r   comments;
begin
  if length(b) < 1 or length(b) > 2000 then raise exception 'length'; end if;
  if coalesce(c->>'thread', '') !~ '^[A-Za-z0-9_-]{1,60}$' then raise exception 'thread'; end if;
  -- 同一 IP 十分钟最多 5 条
  if (select count(*) from comments where ip = cip and at > now() - interval '10 minutes') >= 5 then raise exception 'rate'; end if;
  insert into comments (thread, body, name, contact, anonymous, vid, platform, device, ua, ip)
  values (c->>'thread', b,
          nullif(left(btrim(coalesce(c->>'name', '')), 40), ''),
          nullif(left(btrim(coalesce(c->>'contact', '')), 100), ''),
          coalesce((c->>'anonymous')::boolean, false),
          left(c->>'vid', 40), left(c->>'platform', 40), left(c->>'device', 80), left(c->>'ua', 400), cip)
  returning * into r;
  return json_build_object('id', r.id, 'at', r.at, 'body', r.body, 'name', case when r.anonymous then null else r.name end);
end $$;

create or replace function public.get_comments(t text)
returns table (id bigint, at timestamptz, body text, name text)
language sql stable security definer set search_path = public as $$
  select id, at, body, case when anonymous then null else name end
  from comments where thread = t and not hidden order by at asc limit 500
$$;

revoke execute on function public.client_ip() from public, anon, authenticated;
revoke execute on function public.is_admin()  from public, anon;
grant  execute on function public.is_admin()  to authenticated;
grant  execute on function public.log_visit(jsonb), public.add_comment(jsonb), public.get_comments(text) to anon, authenticated;

-- 最后一步：把下面的邮箱换成你在 Authentication → Users 里建的那个账号，再运行这一行
-- insert into public.admins (email) values ('你的邮箱') on conflict do nothing;
