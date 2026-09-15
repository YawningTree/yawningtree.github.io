# 本地原版音频说明

这里的音乐与兵种战斗音效由 `tools/extract_audio_assets.py` 从用户本机的《Heroes III: Shadow of Death》副本生成。

- 仅用于本人本地、非商业的游戏验证。
- 只映射当前游戏中的 78 个 SoD 兵种与 141 个形态。
- 每个形态包含攻击、受击、死亡；远程形态另含射击。
- 大天使复活使用独立的原作 `resurect` 法术音效，写入 `effects.resurrect`。
- 失明使用原作 `BLIND` 音效，缠绕使用原作 `BIND` 音效，分别写入 `effects.blind` 与 `effects.entangle`。
- `Heroes3/` 原始游戏目录、SND 文件和 MP3 不进入 Git，生成后的音频也不应随公开构建发布。
