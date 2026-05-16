# ECOSYSTEM.md — Bức tranh 3D Web 2025

> Tài liệu tham khảo dài hạn. Cập nhật khi có thay đổi lớn trong ngành.
> Last updated: 2026-05-15

---

## Cập nhật mới nhất — 2026-05-15

### Three.js r184 (March 2026) — Memory optimization
Per-frame allocations bị loại bỏ → complex scene giữ frame rate ổn định hơn.  
Latest: **0.184.0** — dự án hiện tại đang dùng 0.174, nên check migration guide trước khi upgrade.  
Source: [npmjs three](https://www.npmjs.com/package/three) | [utsubo.com](https://www.utsubo.com/blog/threejs-2026-what-changed)

### WebGPU — Production-ready toàn trình duyệt ✅
Safari 26 (Sep 2025) là browser cuối cùng ship WebGPU. Hiện tại **mọi major browser đều support**.  
→ Không còn cần cảnh báo fallback. Stack hiện tại (Three.js + TSL + WebGPU renderer) đã ổn định để ship.  
Source: [webgpu.com](https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/)

### Babylon.js 9.0 (March 2026) — Major release
Đây là release lớn nhất từ trước đến nay. Những thứ quan trọng cho project sau:
- **Node Particle Editor (NPE)** — visual editor tương tự TSL builder, drag-drop
- **Frame Graph v1** — kiểm soát toàn bộ rendering pipeline (render pass ordering)
- **Advanced Gaussian Splat Support + SOG/SPZ format** — native splat rendering
- **Volumetric Lighting** — light scattering với extinction/phase params
- **Inspector v2** — rebuilt React-based, thay thế RuntimeGuard-style debugging
- **Large World Rendering / Floating Origin** — giải quyết float precision ở scale lớn  
Source: [babylonjs.medium.com](https://babylonjs.medium.com/welcome-to-babylon-js-9-0-c3edc9ee6428) | [blogs.windows.com](https://blogs.windows.com/windowsdeveloper/2026/03/26/announcing-babylon-js-9-0/)

### Blender 5.1 — glTF exporter rewrite ✅
Architecture mới, KHR extensions (Draco, transmission, texture_transform) built-in — không cần addon riêng.  
→ Upgrade Blender 5.1 khi có cơ hội — test với gltf-transform pipeline trước để confirm không có breaking change.  
Source: [strayspark.studio](https://www.strayspark.studio/blog/blender-5-1-features-game-developers-spring-2026)

### Claude Code — Rate limit x2 + Background agents
Tháng 5/2026: rate limit tăng gấp đôi, peak-hours reduction bỏ, `/bg` agents giữ permission mode.  
→ Session dài hơn, ít bị throttle hơn — phù hợp với style "1 session dài + compact liên tục".  
Source: [code.claude.com/docs/en/changelog](https://code.claude.com/docs/en/changelog)

### Gaussian Splatting — Chuẩn hóa glTF ⚡
Khronos Group announce **KHR_gaussian_splatting** cho glTF 2.0 (Feb 2026) — ratification dự kiến Q2 2026.  
→ Khi ratify xong: splat có thể embed trực tiếp trong `.glb` → pipeline đơn giản hơn nhiều.  
→ **Watchlist item "Gaussian Splatting → mesh"** nên đổi thành "theo dõi KHR_gaussian_splatting ratification".  
Source: [thefuture3d.com](https://www.thefuture3d.com/blog/state-of-gaussian-splatting-2026/)

### AI 3D — Meshy-6 & Tripo v3.1 (Jan 2026)
**Meshy-6**: Geometry sharp edge mặc định, manifold geometry by default, one-click rigging humanoid + quadruped, AI texture masking.  
→ **Impact trực tiếp:** UV quality tốt hơn nhiều → revisit "có cần tri-planar cho Meshy model không" sau khi test thực tế.

**Tripo v3.1**: Quad-based topology cho game, auto-animation, multi-image input.  
→ Clean quad topology → ít artifact hơn khi bake normal map.  
Source: [z.tools](https://z.tools/blog/meshy-6-vs-tripo-v3-1-3d) | [meshy.ai](https://www.meshy.ai/blog/best-ai-tools-for-3d-printing)

---

## Bản đồ hệ sinh thái

```
3D Web Ecosystem
│
├── A. Framework Wrappers (Three.js làm core)
│   ├── R3F + Drei      — React
│   ├── TresJS          — Vue
│   ├── Threlte         — Svelte
│   └── A-Frame         — Vanilla HTML (ECS)
│
├── B. Game Engines thay thế hoàn toàn
│   ├── Babylon.js      — Microsoft-backed, WebGPU native
│   ├── PlayCanvas      — Editor online, game mobile
│   └── Wonderland      — C++/WASM, chuyên WebXR
│
├── C. Rendering Layer (cấp thấp nhất)
│   ├── Three.js        — JS, đang adopt WebGPU + TSL
│   ├── Babylon.js      — JS, WebGPU native từ đầu
│   └── wgpu (Rust)     — WASM, rời khỏi JS hoàn toàn
│
├── D. AI 3D Generation (pipeline thay đổi)
│   ├── Tripo AI        — text/image → 3D, auto-rigging
│   ├── Meshy.ai        — text/image → 3D, geometry focus
│   └── Luma AI Genie   — NeRF / Gaussian Splatting
│
├── E. Physics / Simulation
│   ├── Rapier          — Rust/WASM, nhanh nhất hiện tại
│   └── Cannon.js       — Pure JS, legacy nhưng vẫn dùng
│
├── F. No-Code / Low-Code
│   └── Spline          — browser-based, scroll animation, Webflow
│
├── G. XR / Spatial Computing
│   ├── WebXR API       — W3C standard, browser native
│   ├── A-Frame         — ECS layer trên WebXR
│   └── Wonderland      — WebXR-first engine
│
├── H. 3D Content Creation (asset pipeline)
│   ├── Blender         — modeling, rigging, glTF export, Vulkan backend (5.x)
│   └── gltf-transform  — CLI optimize/compress/analyze glTF
│
└── I. AI Development Tooling (build workflow)
    ├── Claude Code     — AI-first coding, agent teams, MCP, hooks
    └── Gemini          — architecture, git, maintenance
```

---

## So sánh theo chiều dọc

| Hướng              | Độ phổ biến | Tốc độ thay đổi | Liên quan stack hiện tại |
| ------------------ | ----------- | --------------- | ------------------------ |
| R3F / Drei         | ⭐⭐⭐⭐⭐      | Trung bình      | Thấp — React dependency  |
| Babylon.js         | ⭐⭐⭐⭐        | Cao             | Trung bình — có thể học  |
| Three.js + TSL     | ⭐⭐⭐⭐        | Cao nhất        | ✅ Đang dùng             |
| AI 3D Generation   | ⭐⭐⭐⭐        | Rất cao         | ✅ Đang dùng (Tripo)     |
| Spline             | ⭐⭐⭐          | Trung bình      | Thấp — no-code           |
| WebXR / Spatial    | ⭐⭐⭐          | Cao             | Thấp — tương lai         |
| wgpu / Rust        | ⭐⭐           | Cao             | Rất thấp — niche         |
| PlayCanvas         | ⭐⭐⭐          | Thấp            | Thấp                     |
| Blender 5.x        | ⭐⭐⭐⭐⭐      | Cao             | ✅ Đang dùng (asset pipeline) |
| Claude Code        | ⭐⭐⭐⭐⭐      | Rất cao         | ✅ Đang dùng (primary AI) |

---

## Phân tích từng hướng

### A. Framework Wrappers — R3F và các anh em

**React Three Fiber (R3F)**
- Lớp React trên Three.js — declarative scene graph
- Ecosystem: **Drei** (helpers), **Leva** (debug UI), **React Spring** (animation)
- Dùng khi: app có nhiều UI React tích hợp với 3D
- Không dùng khi: project không dùng React, cần hiểu Three.js sâu
- ⚠️ **WebGPU**: R3F chưa support WebGPU stable — có branch riêng nhưng chưa production-ready. Stack hiện tại (`NodeMaterial` + TSL) sẽ không hoạt động đúng nếu wrap vào R3F bây giờ. Revisit khi R3F WebGPU branch merge vào main.
- 📚 **Bruno Simon** (Three.js Journey) có chapter riêng về R3F — tham khảo khi đến thời điểm migrate

**TresJS (Vue)**
- Clone R3F cho Vue 3, đang phát triển nhanh
- Nhỏ hơn R3F nhưng API tương tự

**Threlte (Svelte)**
- Clean nhất về cú pháp, nhỏ nhất về bundle
- Svelte's reactive system phù hợp với animation

**A-Frame**
- HTML-based: `<a-box>`, `<a-sphere>` — không cần viết JS
- ECS (Entity Component System) — component-based như Unity
- Phù hợp: WebXR prototyping, education

---

### B. Game Engines — Khi cần nhiều hơn Three.js

**Babylon.js**
- Microsoft-backed → ổn định lâu dài
- WebGPU native từ đầu (không retrofit như Three.js)
- Có visual editor, PBR mạnh, physics tích hợp
- Học khi: muốn chuyển khỏi Three.js hoặc cần editor workflow

**PlayCanvas**
- Editor online, collaborative (như Figma cho 3D)
- Phổ biến trong game mobile HTML5
- Dùng nhiều ở game ads, casual games

**Wonderland Engine**
- C++/WASM — nhanh nhất cho WebXR
- Target: VR/AR web experiences

---

### C. Rendering Layer — Tương lai WebGPU

**Three.js + TSL** (stack hiện tại)
- TSL = shader portable sang WebGL2 và WebGPU
- 0.174 đã có WebGPU renderer — đang dẫn đầu adopt

**Babylon.js WebGPU**
- Đã stable từ lâu hơn Three.js
- Nếu Three.js TSL gặp vấn đề → Babylon là plan B

**wgpu (Rust → WASM)**
- Bỏ qua JS hoàn toàn — dùng cho performance-critical
- Vulkan/Metal/DX12/OpenGL ES backend
- Niche: game engine level, không phổ biến trong web dev

---

### D. AI 3D Generation — Đang thay đổi pipeline

**Market:** 23.5% CAGR 2024–2030 → đây là hướng lớn nhất thay đổi workflow

| Tool          | Strength                  | Weak point                    |
| ------------- | ------------------------- | ----------------------------- |
| **Tripo AI**  | Auto-rigging, 3M+ devs    | Texture đôi khi không đồng đều |
| **Meshy.ai**  | Geometry detail tốt       | Rigging kém hơn Tripo         |
| **Luma Genie**| Realism cao (NeRF/Splat)  | Không có mesh rõ ràng để edit |

**Pipeline hiện tại** (đang dùng):
```
Tripo/Meshy → raw/ → Blender MCP (optimize) → optimized/ → gltf-transform → production/
```

---

### E. Physics — Thêm khi cần

**Rapier** (khuyên dùng)
- Rust/WASM — fastest web physics
- API: `@dimforge/rapier3d-compat`
- Tích hợp tốt với R3F (qua `@react-three/rapier`) và vanilla

**Cannon.js / Cannon-es**
- Pure JS — dễ setup hơn, chậm hơn
- Legacy nhưng vẫn đủ cho simple physics

---

### F. No-Code — Spline và vai trò của nó

**Spline**
- Browser-based editor, export embed code
- State-based animation (không timeline-based)
- Webflow integration — popular với marketing/landing page

**Dùng khi:** client muốn 3D trên website mà không cần dev nhiều  
**Không dùng khi:** cần full control, custom shader, dynamic content

---

### H. Blender — Asset Pipeline

**Version hiện tại:** Blender **5.1** (March 2026) — stable. 4.5 LTS hỗ trợ đến July 2027.

**Vai trò trong project:** Optimize AI-generated mesh (Tripo/Meshy) → export glTF production-ready.

```
AI mesh (Tripo/Meshy) → Blender (weld, simplify, UV, bake) → glTF → gltf-transform → production/
```

#### Blender 5.1 — Thay đổi quan trọng cho Web-3D (March 2026)

| Feature | Chi tiết | Impact |
|---------|---------|--------|
| **glTF exporter rewrite** | Kiến trúc mới — morph target và animation sampling ổn định hơn | Ít artifact khi export character animation |
| **KHR extensions built-in** | Draco, transmission, volume, emissive_strength, texture_transform — tất cả trong 1 UI | Không cần addon riêng lẻ nữa |
| **FBX Shape Key normals** | Shape Key normals giờ export được vào FBX | Character blend shape chính xác hơn |
| **Vulkan backend** (5.0) | Foundation refresh — hiệu suất viewport tốt hơn | Blender MCP nhanh hơn trên Windows |

**KHR extensions quan trọng nhất cho stack:**
- `KHR_draco_mesh_compression` — nén geometry, giảm file size ~50-80%
- `KHR_materials_transmission` — glass, water material trực tiếp trong glTF
- `KHR_texture_transform` — scale/offset texture không cần UV bake lại

**Blender MCP** (đang dùng): Gemini điều khiển Blender programmatically → optimize, weld, simplify mesh → export glTF → production pipeline.

Sources: [Blender 5.1 release](https://www.blender.org/download/releases/5-1/) | [5.1 game dev features](https://www.strayspark.studio/blog/blender-5-1-features-game-developers-spring-2026)

---

### I. Claude Code — AI Development Tooling

**Version hiện tại:** CLI + VS Code extension (tự update). Rate limit tháng 5/2026 tăng gấp đôi.

**Vai trò trong project:** Primary coding AI — viết module, shader TSL, debug, code review.

#### Architecture hiện tại của Claude Code (2026)

```
Claude Code
├── Agent SDK      — Python/TS: build custom agent với tool access
├── MCP            — connect tới external tools (database, browser, design, APIs)
├── Hooks          — custom code chạy tại lifecycle points (PreToolUse, PostToolUse, SessionStart...)
├── Skills         — domain knowledge bundled thành context cho AI
└── Subagents      — parallel specialized agents, mỗi cái có context window riêng
```

#### Cập nhật đáng chú ý (May 2026)

| Feature | Mô tả |
|---------|-------|
| **Rate limit x2** | Pro/Max/Team/Enterprise — không còn peak-hours reduction trên Pro/Max |
| **Background agents `/bg`** | Giờ giữ nguyên permission mode hiện tại, không revert về default |
| **Rewind "Summarize up to here"** | Compact context ngay tại điểm bác muốn, không mất recent turns |
| **`claude agents --cwd <path>`** | Scope danh sách session theo directory — hữu ích khi có nhiều project |
| **`/feedback` multi-session** | Gửi feedback kèm session 24h hoặc 7 ngày — debug cross-session issue |

#### Liên quan trực tiếp đến Web-3D workflow

**Đang dùng:**
- Hooks `SessionStart` → auto-load Living Index trong CLAUDE.md
- Skills system → `dispose-pattern`, `shader-tsl`, `triplanar-mapping`, v.v.
- Memory system (`~/.claude/projects/`) → persistent context across sessions

**Có thể khai thác thêm:**
- MCP + Blender → Gemini hiện dùng MCP để drive Blender; Claude Code có thể dùng tương tự cho workflow debug 3D
- Subagents → Explore agent đang dùng cho search trong session
- Agent SDK → build custom test runner cho `validate.js` pipeline tự động

Sources: [Claude Code changelog](https://code.claude.com/docs/en/changelog) | [Agent teams 2026](https://www.developersdigest.tech/blog/claude-code-agent-teams-subagents-2026) | [MCP + hooks guide](https://alexop.dev/posts/understanding-claude-code-full-stack/)

---

### G. WebXR / Spatial Computing — Dài hạn

- **5.35B người** có thể dùng WebXR device (2024)
- **Metaverse market:** $153.4B (2025) → $3.37T (2034) — số lớn nhưng timeline không chắc
- Apple Vision Pro đẩy spatial computing mainstream
- Wolvic browser: Eye/Hand Tracking support (2025)

**Cần theo dõi:** khi headset rẻ hơn → WebXR sẽ thực sự bùng nổ

---

## Vị trí của stack hiện tại

```
[Stack hiện tại]
Vite + TypeScript + Three.js 0.174 + TSL + WebGPU renderer
         ↓
[Nằm ở đây trong ecosystem]
Rendering Layer C → đang dẫn đầu về WebGPU adoption
AI Pipeline D     → đang dùng Tripo + Meshy
         ↓
[Có thể mở rộng sang]
Physics E         → thêm Rapier khi cần simulation
WebXR G           → Three.js renderer.xr khi project cần VR
```

---

## Tích hợp vào dự án — Roadmap

### Tích hợp được ngay (khi cần)

| Tool | Package | Tích hợp vào đâu | Điều kiện |
| ---- | ------- | ---------------- | --------- |
| **Leva** | `leva` | Dev workflow — tweak shader uniforms real-time | Ngay Phase A khi build TriplanarMapping |
| **Rapier** | `@dimforge/rapier3d-compat` | `threejs-modules/physics/PhysicsWorld/` | Khi scene cần rigid body / va chạm |
| **WebXR** | built-in Three.js | `renderer.xr.enabled = true` | Khi muốn thử VR — gần như zero cost |

### Cần setup thêm (medium effort)

| Tool | Effort | Giá trị | Ghi chú |
| ---- | ------ | ------- | ------- |
| **Gaussian Splatting viewer** | 2–4h | Cao nếu Luma mesh export mature | Xem watchlist |
| **Babylon.js (song song)** | Dự án riêng | Cao — so sánh trực tiếp | Xem phân tích bên dưới |

---

## Watchlist — Theo dõi định kỳ

| Tool / Trend | Theo dõi gì | Check mỗi |
| --- | --- | --- |
| **KHR_gaussian_splatting ratification** | Q2 2026 ratify chưa? → pipeline đổi khi xong | 1 tháng |
| **Meshy-6 UV quality thực tế** | UV đủ sạch để bypass tri-planar trên model mới không? | Test khi dùng |
| **Three.js upgrade 0.174→0.184** | Migration guide có breaking change nào với TSL/NodeMaterial? | Trước Phase C |
| **Babylon.js 9.0 NPE vs TSL** | Node Particle Editor có API tương đương TSL builder không? | Khi bắt đầu BABYLONJS |
| **Blender 5.1 glTF exporter** | KHR_draco export có breaking change với gltf-transform pipeline không? | Trước khi upgrade Blender |
| **Claude Code MCP + Blender** | Claude Code có thể điều khiển Blender MCP để automate validate pipeline không? | Sau Phase C |
| **WebXR headset pricing** | Khi < $300 → spatial computing mainstream | 6 tháng |
| **R3F independence** | Có tách khỏi React dependency không? | 6 tháng |

---

## Babylon.js — Dự án song song?

**Đánh giá:** Có tiềm năng — nhưng đúng thời điểm mới có giá trị.

### Điểm mạnh của Babylon.js cho dự án song song

| Yếu tố | Chi tiết |
| --- | --- |
| **Microsoft-backed** | Không bị abandon như nhiều OSS khác — ổn định lâu dài |
| **WebGPU native từ đầu** | Không retrofit như Three.js — architecture sạch hơn |
| **Visual Node Material Editor** | Drag-drop shader graph — nhanh prototype hơn code TSL thuần |
| **Inspector built-in** | Debug scene ngay trong browser, không cần viết RuntimeGuard |
| **Physics tích hợp sẵn** | Havok physics (Microsoft) — không cần setup Rapier riêng |
| **Job market** | Nhiều enterprise dùng Babylon.js cho product visualization, industrial |

### Khi nào nên bắt đầu

```
Không nên ngay bây giờ — lý do:
  Phase A chưa xong → threejs-modules chưa có foundation
  Học song song 2 engine → diluted focus, không sâu cái nào

Nên bắt đầu sau khi:
  ✅ Phase A hoàn thành (4 module: GlobalUniforms, TriplanarMapping, WorldNoise, RoundedCorners)
  ✅ Có ít nhất 1 scene chạy ổn với Three.js
  → Lúc đó hiểu đủ sâu để so sánh meaningful
```

### Format dự án song song đề xuất

Không clone toàn bộ — build lại 1 module Phase A bằng Babylon.js để so sánh trực tiếp:

```
01-Babylon/
├── src/
│   └── TriplanarMapping/   ← rebuild module này bằng Babylon Node Material
└── package.json
```

So sánh: API khác nhau thế nào, performance ra sao, shader workflow dễ hay khó hơn → quyết định có đầu tư thêm không.

---

## Không cần theo dõi (với stack hiện tại)

- **wgpu/Rust** — quá low-level, chỉ relevant khi build game engine từ đầu
- **Godot web export** — game engine workflow, không phải web-first
- **A-Frame** — HTML-based, conflict với TypeScript module system
- **Spline** — no-code, conflict với custom shader workflow
- **PlayCanvas** — editor-first, không phù hợp code-first architecture
- **Cannon.js** — deprecated, dùng Rapier thay thế
