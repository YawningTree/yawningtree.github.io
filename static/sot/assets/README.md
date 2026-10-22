# 本地原版资源说明

这里的单位动画与界面背景分别由 `tools/extract_h3_assets.py` 和 `tools/extract_ui_assets.py` 从用户本机的《Heroes III: The Shadow of Death》副本生成。

- 仅用于本人本地、非商业的游戏验证。
- `Heroes3/` 原始游戏文件和音频不进入 Git。
- 图集已按阵营拆分，单位为无损 WebP；H3 PCX 使用文件内置调色板解码。
- `manifest.json` 是展示层唯一读取的资源索引；缺少单位形态时资源检查会失败。动画清单当前为 `version = 10`，包含由 `CRANIM.TXT` 生成的移动、攻击、待机、高潮帧和动作总时长。
- 战斗状态目标特效另存于 `effects/`：复活 `C01SPE0.DEF`、失明 `C02SPF0.DEF`、缠绕 `SP02_.DEF`、再生 `SP12_.DEF`、吸血 `SP06_.DEF`、暴击 `SP03_.DEF`、衰老 `SP01_.DEF`、好运 `C09SPA0.DEF`、坏运 `C10SPF0.DEF`、酸蚀 `C0ACID.DEF`、恐惧 `C0FEAR.DEF`、雷鸟雷击仅使用 `C11SPA1` 12帧爆散；`C11SPA0` 与 `C03SPA0` 逐字节相同；`C11SPA1` 与 `C03SPA1` 的帧 1–11 相同，但 `C03SPA1` 帧 0 带整行顶部对齐像素。高级嗜血是原作红色调程序效果，不生成替代 DEF；地下城补入驱散 `C05SPW0`、高级虚弱 `C17SPW0`、中毒 `SP11_`、死亡凝视 `C07SPE0`；元素城补入御气 `C11SPE0`、御水 `C11SPF0`、御火 `C11SPW0`、御土 `C13SPA0`；0.9.8 补入牺牲 `C12SPF1`/`C12SPF0`、移除障碍 `C18SPW0`、魔镜 `C02SPA0`；0.10.0 四系召唤复用 `C01SPE0` 作为独立 `summonElemental` 效果。
- 开战场地法术（0.8.0）按原作存入每块场地的**三件套**：出现（`C17SPE0`/`C09SPF0`/`C15SPE0`/`C07SPF60`）、站立循环（`C17SPE1` 8 帧 / `C09SPF1` 1 帧 / `C15SPE1` 9 帧 / `C07SPF61` 10 帧）、解除（`C15SPE2`/`C07SPF62`），外加地雷爆炸 `C09SPF3`。出现素材与站立素材共用同一张原作画布（提取时保留原始画布 `keepCanvas`），逐帧居中绘制，因此交接时不跳动；出现与解除素材名取自可执行文件的战斗效果表（文件偏移 `0x241E08`），站立素材名取自 VCMI 法术配置的 `animation` 字段。
- 不应把包含这些原版资源的构建公开发布。

## 本批地狱机制与资源

十字爆炸/死亡云、永久恶魔转换、天然初级火盾、三头/环击边界及原作资产来源见[地狱技能评估](../../docs/inferno-skill-review.md)。当前基线为0.5.9；墓园、据点、元素城与中立单位评估分别见 `docs/undead-skill-review.md`、`docs/stronghold-skill-review.md`、`docs/conflux-skill-review.md`、`docs/neutral-skill-review.md`。动画时长约束统一见[战斗动画与音效时序规范](../../docs/animation-timing.md)。

2026-10-18 开战控制、连锁与全场法术：

- 地震：SoD 没有战斗 DEF 图集，只接入 `ERTHQUAK` 音效与画面震动；不生成替代法术贴图。
- 连锁闪电：`C11SPA0`（目标上方锚定雷柱）+ `C11SPA1`（12 帧爆散）。主目标先使用 `C11SPA0`；后续雷弧没有 DEF，按原作 `SBolt/doBolt` 程序绘制；全部跳完后所有目标同时播放 `C11SPA1` 爆散。`C03SPA1` 的帧 0 含整行顶部对齐像素，会造成目标顶部一线浅色伪影，因此改用画面等价的 `C11SPA1`。
- 死亡波纹：`C04SPE0`（15 帧）；亡灵杀手：`C14SPA0`（15 帧，50% 透明）。死亡之云 `SP04_` 在本项目中取消透明度，固定为 1.0。
- 以上图集已加入 `public/sw.js` 预缓存，并随 `SPELL_EFFECT_ASSET_VERSION = 6` 刷新缓存。
