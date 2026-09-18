# 本地原版资源说明

这里的单位动画与界面背景分别由 `tools/extract_h3_assets.py` 和 `tools/extract_ui_assets.py` 从用户本机的《Heroes III: The Shadow of Death》副本生成。

- 仅用于本人本地、非商业的游戏验证。
- `Heroes3/` 原始游戏文件和音频不进入 Git。
- 图集已按阵营拆分，单位为无损 WebP；H3 PCX 使用文件内置调色板解码。
- `manifest.json` 是展示层唯一读取的资源索引；缺少单位形态时资源检查会失败。动画清单当前为 `version = 9`，包含由 `CRANIM.TXT` 生成的移动、攻击、待机、高潮帧和动作总时长。
- 战斗状态目标特效另存于 `effects/`：复活 `C01SPE0.DEF`、失明 `C02SPF0.DEF`、缠绕 `SP02_.DEF`、再生 `SP12_.DEF`、吸血 `SP06_.DEF`、暴击 `SP03_.DEF`、衰老 `SP01_.DEF`、酸蚀 `C0ACID.DEF`、恐惧 `C0FEAR.DEF`、雷击按 SoD 原始能力映射仅使用 `C11SPA1` 12帧爆散；`C11SPA0` 是英雄 Lightning Bolt 的雷柱组件，`C03SPA0/C03SPA1` 是连锁闪电资源，均不作为雷鸟技能演出。高级嗜血是原作红色调程序效果，不生成替代 DEF；地下城补入驱散 `C05SPW0`、高级虚弱 `C17SPW0`、中毒 `SP11_`、死亡凝视 `C07SPE0`；元素城补入御气 `C11SPE0`、御水 `C11SPF0`、御火 `C11SPW0`、御土 `C13SPA0`。
- 不应把包含这些原版资源的构建公开发布。

## 本批地狱机制与资源

十字爆炸/死亡云、永久恶魔转换、天然初级火盾、三头/环击边界及原作资产来源见[地狱技能评估](../../docs/inferno-skill-review.md)。当前基线为0.5.5；墓园、据点、元素城与中立单位评估分别见 `docs/undead-skill-review.md`、`docs/stronghold-skill-review.md`、`docs/conflux-skill-review.md`、`docs/neutral-skill-review.md`。动画时长约束统一见[战斗动画与音效时序规范](../../docs/animation-timing.md)。
