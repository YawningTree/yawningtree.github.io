# 本地原版音频说明

这里的音乐与兵种战斗音效由 `tools/extract_audio_assets.py` 从用户本机的《Heroes III: Shadow of Death》副本生成。

- 仅用于本人本地、非商业的游戏验证。
- 只映射当前游戏中的 78 个 SoD 兵种与 141 个形态。
- 每个形态包含攻击（`attk`）、受击（`wnce`）、死亡（`kill`）；远程形态另含射击（`shot`）。`dfnd` 是防御音效，不用于普通受击。
- 远程单位主动攻击使用射击音效，近战反击使用攻击音效；升级形态按 `upgradedAbilities` 判断远程能力。
- 基础弓箭手使用 `lcrs`，神射手使用 `hcrs`。
- 金龙普攻和龙息共用原作 `godrattk`；本地素材没有独立龙息音源，特殊动画不会自动改用法术或射击音效。
- manifest 的 `*Sample` 字段记录原始音源名；`npm run assets:check` 校验音源类别和各形态远程标记。
- 大天使复活使用独立的原作 `resurect` 法术音效，写入 `effects.resurrect`。
- 失明使用原作 `BLIND` 音效，缠绕使用原作 `BIND` 音效，分别写入 `effects.blind` 与 `effects.entangle`。
- 再生、吸血、衰老分别使用原作 `REGENER`、`DRAINLIF`、`AGE`，写入 `effects.regen`、`effects.drain`、`effects.aging`。
- 暴击使用原作 `DEATHBLO` 音效并写入 `effects.critical`；`SP03_.DEF` 按 `BEFORE_HIT` 在普通攻击前播放。
- 高级嗜血使用原作 `BLOODLUS` 并写入 `effects.bloodlust`；雷击使用 `LIGHTBLT` 并写入 `effects.thunder`。
- 四系高级御法使用 `PROTECTA/PROTECTW/PROTECTF/PROTECTE`，写入 `effects.protectionAir/protectionWater/protectionFire/protectionEarth`；凤凰涅槃复用 `RESURECT`，不伪造专属音效。
- 锈龙酸蚀使用原作 `ACID`，碧龙恐惧使用原作 `FEAR`，分别写入 `effects.acid/effects.fear`；两者来自本地 SoD 扩展 SND，并与对应 `C0ACID.DEF`/`C0FEAR.DEF` 独立帧同步触发。
- `Heroes3/` 原始游戏目录、SND 文件和 MP3 不进入 Git，生成后的音频也不应随公开构建发布。

## 默认音量

原作 `sod.ini` 的音乐和音效设置均为 `0–9` 档，本机配置为 `9/9`。当前播放器因此让音乐和音效共同使用 `1.0` 满音量常量，不单独衰减任一通道；最终响度交给系统音量。

## 2026-09-18 本批更新

新增四系御法、酸蚀与恐惧原作音效；复核火鸟/凤凰龙息没有独立音效、凤凰涅槃没有专属音效。全部由 `tools/extract_audio_assets.py` 提取。
