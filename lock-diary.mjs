// 把本地的 diary.src.js（随记原文，不上传）加密成 diary.enc.js（网站用）。
// 用法：node lock-diary.mjs <密码>
// 加密方式：PBKDF2-SHA256 20 万次派生密钥 + AES-GCM；网页里输对密码才能在浏览器里解开。
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as crypto } from 'node:crypto';
import vm from 'node:vm';

const pw = process.argv[2];
if (!pw) { console.error('用法：node lock-diary.mjs <密码>'); process.exit(1); }
const ctx = { window: {} };
vm.runInNewContext(readFileSync(new URL('./diary.src.js', import.meta.url), 'utf8'), ctx);
const data = ctx.window.DIARY;
if (!Array.isArray(data)) { console.error('diary.src.js 里没有 window.DIARY'); process.exit(1); }

const ITER = 200000;
const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(data))));
const b64 = u => Buffer.from(u).toString('base64');
writeFileSync(new URL('./diary.enc.js', import.meta.url),
  `/* 黄鈺茜 · 随记（已加密，需要密码；原文不在网站上） */\nwindow.DIARY_ENC=${JSON.stringify({ n: data.length, iter: ITER, salt: b64(salt), iv: b64(iv), ct: b64(ct) })};\n`);
console.log(`已加密 ${data.length} 篇随记 → diary.enc.js`);
