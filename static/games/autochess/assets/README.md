# 本地原版资源说明

这里的单位动画与界面背景分别由 `tools/extract_h3_assets.py` 和 `tools/extract_ui_assets.py` 从用户本机的《Heroes III: The Shadow of Death》副本生成。

- 仅用于本人本地、非商业的游戏验证。
- `Heroes3/` 原始游戏文件和音频不进入 Git。
- 图集已按阵营拆分，单位为无损 WebP；H3 PCX 使用文件内置调色板解码。
- `manifest.json` 是展示层唯一读取的资源索引；缺少单位形态时资源检查会失败。
- 战斗状态目标特效另存于 `effects/`：复活 `C01SPE0.DEF`、失明 `C02SPF0.DEF`、缠绕 `SP02_.DEF`。
- 不应把包含这些原版资源的构建公开发布。

## 本批地狱机制与资源

十字爆炸/死亡云、永久恶魔转换、天然初级火盾、三头/环击边界及原作资产来源见[地狱技能评估](../../docs/inferno-skill-review.md)。已发布基线为0.3.7，本批实现待实机验收。
