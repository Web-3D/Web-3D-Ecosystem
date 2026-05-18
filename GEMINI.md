# GEMINI.md — Ecosystem Context

> Tầng này: ecosystem — assets, cross-engine research, GitHub, docs site.
> KHÔNG can thiệp: shader code, module structure của từng engine.
> Chi tiết skills: `.gemini/README.md`
> → Đọc `THREEJS/CLAUDE.md` cho Three.js detail.
> → Đọc `BABYLONJS/CLAUDE.md` cho Babylon.js detail.

---

## Vai trò của Gemini trong ecosystem

| Gemini làm | Claude Code làm |
|---|---|
| Tìm module trong engine library | Tích hợp module vào project |
| Viết `SUMMARY.md` cho handoff | Đọc `SUMMARY.md`, adapt code |
| Push code lên GitHub | Code + review |
| Research thị trường AI 3D | Build shaders + modules |
| Quản lý `assets/` catalog | Import asset vào scene |
| Tạo GitHub Actions workflows | Review + test workflows |
| Update `Docs/` sync khi cần | Thiết kế cấu trúc docs |

**Không overlap:** Gemini không viết shader code. Claude không push GitHub hay research market.

---

## Workspace layout

```
Web-3D/                    ← Ecosystem root (mở Gemini ở đây)
├── .gemini/               ← Brain Gemini (file này thuộc đây)
├── .claude/               ← Brain Claude Code (đừng sửa)
├── assets/                ← Shared 3D assets — Gemini quản lý catalog
├── SYNC.md                ← Shared AI log — đọc đầu mỗi session
├── GEMINI.md              ← File này
├── FACTORY-COMPATIBILITY.md ← Ma trận tương thích Web-3D ↔ Factory tools
├── THREEJS/               ← Three.js engine (Phase D ✅ — 26 modules)
│   └── threejs-modules/   ← Module library — Gemini tìm ở đây
└── BABYLONJS/             ← Babylon.js engine (chưa bắt đầu)
    └── babylon-modules/   ← Module library — Gemini tìm ở đây (khi Phase A bắt đầu)

c:\Factory\                ← DCC pipeline (Blender, Houdini, Substance) — ngoài Web-3D root
c:\Docs\                   ← VitePress docs site — sync từ tất cả projects, deploy Vercel
    └── sync.js            ← Chạy: node sync.js --push để update toàn bộ docs
```

---

## 4 Quy tắc không ngoại lệ

**1. Không viết shader code** — mọi TSL/WGSL/GLSL là việc của Claude Code.

**2. SUMMARY.md bắt buộc khi handoff** — khi tìm xong module, luôn viết `SUMMARY.md` trước khi báo Claude. Format: `.gemini/skills/handoff-to-claude/SKILL.md`.

**3. Không sửa `src/imported/[name]/`** — giữ nguyên để diff. Chỉ Claude mới adapt.

**4. Asset chỉ import từ `production/`** — chỉ dùng path `assets/[category]/[name]/production/`.

---

## Trạng thái hiện tại

→ [`/ROADMAP.md`](ROADMAP.md) — nguồn duy nhất cho tiến trình tất cả engines.

| Engine | Phase | Trạng thái | Modules |
|---|---|---|---|
| Three.js | Phase D ✅ | Hoàn thành | 26 modules |
| Babylon.js | Phase A | ⏳ Chưa bắt đầu | 0 modules |
| Factory | — | ⏳ Blender pipeline đang build | — |

---

## File quan trọng cần đọc khi bắt đầu task

| Task | File cần đọc |
|---|---|
| Bắt đầu session bất kỳ | `SYNC.md` — trạng thái hiện tại + quyết định gần nhất |
| Tìm module Three.js | `THREEJS/threejs-modules/README.md` → catalog |
| Tìm module Babylon.js | `BABYLONJS/babylon-modules/README.md` → catalog (khi Phase A bắt đầu) |
| Đọc rules engine Three.js | `THREEJS/CLAUDE.md` |
| Đọc rules engine Babylon.js | `BABYLONJS/CLAUDE.md` |
| Handoff sang Claude | `.gemini/skills/handoff-to-claude/SKILL.md` |
| Push GitHub | `.gemini/skills/github-push/SKILL.md` |
| Research market | `.gemini/skills/market-research/SKILL.md` |
| Thêm/track asset | `.gemini/skills/asset-pipeline/SKILL.md` |
| Bộ luật asset | `assets/README.md` → catalog + rules |
| Xem tất cả assets đã validate | `assets/REGISTRY.json` — auto-generated, đừng sửa tay |
| Tính năng nên làm sau (Three.js) | `THREEJS/deferred/README.md` |
| Xem compatibility Factory ↔ Web-3D | `FACTORY-COMPATIBILITY.md` |
| Update docs site | `c:\Docs\sync.js` — chạy `node sync.js --push` |

---

## Docs Site

- **Local:** `c:\Docs\`
- **GitHub:** https://github.com/NgQuan86/web3d-docs
- **Live:** https://docs-3d-ng.vercel.app/
- **Update:** `cd c:\Docs && node sync.js --push` — copy ALL MD từ mọi project → commit → push → Vercel redeploy tự động

**Nguồn sync:** Web-3D, THREEJS (26 modules README), BABYLONJS, Factory — tổng ~37+ files.

---

## Three.js Module Index (26 modules)

| Category | Modules |
|---|---|
| Effects (8) | BaseGPUEffect, BeamEffect, BillboardSprite, FireSystem, GPUParticleSystem, ShockwaveRing, SparkSystem, TrailSystem |
| Shaders — Foundation (2) | BaseShaderMaterial, WorldNoise |
| Shaders — Vertex (3) | ProceduralFracture, VATShader, WindAnimation |
| Shaders — Fragment (4) | DissolveShader, InteriorMapping, RoundedCorners, TriplanarMapping |
| Utils (6) | BaseWorld, CharacterPool, DayNightCycle, GlobalUniforms, LODSystem, RuntimeGuard |
| Components (3) | LODBillboard, OutlineShader, PostProcessing |
