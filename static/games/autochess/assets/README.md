# 本地原版资源说明

这里的单位动画、菜单背景与战斗地形由 `tools/extract_h3_assets.py` 和 `tools/extract_ui_assets.py` 从用户本机的《Heroes III: The Shadow of Death》副本生成。

- 仅用于本人本地、非商业的游戏验证。
- `HeroesIII/` 原始游戏文件和音频不进入 Git。
- 图集已按阵营拆分，单位为无损 WebP，全屏背景为高质 WebP。
- `manifest.json` 是展示层唯一读取的资源索引；缺少单位形态时资源检查会失败。
- 不应把包含这些原版资源的构建公开发布。
