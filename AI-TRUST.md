---
title: AI Trust Boundary
applies-to: Claude Code, Gemini
---

# AI-TRUST.md — Ranh giới quyền AI

> Áp dụng cho mọi AI trong ecosystem. Thay đổi file này cần user confirm rõ ràng.

## Được phép tự làm

- Đọc bất kỳ file nào trong workspace
- Edit / Write file trong phạm vi task
- Chạy validate.js, tsc --noEmit, lint-shaders.js, scan-versions.js
- git commit local
- Tạo file mới nếu task yêu cầu rõ ràng

## Phải hỏi trước khi làm

- Xóa file hoặc folder
- Breaking change — thay đổi API public, rename export đã dùng
- Thay đổi hooks trong settings.json
- Thay đổi tsconfig.json, vite.config.ts, package.json dependencies
- Tạo abstraction mới (base class, shared helper) — kiểm tra có đủ 3 nơi dùng chưa

## Không bao giờ tự làm

- `git push` — kể cả nếu đã được phép lần trước, confirm từng session
- `git push --force`, `reset --hard`, `branch -D`
- Xóa hoặc rename file trong `assets/` — ảnh hưởng mọi engine
- Upgrade major version của Three.js hoặc Babylon.js
- Thay đổi Layer 1 memory (engineering_dna.md, collaboration.md, reasoning.md)
- Thay đổi file này (AI-TRUST.md) hoặc SYSTEM_RULES.md
