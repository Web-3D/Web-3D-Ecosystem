# CLAUDE.md — Ecosystem Root

> Tầng này quản lý: workspace layout, shared assets, danh sách engines, vai trò AI.
> KHÔNG định nghĩa: engine rules, shader patterns, module structure, build order.
> → Đọc `THREEJS/CLAUDE.md` cho Three.js detail.
> → Đọc `BABYLONJS/CLAUDE.md` cho Babylon.js detail (sau Phase A).

---

## Workspace layout

```
Engine/                          ← Ecosystem root (mở Claude Code ở đây)
├── .claude/skills/              ← Skills cho tất cả engines
├── assets/                      ← Shared 3D assets — dùng chung mọi engine
│   ├── REGISTRY.json            ← Auto-generated, không sửa tay
│   ├── buildings/
│   ├── characters/
│   ├── environments/
│   ├── props/
│   └── textures/
├── CLAUDE.md                    ← File này — ecosystem only
├── SYNC.md                      ← Progress log — đọc đầu mỗi session
├── THREEJS/                     ← Three.js engine (Phase D ✅ — 26 modules)
│   ├── CLAUDE.md                ← Engine rules — đọc khi làm việc trong THREEJS
│   ├── threejs-modules/         ← Module library
│   └── 00-Threejs/              ← Main project
└── BABYLONJS/                   ← Babylon.js engine (Phase A ⏳)
    ├── CLAUDE.md                ← Engine rules — đọc khi làm việc trong BABYLONJS
    └── babylon-modules/         ← Module library
```

---

## Asset pipeline

```
Factory/source/ → Blender bake → Factory/baked/ → gltf-transform → Engine/assets/[cat]/production/
```

Import path: `../../assets/[category]/[name]/production/` từ project con.  
Validate: `node THREEJS/validate.js assets/[category]/[name]` từ root này.  
Factory rules: `c:\Factory\CLAUDE.md` — bake policy, format, export settings.

---

## Vai trò AI tại tầng ecosystem

| AI | Làm gì ở tầng này |
|---|---|
| **Claude Code** | Toàn bộ: đọc SYNC.md, xác định engine, delegate xuống engine CLAUDE.md, quản lý assets/, research, git |

> Gemini rời ecosystem 2026-05-29 (Antigravity bỏ hỗ trợ IDE) — Claude đảm nhận solo. NgQuan duyệt + quyết định push.

**Phân quyền rõ:** Khi task thuộc về engine cụ thể → đọc engine CLAUDE.md trước khi làm. Push GitHub: chỉ khi NgQuan duyệt.

---

## Engines

| Engine | Thư mục | Trạng thái | CLAUDE.md |
|---|---|---|---|
| Three.js | `THREEJS/` | ✅ Phase D hoàn thành (2026-05-15) — 26 modules | `THREEJS/CLAUDE.md` |
| Babylon.js | `BABYLONJS/` | ⏳ Chưa bắt đầu | `BABYLONJS/CLAUDE.md` |
