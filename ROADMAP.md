# ROADMAP — Engine Ecosystem

> Tiến trình tổng tất cả engines — nguồn duy nhất cho trạng thái hiện tại.
> Chi tiết từng phase + changelog → engine ROADMAP.md tương ứng.
> Quyết định kiến trúc + log thay đổi → SYNC.md.

---

## Trạng thái engines

| Engine     | Phase hiện tại            | Status                          | Modules  |
| ---------- | ------------------------- | ------------------------------- | -------- |
| Three.js   | Phase D — Polish & Deploy | ✅ Hoàn thành 2026-05-15        | 16 / 16  |
| Babylon.js | Phase A — Foundation      | ⏳ Chưa bắt đầu (sẵn sàng)     | 0 / 16   |

---

## Three.js — Module Index _(16 / 16)_

| Module               | Category   | Phase | Status       |
| -------------------- | ---------- | ----- | ------------ |
| `GlobalUniforms`     | utils      | A     | ✅ unit-pass |
| `RuntimeGuard`       | utils      | A     | ✅ unit-pass |
| `TriplanarMapping`   | shaders    | A     | ✅ unit-pass |
| `WorldNoise`         | shaders    | A     | ✅ unit-pass |
| `RoundedCorners`     | shaders    | A     | ✅ unit-pass |
| `LODSystem`          | utils      | B     | ✅ unit-pass |
| `ProceduralFracture` | shaders    | B     | ✅ unit-pass |
| `InteriorMapping`    | shaders    | B     | ✅ unit-pass |
| `GPUParticleSystem`  | effects    | B     | ✅ unit-pass |
| `SparkSystem`        | effects    | B     | ✅ unit-pass |
| `VATShader`          | shaders    | C     | ✅ unit-pass |
| `LODBillboard`       | components | C     | ✅ unit-pass |
| `CharacterPool`      | utils      | C     | ✅ unit-pass |
| `PostProcessing`     | components | D     | ✅ unit-pass |
| `WindAnimation`      | shaders    | D     | ✅ unit-pass |
| `DayNightCycle`      | utils      | D     | ✅ unit-pass |

→ Chi tiết phase + dependency + changelog: [THREEJS/ROADMAP.md](THREEJS/ROADMAP.md)
→ Module catalog + mô tả: [THREEJS/threejs-modules/README.md](THREEJS/threejs-modules/README.md)

---

## Babylon.js — Module Index _(0 / 16)_

| Module               | Category   | Phase | Status       | Three.js ref        |
| -------------------- | ---------- | ----- | ------------ | ------------------- |
| `GlobalUniforms`     | utils      | A     | ⏳ chưa code | ✅ Three.js          |
| `TriplanarMapping`   | shaders    | A     | ⏳ chưa code | ✅ Three.js          |
| `WorldNoise`         | shaders    | A     | ⏳ chưa code | ✅ Three.js          |
| `RoundedCorners`     | shaders    | A     | ⏳ chưa code | ✅ Three.js          |
| `LODSystem`          | utils      | B     | ⏳ chưa code | ✅ Three.js          |
| `ProceduralFracture` | shaders    | B     | ⏳ chưa code | ✅ Three.js          |
| `InteriorMapping`    | shaders    | B     | ⏳ chưa code | ✅ Three.js          |
| `SparkSystem`        | components | B     | ⏳ chưa code | ✅ Three.js          |
| `VATShader`          | shaders    | C     | ⏳ chưa code | ✅ Three.js          |
| `LODBillboard`       | components | C     | ⏳ chưa code | ✅ Three.js          |
| `CharacterPool`      | utils      | C     | ⏳ chưa code | ✅ Three.js          |
| `PostProcessing`     | components | D     | ⏳ chưa code | ✅ Three.js          |
| `WindAnimation`      | shaders    | D     | ⏳ chưa code | ✅ Three.js          |
| `DayNightCycle`      | utils      | D     | ⏳ chưa code | ✅ Three.js          |

→ Chi tiết phase: [BABYLONJS/ROADMAP.md](BABYLONJS/ROADMAP.md)

---

## Next steps

- [ ] Tích hợp modules vào scene thực tế — `00-Threejs/src/world/`
- [ ] Deploy live demo lên Vercel
- [ ] Bắt đầu Babylon.js Phase A (điều kiện đã đạt ✅)

---

## Tham chiếu

| Engine     | Phase detail           | Module catalog                        | Rules               |
| ---------- | ---------------------- | ------------------------------------- | ------------------- |
| Three.js   | `THREEJS/ROADMAP.md`   | `THREEJS/threejs-modules/README.md`   | `THREEJS/CLAUDE.md` |
| Babylon.js | `BABYLONJS/ROADMAP.md` | `BABYLONJS/babylon-modules/README.md` | `BABYLONJS/CLAUDE.md` |
