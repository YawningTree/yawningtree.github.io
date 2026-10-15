---
title: "A programmable metasurface antenna that approaches the wireless information mapping limit"
date: 2026-09-03T15:00:00+08:00
tags: ["学习", "论文"]
summary: "逼近无线信息映射极限的可编程超表面天线"
draft: false
---

| 元数据 | 内容 |
|---|---|
| 标题 | A programmable metasurface antenna that approaches the wireless information mapping limit |
| 作者 | Haotian Wu, Ruiwen Shao, Zhixia Xu, Jun Wei Wu, Shurun Tan, Xixi Wang, Zhenjie Qi, Qiang Cheng（程强）, Yuanjin Zheng, Yu Luo（罗宇）, Tie Jun Cui（崔铁军，通讯作者） |
| 单位 | 东南大学毫米波国家重点实验室；新加坡南洋理工大学电气与电子工程学院；大连海事大学信息科学技术学院；浙江大学 ZJU-UIUC 联合学院；南京航空航天大学微波光子学国家重点实验室 |
| 期刊 | Nature Electronics（《自然·电子学》）2025 年，第 8 卷，第 179–191 页 |
| DOI | https://doi.org/10.1038/s41928-024-01298-7 |
| 论文类型 | 系统/方法论文（期刊 Article），正文 13 页；补充材料 42 页 |
| 来源 | Zotero 本地正文 PDF + 补充材料 PDF（均为 selectable-text） |

## 章节索引

| 章节 | 内容 |
|---|---|
| 摘要 ABSTRACT | 无需 DAC/混频的可编程超表面发射机；信息映射效率逼近理论上限 |
| 1 引言 INTRODUCTION | 5G/6G 需求、MIMO 复杂度、可编程超表面发射机现状、信息映射效率瓶颈 |
| 2 信息映射方案 INFORMATION MAPPING SCHEME | 空间谐波检索、非递归编码、C₂ₚ 对称星座、级联编码与能量转换效率 |
| 3 天线样机实现 IMPLEMENTATION OF THE PROGRAMMABLE METASURFACE ANTENNA | 1 比特相位调制样机、超原子结构与 PIN 二极管、单元远场响应 |
| 4 信息映射方案的实验验证 EXPERIMENTAL DEMONSTRATION OF THE INFORMATION MAPPING SCHEME | 32 种可编程图案、四级幅度、半谐波/一次谐波方向实测、星座图合成 |
| 5 模拟数据传输 SIMULATED DATA TRANSMISSION | 图像传输仿真、误码率评估、与 MIMO 的对比与局限 |
| 6 结论 CONCLUSIONS | 主要成果与展望 |
| Methods 方法 | 编码序列与远场响应（式 6–10）、一次谐波响应独特性（式 11–13）、半谐波方向远场响应（式 14）、负一次谐波的共轭对称、Sᵢ 集合编码序列、非谐波方向、实验装置、比特串编码 |
| 附录 A：补充材料（APPENDIX） | 21 个补充注记（S1–S21）、19 幅补充图（S1–S19）、1 张补充表（Table S1）、16 个补充公式（式 S1–S16） |

## 公式索引

- [E001 · Eq. (1)](#E001) — 远场响应正比于编码序列与相位梯度的内积 E₂(kₓ) ∝ f(kₓ)·Σ exp[−j(mkₓd + φₘ)]
- [E002 · Eq. (2)](#E002) — 两序列在一次谐波方向产生相同响应的必要条件（求和式）
- [E003 · Eq. (3)](#E003) — 循环矩阵方程 Mζ = 0
- [E004 · Eq. (4)](#E004) — 信息映射效率 η₁ = log₂(2ᵖ − 1)/p
- [E005 · Eq. (5)](#E005) — 一次谐波相位梯度与半谐波相位梯度的非退化变换 g₁ᵀ = γₚ·g₁/₂ᵀ
- [E006 · Eq. (6)](#E006) — 远场正比于超表面场分布的傅里叶变换 E₂(k) ∝ ∫∫E₁(r)e^(−jkr)dr
- [E007 · Eq. (7)](#E007) — 超表面平面场分布为口径函数与编码序列的卷积 E₁(x) ∝ φ_d(x) ∗ s(x)
- [E008 · Eq. (8)](#E008) — 卷积定理：E₂(kₓ) ∝ F[φ_d(x)] × F[s(x)]
- [E009 · Eq. (9)](#E009) — 编码序列的傅里叶变换展开（含积分与求和）
- [E010 · Eq. (10)](#E010) — 远场响应与编码序列的最终关系 E₂(kₓ) ∝ f(kₓ)·Σ exp[−j(mkₓd + φₘ)]
- [E011 · Eq. (11)](#E011) — 循环置换后的矩阵方程 R^qₘ × ζₘ = 0
- [E012 · Eq. (12)](#E012) — Mζ = (R + J)ζ = 0
- [E013 · Eq. (13)](#E013) — 循环矩阵 M 的伴随多项式 α(x)
- [E014 · Eq. (14)](#E014) — p = 5 时的非退化变换矩阵 g₁ᵀ = γ₅·g₁/₂ᵀ
- [E015 · 补充式 (S1)](#E015) — 单列场分布的 δ 函数形式
- [E016 · 补充式 (S2)](#E016) — 第 m 列场分布（含 (m−1)d 空间移位）
- [E017 · 补充式 (S3)](#E017) — p 列叠加得到超表面平面总场分布
- [E018 · 补充式 (S4)](#E018) — 编码序列 s(x₁) 的定义
- [E019 · 补充式 (S5)](#E019) — 卷积关系 E1(x) = φd(x) ∗ s(x)
- [E020 · 补充式 (S6)](#E020) — 一次谐波远场 = 编码序列与均匀相位梯度的内积
- [E021 · 补充式 (S7)](#E021) — 阵列因子展开（序列与其反序给出相同强度）
- [E022 · 补充式 (S8)](#E022) — 递归序列在一次谐波方向响应为零
- [E023 · 补充式 (S9)](#E023) — 多项式改写为 (xᵖ − 1)/(x − 1)
- [E024 · 补充式 (S10)](#E024) — 代换 x → x+1（Eisenstein 判别法）
- [E025 · 补充式 (S11)](#E025) — 级联编码下的一次谐波远场（场幅放大 r 倍）
- [E026 · 补充式 (S12)](#E026) — 半谐波方向的离散相位梯度
- [E027 · 补充式 (S13)](#E027) — 相位梯度按 r 个分组的拆分
- [E028 · 补充式 (S14)](#E028) — 半谐波方向的远场（r 为偶数时完全抵消）
- [E029 · 补充式 (S15)](#E029) — 施加附加相位梯度 gu 后的远场展开
- [E030 · 补充式 (S16)](#E030) — 施加相位梯度后的第 m 次谐波远场

## 术语表（Terminology Ledger）

| 原文术语 | 中文 | 说明 |
|---|---|---|
| programmable metasurface (antenna) | 可编程超表面（天线） | 每个可编程单元（列）可独立切换相位状态的天线/表面 |
| information mapping efficiency | 信息映射效率 | 每单位切换时间从可编程图案中提取并映射到接收端的信息量比率；本文核心指标 |
| non-recurrent encoding | 非递归编码 | 无法通过非整周期的循环置换回到自身的编码序列（全 1/全 −1 两个“递归”序列除外） |
| spatial harmonic retrieval | 空间谐波检索 | 将编码信息映射到（第一）空间谐波方向并在该方向一次测量提取 |
| first-harmonic direction | 一次谐波方向 | θ = sin⁻¹(λ/pd) 对应的远场方向 |
| half-harmonic direction | 半谐波方向 | 对应相位梯度 g₁/₂ 的远场方向 |
| constellation diagram | 星座图 | 复平面上各编码序列远场响应状态点的分布 |
| C₂ₚ symmetry | C₂ₚ 对称 | 星座点在复平面上的 2p 重旋转对称性 |
| cyclic permutation (R) | 循环置换（算子 R） | 把编码序列循环移动一位 |
| sign-flipping operator (σ) | 符号翻转算子（σ） | 把编码序列各元素取反 |
| recurrent sequence | 递归序列 | 全 1 或全 −1 序列，在一次谐波方向响应为零 |
| 1-bit phase modulation | 1 比特相位调制 | 每列相位在 0 与 π（‘on’/‘off’）间切换 |
| meta-atom | 超原子（元原子） | 超表面天线的最小单元（此处按列排列） |
| aperture function φ_d(x) | 口径函数 φ_d(x) | 零相位状态下单列超原子的电场分布函数 |
| array factor | 阵列因子 | 编码序列与相位梯度内积所决定的远场包络 |
| cascaded encoding | 级联编码 | 将编码序列按因子 r 空间重复，能量集中于整数谐波 |
| bit mapping efficiency | 比特映射效率 | 每单位可编程图案（或图案序列）实际传输的比特数效率 |
| encoding sequence | 编码序列 | 长度 p 的 ±1 序列，控制各列相位 0/π |
| circulant matrix | 循环矩阵 | 每行由上一行循环移位得到的方阵 |
| Eisenstein's criterion | 艾森斯坦判别法 | 判定多项式不可约的准则（用于 xᵖ−1 的分解） |
| harmonic-field response | 谐波场响应 | 在（半）谐波方向测量的远场复响应 |
| SNR / bit error rate (BER) | 信噪比 / 误码率 | 通信信道质量与差错指标 |
| MIMO | 多输入多输出 | 传统多天线系统 |
| RIS | 可重构智能表面 | 可编程超表面在无线环境中的一种实现 |
| VNA | 矢量网络分析仪 | 测量远场幅度与相位的仪器 |
| anechoic chamber | 微波暗室 | 无反射测量环境 |
| MCU | 微控制器单元 | 控制 PIN 二极管状态的单芯片微控制器 |
| PIN diode | PIN 二极管 | 本文用 MADP-14020-907，改变偏压极性切换相位状态 |
| DAC / mixer | 数模转换器 / 混频器 | 传统射频链中用于调制/变频的器件，本方案可省去 |
| C₂ₚ / η₀ / η₁ | 对称阶数 / 法向/一次谐波信息映射效率 | η₀=log₂(p+1)/p；η₁=log₂(2ᵖ−1)/p |
| α₀–α₃ | 四级归一化幅度 | 0、≈0.38、≈0.62、1，用于把 32 个图案分为 S₀–S₃ 集合 |
| γₚ / γ₅ | 半谐波→一次谐波变换矩阵 | 非退化矩阵；γ₅ 为 p=5 的实例 |
| {Sᵢ} / γ⁻¹{Sᵢ} | 一次/半谐波幅度集合 | S₀ 含 2 个序列，S₁–S₃ 各含 10 个序列 |

---

## 摘要 ABSTRACT

**Original:** Digitally programmable metasurfaces are of potential use in next-generation mobile communications due to their ability to perform wireless data transmission without digital-to-analogue conversion or frequency mixing. However, communication networks based on programmable metasurfaces currently suffer from relatively low data transmission rates and low information mapping efficiencies (where the transmitted information per unit switching time is much lower than the information that encodes the programmable pattern). Here we report a programmable metasurface antenna that can approach the theoretical upper limit of the information mapping efficiency. Our approach combines non-recurrent encoding with spatial harmonic retrieval, and we show that the model maps most available programmable patterns to the first-harmonic direction in bijection. As a result, the approach can retrieve all of the encoding information through a single measurement. We also optimize the power efficiency of the communication architecture by using cascaded encoding to amplify the far-field radiation exclusively in the harmonic angles.

**中文:** 数字可编程超表面能够在无需数模转换或频率混频的情况下完成无线数据传输，因此有望用于下一代移动通信。然而，基于可编程超表面的通信网络目前面临数据传输速率偏低、信息映射效率不高的问题——每单位切换时间实际传输的信息量远低于编码可编程图案所需的信息量。本文报道一种可逼近信息映射效率理论上限的可编程超表面天线。我们的方法把非递归编码与空间谐波检索相结合，证明了该模型把绝大多数可编程图案双射（bijection）映射到一次谐波方向，因而只需一次测量即可取回全部编码信息；同时利用级联编码提升通信架构的功率效率，使远场辐射能量专一地集中于谐波角度。

## 1 引言 INTRODUCTION

**Original:** Wireless networks for fifth-generation technologies need high-capacity, low-latency and high-security wireless communications for applications such as holographic imaging, autopilot-based vehicles, telemedicine, virtual reality and the Internet of Things. Next-generation wireless communication systems are expected to offer further improvements in communication capabilities, particularly in key metrics such as channel capacity and system complexity. However, current multiple-input multiple-output (MIMO) networks rely on complex signal modulation devices including digital-to-analogue converters and mixers, introducing structural complexity and high cost to the communication systems.

**中文:** 第五代（5G）无线网络需要为大容量、低时延、高安全性的应用——如全息成像、自动驾驶车辆、远程医疗、虚拟现实与物联网——提供无线通信。下一代无线通信系统被期望在信道容量与系统复杂度等关键指标上继续提升。然而，当前多输入多输出（MIMO）网络依赖数模转换器、混频器等复杂信号调制器件，给通信系统引入了结构复杂度与高成本。

**Original:** Metasurfaces can manipulate electromagnetic waves and transmit wireless data without digital-to-analogue conversion or frequency mixing. Metasurfaces can either be passive or active. Passive metasurfaces are generally designed with fixed functionalities and are primarily used for mode multiplexing and controlling the wave propagation in wireless communication links. Recent passive metasurface-assisted communication schemes include vortex-mode multiplexing, polarization-channel multiplexing and multibeam for multiple users. Active metasurfaces are composed of meta-atoms integrated with controllable components and can be used for versatile and real-time, programmable electromagnetic wave manipulation. Real-time manipulation of the scattering patterns is possible through the control of embedded active devices such as varactors, photodiodes and microelectromechanical systems.

**中文:** 超表面可以操控电磁波，并在无需数模转换或频率混频的情况下传输无线数据。超表面分为无源与有源两类：无源超表面通常具有固定功能，主要用于模式复用以及控制无线通信链路中的波传播，近期无源超表面辅助通信方案包括涡旋模式复用、极化信道复用与面向多用户的多波束等；有源超表面由集成可控器件的超原子构成，可实现灵活、实时的可编程电磁波操控——通过控制变容二极管、光电二极管与微机电系统等嵌入式有源器件，即可实时调控散射图案。

**Original:** Reconfigurable intelligent surfaces (RISs)—implementations of programmable metasurfaces in radio environments—can scatter incident electromagnetic waves towards desired targets through in situ beamforming. Conformal integration, along with fast switching, could lead to programmable-metasurface-based transmitters. Recent communication strategies that have used programmable metasurface-assisted transmitters include direct beamforming, time-domain frequency-shift keying, space–frequency multiplexing, 256-state quadrature amplitude modulation, light-to-microwave transmitter, full-characteristic modulated space–time metasurface antenna, learning-aided security communication and non-reciprocal transmission/reception with spatiotemporal metamaterial antennas.

**中文:** 可重构智能表面（RIS）——可编程超表面在无线环境中的实现——可通过原位波束赋形把入射电磁波散射到目标方向。共形集成加上快速切换，有望催生基于可编程超表面的发射机。近期基于可编程超表面辅助发射机的通信策略包括：直接波束赋形、时域频移键控、空频复用、256 态正交幅度调制、光到微波发射机、全特性调制的时空超表面天线、学习辅助的安全通信，以及基于时空超材料天线的非互易发射/接收等。

**Original:** The number of coding states grows exponentially as the number of coding elements increases in communication and information processing. A 1-bit programmable metasurface with 20 × 20 independent meta-atoms can, for example, yield up to 2⁴⁰⁰ coding states. However, existing programmable-metasurface-based communication architectures still suffer from a low data transmission rate. Low information mapping efficiency—the ratio of the amount of information extracted at the receiver end and the amount of information supplied by the source within a unit of switch time—is a key challenge in this regard. Communication theory shows that the channel capacity of a wireless network is bound by the product of the amount of information received per unit switching time and the switching speed of the system. The amount of information retrieved at the receiving end is bounded by the source information multiplied by the information mapping efficiency. Therefore, to approach the upper limit of channel capacity in a programmable-metasurface-based communication network, we need to maximize the information mapping efficiency and ideally approach unity.

**中文:** 在通信与信息处理中，编码状态数随编码单元数指数增长：例如，含 20×20 个独立超原子的 1 比特可编程超表面可产生多达 2⁴⁰⁰ 种编码状态。然而，现有基于可编程超表面的通信架构仍受低数据传输速率困扰。其中的关键挑战是信息映射效率偏低——它定义为接收端提取的信息量与信源在单位切换时间内提供的信息量之比。通信理论表明，无线网络的信道容量受“单位切换时间内接收的信息量 × 系统切换速度”的乘积约束；接收端能取回的信息量又受“信源信息量 × 信息映射效率”约束。因此，要使基于可编程超表面的通信网络逼近信道容量上限，就必须最大化信息映射效率，理想情况下使其趋近于 1。

**Original:** There is, however, currently no theoretical framework or practical implementation that can achieve—or can approach—the unity condition in the information mapping efficiency, and the potential of reprogrammable capabilities of metasurfaces remains underused, with only a small portion of the programmable patterns being effectively used. For instance, data transmission rates in typical spatiotemporal metasurface-based communication systems drop considerably when the temporal repetition is introduced to the encoding sequence.

**中文:** 然而，目前尚无理论框架或实际实现能够达到——甚至逼近——信息映射效率的“1”条件；超表面可重构能力的潜力仍未得到充分利用，只有很小一部分可编程图案被有效使用。例如，在典型的时空超表面通信系统中，一旦在编码序列中引入时间重复，数据传输速率就会显著下降。

**Original:** In this Article, we report a programmable metasurface antenna that approaches the theoretical upper limit of the information mapping efficiency. Our antenna is 1-bit phase modulated, where the phase state of each column of the meta-elements can be independently switched to ‘0’ or ‘π’ through the integrated control unit (Fig. 1). We map all the available programmable patterns to the first-harmonic direction in bijection, with one specific exception, and show that the encoded information can be retrieved with a single measurement. Our theoretical framework is applicable to all types (radiation, reflection and transmission) of programmable metasurfaces as long as the implemented amplitude and phase modulations align with the proposed model.

**中文:** 本文报道一种逼近信息映射效率理论上限的可编程超表面天线。该天线采用 1 比特相位调制，每个超元（meta-element）列的相位状态都可通过集成控制单元独立地在‘0’与‘π’之间切换（图 1）。我们把所有可编程图案双射映射到一次谐波方向（仅有一个例外），并证明编码信息可通过一次测量取回。只要实际实现的幅度与相位调制符合所提出的模型，该理论框架适用于辐射、反射、透射等所有类型的可编程超表面。

<a id="F001"></a>
### 图 1 基于可编程超表面天线的信息映射

![Figure 1](assets/figures/fig1.png)

**Original caption:** Fig. 1 | Information mapping based on programmable metasurface antennas. A 1-bit phase-modulated programmable metasurface antenna is used, where the number of the operating columns (p) is an odd prime (such as 5) and the width of each column is d. PIN diodes are incorporated into each column of the programmable metasurface antenna, enabling the flexible switching of the phase response of each column of the radiator to be either ‘0’ or ‘π’ via the integrated microcontroller unit (MCU). In the information mapping process, a p-bit encoding sequence is transmitted from the MCU to control the states of the PIN diodes in each column of radiators, thereby modulating the spatial phase distribution on the plane of the programmable metasurface antenna. The first-harmonic direction is defined by the angle relative to the normal of the programmable metasurface antenna as θ = sin–1(λ/pd), where λ is the wavelength of the electromagnetic wave. At this specific angle, the far-field responses produced by all the available 2ᵖ encoding sequences result in a constellation diagram that comprises a total of 2ᵖ – 1 distinct states with C₂ₚ symmetry in the complex plane. For instance, the input bit string ‘1, 1, 0, 0, 0’ will induce the phase modulation of ‘π, π, 0, 0, 0’ for the programmable metasurface antenna, resulting in a far-field response that is denoted by the red dashed circle in the constellation diagram. By selecting the 2ᵖ – 1 encoding sequences for information modulation, it is possible to retrieve the encoding sequence through a single measurement of the far-field response in the first-harmonic direction.

**中文图注:** 图 1：基于可编程超表面天线的信息映射。采用 1 比特相位调制的可编程超表面天线，工作列数 p 为奇素数（如 5），每列宽度为 d。天线的每一列都集成 PIN 二极管，可通过集成微控制器单元（MCU）把每一列辐射体的相位响应在‘0’与‘π’之间灵活切换。在信息映射过程中，MCU 把 p 比特编码序列传输到各列 PIN 二极管以控制其状态，从而调制可编程超表面天线平面上的空间相位分布。一次谐波方向定义为相对天线法线的角度 θ = sin⁻¹(λ/pd)，λ 为电磁波波长。在该特定角度上，全部 2ᵖ 种编码序列产生的远场响应构成一个包含 2ᵖ − 1 个不同状态、在复平面上具有 C₂ₚ 对称性的星座图。例如，输入比特串‘1,1,0,0,0’会使天线产生‘π,π,0,0,0’的相位调制，其远场响应即星座图中红色虚线圈所标注的状态。通过选取这 2ᵖ − 1 个编码序列进行信息调制，即可在一次谐波方向对远场响应做单次测量从而取回编码序列。

**Reading note:** 图中上半部分示意可编程超表面发射机：MCU 输出比特串（如 1 1 0 0 0）→ 控制每列 PIN 二极管（0/π）→ 空间相位分布被调制；下半部分是一次谐波方向的星座图：2ᵖ 种图案映射出 2ᵖ−1 个状态点（C₂ₚ 对称），其中红色虚线圈对应输入‘1 1 0 0 0’的状态。注意图中“Phase modualtion”为原文笔误（应为 modulation）。

## 2 信息映射方案 INFORMATION MAPPING SCHEME

**Original:** The encoding sequence of a programmable metasurface antenna with length p is denoted as s = [exp(–jφ₀), exp(–jφ₁)…exp(–jφₚ₋₁)], and the resulting far-field response along the x direction is denoted as E₂(kₓ), where kₓ = ksinθ. Because of the Fourier transformation relation between the encoding sequences and the far-field radiation patterns (Methods), the radiated/scattered electric far fields (E₂(kₓ)) are proportional to the inner product between the encoding sequence s and direction-dependent phase gradient g(kₓ) = [1, exp(–jkₓd),…, exp(–(p – 1)jkₓd)] such that

**中文:** 长度为 p 的可编程超表面天线编码序列记作 s = [exp(–jφ₀), exp(–jφ₁)…exp(–jφₚ₋₁)]，沿 x 方向的远场响应记作 E₂(kₓ)，其中 kₓ = ksinθ。由于编码序列与远场辐射方向图之间存在傅里叶变换关系（见 Methods），辐射/散射电场远场 E₂(kₓ) 正比于编码序列 s 与方向相关的相位梯度 g(kₓ) = [1, exp(–jkₓd),…, exp(–(p–1)jkₓd)] 的内积：

<a id="E001"></a>

![公式 1（原图）](assets/equations/eq1.png)

**中文说明：** 式 (1) 是本模型的基础：E₂(kₓ) ∝ f(kₓ) × Σₘ₌₀^{p−1} exp[−j(mkₓd + φₘ)]，其中 f(kₓ) 为单列超原子的远场响应，φₘ 为第 m 列超原子阵列的相位响应，d 为每列宽度。

**Original:** To send information of the programmable pattern (encoding sequence) to the far-field region, it is vital to find a fitting decoding scheme to retrieve the encoded sequence from the far-field measurements. The amount of information that can be obtained via the single measurement of the radiated field cannot exceed the amount of information provided by the programmable pattern, which is bounded by the logarithm of the number of possible encoding sequences such that I_max = log₂[2ᵖ] = p bits. Specifically, we require the receiver positioned in the direction of the first spatial harmonic, with the angle relative to the normal direction being sin⁻¹(λ/pd), where λ is the wavelength of the electromagnetic wave (Fig. 1).

**中文:** 要把可编程图案（编码序列）的信息发送到远场区，关键在于找到合适的解码方案，从远场测量中取回编码序列。单次远场测量所能获得的信息量不可能超过可编程图案提供的信息量，后者受“可能编码序列个数的对数”约束，即 I_max = log₂[2ᵖ] = p 比特。具体而言，我们要求接收机位于第一空间谐波方向，该方向相对法线的角度为 sin⁻¹(λ/pd)，其中 λ 是电磁波波长（图 1）。

**Original:** The utilization of the term ‘spatial harmonic’ may seem unconventional, given that the proposed meta-array is not modulated periodically. Nevertheless, the angle of the first spatial harmonic defined in this work coincides with the orientation of the first spatial harmonic generated by a periodic array with the periodicity p × d. Therefore, our model can be conceptualized as the meta-atom array comprising a single period.

**中文:** 由于所提出的超原子阵列并非周期调制，使用“空间谐波”一词可能显得不同寻常。不过，本文定义的第一空间谐波角度与周期为 p × d 的周期阵列所产生的第一空间谐波方向一致。因此，可以把我们的模型理解为“只包含一个周期”的超原子阵列。

**Original:** Generally, the permissible radiation/scattering channels of the periodic array are limited to discrete angles determined by integer harmonics. By contrast, when the array is modulated non-periodically, radiation at integer harmonics no longer exhibits a sharp distinction from other non-harmonic angles. However, under the condition of non-periodic modulation, the far-field responses in the first-harmonic angle still exhibit a unique symmetry in the constellation diagram, a characteristic generally not shared with non-harmonic angles. When the length of the encoding sequences is an odd prime (such as p = 5), almost all of the generated far-field responses will exhibit distinctiveness and manifest C₂ₚ symmetry in the constellation diagram along the first-harmonic direction (Fig. 1).

**中文:** 一般而言，周期阵列允许的辐射/散射信道被限制在由整数谐波决定的离散角度。相反，当阵列被非周期调制时，整数谐波处的辐射与其它非谐波角度不再有显著区分。但在非周期调制条件下，一次谐波角度的远场响应在星座图中仍呈现独特的对称性——这一特征通常是非谐波角度所不具备的。当编码序列长度为奇素数（如 p = 5）时，沿一次谐波方向产生的几乎全部远场响应都具有独特性，并在星座图中呈现 C₂ₚ 对称（图 1）。

**Original:** To illustrate our model, we introduce the concept of cyclic permutation operator (R) and the sign-flipping operator (σ). Specifically, the cyclic permutation operator (R) permutes a 1-bit encoding sequence from s = [s₀, s₁,…, sₚ₋₂, sₚ₋₁] to R(s) = [sₚ₋₁, s₀,…, sₚ₋₃, sₚ₋₂], and the sign-flipping operator flips the signs of each element of the sequence such that σ(s) = –s. On the basis of equation (1), it can be demonstrated that applying a single permutation to an encoding sequence s produces a phase shift of –2π/p in the first-harmonic direction, whereas applying sign flipping to the sequence induces a phase shift of π. Consequently, the far-field responses generated by all of the possible 1-bit encoding sequences must exhibit the C₂ₚ symmetry in the complex plane in the first-harmonic direction (Supplementary Section 2).

**中文:** 为说明该模型，我们引入循环置换算子（R）与符号翻转算子（σ）。循环置换算子把 1 比特编码序列从 s = [s₀, s₁,…, sₚ₋₂, sₚ₋₁] 变为 R(s) = [sₚ₋₁, s₀,…, sₚ₋₃, sₚ₋₂]；符号翻转算子则把序列每个元素取反，即 σ(s) = –s。基于式 (1) 可以证明：对编码序列 s 做一次循环置换，会使其一次谐波方向响应产生 −2π/p 的相移；而符号翻转则使响应产生 π 的相移。因此，全部可能的 1 比特编码序列在一次谐波方向产生的远场响应必然在复平面上呈现 C₂ₚ 对称（补充材料第 2 节）。

**Original:** To demonstrate the distinctiveness of the far-field responses at the first harmonic, we introduce the concept of a non-recurrent sequence. Specifically, for an encoding sequence with length p, if a cyclic permutation of this sequence with the number of steps that are not multiples of p cannot yield the original sequence, then the sequence is classified as non-recurrent. For a 1-bit sequence with the length of an odd prime, it can be shown that the sequence that is not composed exclusively of 1s and −1s can be characterized as non-recurrent (Supplementary Section 3). Here we first postulate the existence of at least two non-recurrent sequences, denoted as c = [c₀, c₁,…, cₚ₋₁] and d = [d₀, d₁,…, dₚ₋₁], which produce identical far-field responses in the first-harmonic direction. Furthermore, we will proceed to show that this presumption will inevitably lead to a contradiction.

**中文:** 为证明一次谐波方向远场响应的独特性，我们引入“非递归序列”（non-recurrent sequence）的概念：对长度为 p 的编码序列，若步数不为 p 的倍数的循环置换都无法得到原序列，则该序列为非递归序列。可以证明，对长度为奇素数的 1 比特序列，只要它不全部由 1 或 −1 组成，就一定是非递归序列（补充材料第 3 节）。这里先假设至少存在两条非递归序列 c = [c₀, c₁,…, cₚ₋₁] 与 d = [d₀, d₁,…, dₚ₋₁]，它们在一次谐波方向产生完全相同的远场响应；接下来将证明这一假设必然导致矛盾。

**Original:** Specifically, given that the far-field responses produced by the two encoding sequences are assumed to be the same at the first harmonic, it is imperative that these two sequences adhere to the following condition:

**中文:** 具体而言，既然假设两条编码序列在一次谐波方向的远场响应相同，它们就必须满足如下条件：

<a id="E002"></a>

![公式 2（原图）](assets/equations/eq2.png)

**中文说明：** 式 (2) 即 Σₘ₌₀^{p−1}[cₘ exp(−jm2π/p) − dₘ exp(−jm2π/p)] = Σₘ₌₀^{p−1}(cₘ − dₘ)exp(−jm2π/p) = 0。它把“两序列一次谐波响应相同”转写为关于 c−d 的求和为零。

**Original:** On the contrary, since the cyclic permutation of the encoding sequence will produce a phase shift for the harmonic-field response with an identical amplitude response, equation (2) can be extended (Methods) to a matrix equation given by

**中文:** 反过来，由于编码序列的循环置换会给谐波场响应带来相移而保持幅度响应不变，式 (2) 可被推广（见 Methods）为如下矩阵方程：

<a id="E003"></a>

![公式 3（原图）](assets/equations/eq3.png)

**中文说明：** 式 (3) 为 M·ζ = 0，其中 M 是由两个编码序列（经循环置换）构造的循环矩阵，ζ = [ζ₁,…,ζₚ]ᵀ 为待定列向量。该式对应“存在两条非递归序列共享同一谐波场响应”的假设。

**Original:** The matrix M in equation (3) is circulant and adheres to the circulation condition Mⁱ⁺¹ⱼ₊₁ = Mⁱⱼ, and the vector component of ζ can be expressed as ζₘ = exp[−(m−1)j2π/p].

**中文:** 式 (3) 中的矩阵 M 是循环矩阵，满足循环条件 Mⁱ⁺¹ⱼ₊₁ = Mⁱⱼ；向量 ζ 的分量可表示为 ζₘ = exp[−(m−1)j2π/p]。

**Original:** Leveraging the cyclic characteristics of circulant matrices and the two encoding sequences, it can be established that the matrix M must be non-singular (Methods). The matrix non-singularity implies that Mζ = 0 is not satisfied for any pair of non-recurrent sequences, which contradicts the assumption that there exist two non-recurrent encoding patterns sharing the same harmonic-field responses.

**中文:** 借助循环矩阵的循环特性以及这两条编码序列，可以证明矩阵 M 必然非奇异（见 Methods）。矩阵非奇异意味着：对任意一对非递归序列，Mζ = 0 都不成立——这与“存在两条共享同一谐波场响应的非递归编码图案”的假设相矛盾。

**Original:** In addition, notice that the far-field responses generated by the two recurrent encoding sequences (all 1s and all −1s) are both zero in the first-harmonic direction (Supplementary Section 4). Hence, we can include one of the recurrent sequences (such as all 1s) into the set of non-recurrent sequences and arrange the 2ᵖ – 1 encoding sequences for data transmissions, where the resulting information mapping efficiency can be expressed as

**中文:** 此外注意：两条递归编码序列（全 1 与全 −1）在一次谐波方向的远场响应都为零（补充材料第 4 节）。因此，我们可以把其中一条递归序列（如全 1）并入非递归序列集合，用 2ᵖ − 1 条编码序列进行数据传输，此时的信息映射效率可表示为

<a id="E004"></a>

![公式 4（原图）](assets/equations/eq4.png)

**中文说明：** 式 (4) 即 η₁ = log₂(2ᵖ − 1)/p：用 p 比特输入（2ᵖ−1 个可用状态）换取 log₂(2ᵖ−1) 比特信息。

**Original:** For instance, when the length of the encoding sequences is p = 5, the information mapping efficiency is calculated to be approximately 4.95, reaching 99% of theoretical upper bound, and it will increase to over 99.8% when p = 7. Hence, the information mapping efficiency of the proposed scheme approaches the theoretical upper limit of unity.

**中文:** 例如，当编码序列长度 p = 5 时，单次测量可检索的信息量约为 4.95 比特，达到理论上限（5 比特）的 99%；当 p = 7 时更将超过 99.8%。因此，本方案的信息映射效率逼近“1”的理论上限。

**Original:** The non-zero spatial harmonic plays a key role in producing the distinctive and symmetrically distributed far-field responses. For instance, Fig. 2 compares the far-field responses of the encoding sequences in the normal (kₓ = 0) and the first-harmonic (kₓ = k₁) directions. The schematic of the possible encoding patterns of lengths p = 3, 5 and 7 are presented in Fig. 2a–c. Specifically, the far-field responses obtained in the normal direction is depicted in Fig. 2d–f, where the number of distinctive states is only p + 1. Consequently, the information mapping efficiency in the normal direction (η₀ = log₂(p + 1)/p) is less than 1 and decreases as the length of the encoding sequence increases. By contrast, the far-field responses in the first-harmonic direction exhibit C₂ₚ symmetrically distributed 2ᵖ – 1 distinct states in the complex plane (Fig. 2g–i). As a result, the information mapping efficiency (η₁ = log₂(2ᵖ − 1)/p) tends to unity and will be further increased as the length of the encoding sequence increases.

**中文:** 非零空间谐波对产生独特且对称分布的远场响应起着关键作用。例如，图 2 对比了法向（kₓ = 0）与一次谐波方向（kₓ = k₁）上编码序列的远场响应：图 2a–c 给出长度 p = 3、5、7 的所有可能编码图案示意；图 2d–f 为法向方向的远场响应，其不同状态数只有 p + 1 个。因此，法向信息映射效率 η₀ = log₂(p + 1)/p 小于 1，且随编码序列长度增加而下降。相比之下，一次谐波方向的远场响应在复平面上呈现 C₂ₚ 对称分布的 2ᵖ − 1 个不同状态（图 2g–i），因而信息映射效率 η₁ = log₂(2ᵖ − 1)/p 趋近于 1，并随编码序列长度增加进一步提高。

**Original:** We note that the data transmission in a communication network also strongly depends on the signal-to-noise ratio (SNR) and the signal bandwidth (switching speed). Nevertheless, the information mapping efficiency inherently acts as a diminishing factor, constraining the upper limit of the channel capacity of the programmable metasurface antenna-based communication system. For instance, in the extreme scenario in which the information mapping efficiency falls to zero, no information can be transmitted, regardless of a high SNR or rapid switching speed in the metasurface-based communication system.

**中文:** 我们指出，通信网络的数据传输还强烈依赖于信噪比（SNR）与信号带宽（切换速度）。但信息映射效率本质上是一个“衰减因子”，约束着可编程超表面天线通信系统的信道容量上限。例如，在信息映射效率降为零的极端情形下，无论 SNR 多高、超表面通信系统的切换速度多快，都无法传输任何信息。

**Original:** The key distinction between the proposed programmable metasurface antenna-based transmitter and the conventional transmitters is the modulation mechanism for constellation diagram generation. In conventional transmitters, the constellation diagram is created by in-phase/quadrature channels before the signal is radiated. In sharp contrast, the constellation in our proposed transmitter architecture is synthesized through wave propagation and interference in space, a technique also used in optical computing. The comparative analysis of the architecture and communication capabilities between conventional transmitters and our proposed scheme is provided in Supplementary Sections 19 and 20.

**中文:** 所提出的可编程超表面天线发射机与传统发射机的关键区别在于星座图的生成/调制机制。传统发射机在信号辐射之前，先通过同相/正交（I/Q）通道构造星座图；而在我们的发射机架构中，星座是在空间中通过波的传播与干涉自然合成的——这也正是光学计算所使用的技术。两种架构与通信能力的对比分析见补充材料第 19、20 节。

**Original:** The energy conversion efficiency of the MIMO transmitter is relatively high due to its ability to steer the main lobe towards the target user and minimizing the energy radiation to other unwanted directions. Comparatively, in the proposed scheme, the far-field radiation pattern of a single-column radiator reaches its peak in the normal direction, which is misaligned with the communication channel of the first harmonic. This misalignment results in diminished energy conversion efficiency to the communication channel. To improve the energy conversion efficiency, we show that applying an additional phase gradient of gᵤ = 2π/pd to the meta-array will shift the first-harmonic angle towards the normal direction. As a result, the alignment of the shifted first harmonic with the radiation peak of the single column of radiators enables higher energy conversion efficiency in the communication channel. More details regarding the methodology for shifting the first-harmonic angle are provided in Supplementary Section 21.

**中文:** MIMO 发射机的能量转换效率相对较高，因为它能把主瓣指向目标用户，并把能量辐射降到其它无用方向上。相比之下，在本方案中，单列辐射体的远场辐射方向图在法向达到峰值，而通信信道位于一次谐波方向，二者不重合，导致进入通信信道的能量转换效率下降。为提高能量转换效率，我们证明：向超原子阵列附加 gᵤ = 2π/pd 的额外相位梯度，可将一次谐波角度移向法向。于是，被移动后的一次谐波与单列辐射体辐射峰值对齐，通信信道的能量转换效率得以提高（移动一次谐波角的更多细节见补充材料第 21 节）。

<a id="F002"></a>
### 图 2 法向与一次谐波方向的远场响应

![Figure 2](assets/figures/fig2.png)

**Original caption:** Fig. 2 | Far-field responses of the programmable metasurface in the normal and first-harmonic directions, where the lengths of the encoding sequences are odd primes. a–c, The 2ᵖ possible binary encoding patterns with a sequence length of p = 3 (a), p = 5 (b) and p = 7 (c). d–f, Far-field responses of the metasurface in the normal direction (kₓ = 0), where the length of the encoding sequence is p = 3 (d), p = 5 (e) and p = 7 (f). The notations Re(E) and Im(E) represent the real and imaginary parts of the complex amplitude of the electric field. The symbol η₀ represents the calculated information mapping efficiency in the normal direction to the metasurface. g–i, Far-field responses of the metasurface in the first-harmonic direction (kₓ = k₁), where the length of the encoding sequence is p = 3 (g), p = 5 (h) and p = 7 (i). The symbol η₁ represents the calculated information mapping efficiency in the first-harmonic direction. j,k, Array factors generated by all the possible 1-bit encoding sequences with the length of 5, both without cascaded encoding (j) and with a cascaded encoding factor of 2 (k).

**中文图注:** 图 2：编码序列长度为奇素数时，可编程超表面在法向与一次谐波方向的远场响应。a–c，长度 p = 3 (a)、5 (b)、7 (c) 时 2ᵖ 种可能的二元编码图案。d–f，法向（kₓ = 0）的远场响应（p = 3/5/7），Re(E)、Im(E) 分别表示电场复振幅的实部与虚部，η₀ 表示法向信息映射效率。g–i，一次谐波方向（kₓ = k₁）的远场响应（p = 3/5/7），η₁ 表示一次谐波信息映射效率。j,k，长度 5 的全部 1 比特编码序列产生的阵列因子：无级联编码 (j) 与级联编码因子为 2 的情形 (k)。

**Reading note:** 法向（d–f）只有 p+1 个可区分状态、η₀ 随 p 下降；一次谐波方向（g–i）有 2ᵖ−1 个状态且呈 C₂ₚ 对称、η₁ 趋近 1（p=5 时 99.1%，p=7 时 99.8%）。j/k 对比显示级联编码使能量集中于整数谐波（红虚线为一次谐波角，蓝虚线为半谐波与 1.5 次谐波角）。

**Original:** Another viable approach to enhance the energy conversion efficiency is to adopt spatially repetitive modulation in the encoding sequence, a process we term cascaded encoding. For instance, the encoding sequence of ‘1, −1, 1, 1, −1’ can be modified into ‘1, −1, 1, 1, −1, 1, −1, 1, 1, −1’ when a cascaded encoding factor of r = 2 is introduced. As a result, the radiated energy will become more concentrated on the integer harmonics, and will be notably suppressed in the non-harmonic directions (Supplementary Section 7). We note that the same amount of information will be transmitted regardless of whether cascaded encoding is implemented. Accordingly, incorporating cascaded encoding with a factor of q into the modulation sequence will result in the information mapping efficiency decreasing to 1/q of its original value.

**中文:** 提高能量转换效率的另一个可行途径是在编码序列中采用空间重复调制，我们称之为级联编码（cascaded encoding）。例如，当级联因子 r = 2 时，编码序列‘1,−1,1,1,−1’可改写为‘1,−1,1,1,−1,1,−1,1,1,−1’。于是辐射能量更集中于整数谐波，而在非谐波方向被显著抑制（补充材料第 7 节）。需要指出，无论是否实施级联编码，传输的信息量都相同；因此，在调制序列中加入级联因子 q，会使信息映射效率降为原来的 1/q。

**Original:** The far-field response of the programmable metasurface antenna in the half-harmonic direction is proportional to the inner product between the encoding sequence and the phase gradient g₁/₂ = g(0.5k₁) = [1, exp(−jπ/p),…, exp(−(p−1)jπ/p)]. In comparison, the phase gradient in the first-harmonic direction is g₁ = g(k₁) = [1, exp(−j2π/p),…, exp(−(p−1)j2π/p)]. Through algebraic analysis (Methods), it can be verified that the two phase gradients g₁/₂ and g₁ are related by the non-degenerate matrix (γₚ) transformation such that

**中文:** 可编程超表面天线在半谐波方向的远场响应正比于编码序列与相位梯度 g₁/₂ = g(0.5k₁) = [1, exp(−jπ/p),…, exp(−(p−1)jπ/p)] 的内积；相比之下，一次谐波方向的相位梯度为 g₁ = g(k₁) = [1, exp(−j2π/p),…, exp(−(p−1)j2π/p)]。通过代数分析（见 Methods）可验证，两条相位梯度 g₁/₂ 与 g₁ 由非退化矩阵（γₚ）联系：

<a id="E005"></a>

![公式 5（原图）](assets/equations/eq5.png)

**中文说明：** 式 (5) 即 g₁ᵀ = γₚ·g₁/₂ᵀ（ᵀ 表示转置），表明半谐波与一次谐波方向的响应在“对称性与唯一性”上具有相同特征。

**Original:** where T denotes the transpose of the vector. As a result, the constellation diagrams obtained in the half-harmonic and the first-harmonic directions should exhibit the same characteristic in terms of symmetry and uniqueness. However, the radiated energy will vanish completely at all half-harmonics when the cascaded encoding factor is an even number (Supplementary Section 8). For instance, Fig. 2j,k shows the array factors generated by all the 1-bit encoding sequences with length p = 5 in the case of no cascaded encoding (Fig. 2j) and a cascaded encoding factor of 2 (Fig. 2k), where k₁ = 2π/pd corresponds to the first-harmonic direction. In each plot, the red dashed line represents the first-harmonic angle, whereas the two blue dashed lines represent the angles of the half-harmonic and the one-and-a-half harmonic, respectively. The 32 coding sequences exhibit 10 distinct array factors (Supplementary Section 2 provides the detailed analysis). It is evident that on implementing the cascaded encoding, the radiation patterns become more concentrated at integer harmonics but notably suppressed at half-harmonics. Therefore, this study focuses on the investigation of information mapping at the first harmonic.

**中文:** 其中 T 表示向量转置。因此，半谐波与一次谐波方向得到的星座图在对称性与唯一性方面应具有相同特征。然而，当级联编码因子为偶数时，所有半谐波处的辐射能量将完全消失（补充材料第 8 节）。例如，图 2j,k 给出长度 p = 5 的全部 1 比特编码序列在无级联编码（j）与级联因子 2（k）两种情况下的阵列因子，其中 k₁ = 2π/pd 对应一次谐波方向。各图中红色虚线表示一次谐波角，两条蓝色虚线分别表示半谐波与 1.5 次谐波角；32 条编码序列呈现 10 种不同的阵列因子（详细分析见补充材料第 2 节）。显然，实施级联编码后，辐射方向图更集中于整数谐波，而在半谐波处被显著抑制。因此，本研究聚焦于一次谐波方向的信息映射。

## 3 天线样机实现 IMPLEMENTATION OF THE PROGRAMMABLE METASURFACE ANTENNA

**Original:** We propose the prototype of a 1-bit phase-modulated programmable metasurface antenna composed of a two-dimensional array of meta-atoms (Fig. 3a–e). The designed meta-atom contains three metallic layers, separated by two dielectric substrates. The top layer is composed of a slotted copper patch and the middle metallic layer is ground to provide retroreflection (Fig. 3c). The substrate of our metasurface antenna is composed of Rogers 4003C laminates, which has a dielectric constant of 3.55 and a loss tangent of 0.0027 at 10 GHz. The detailed geometrical parameters of the meta-atom are a = 15 mm, b₁ = 6.9 mm, b₂ = 5.7 mm and w = 0.8 mm. The thicknesses of the two substrate layers are 1.52 mm and 0.25 mm, respectively. The meta-atoms in each column are connected to the bottom layer through metallic vias and are fed by a 1-to-8 power divider to ensure uniform amplitude modulation (Fig. 3b).

**中文:** 我们提出一种由二维超原子阵列构成的 1 比特相位调制可编程超表面天线样机（图 3a–e）。所设计的超原子包含三层金属层，由两层介质基板分隔：顶层为开缝铜贴片，中间金属层接地以实现背向反射（图 3c）。天线介质基板采用 Rogers 4003C 层压板，其在 10 GHz 时介电常数为 3.55、损耗角正切为 0.0027。超原子的详细几何参数为 a = 15 mm、b₁ = 6.9 mm、b₂ = 5.7 mm、w = 0.8 mm；两层基板厚度分别为 1.52 mm 与 0.25 mm。每列超原子通过金属过孔连接到底层，并由 1 分 8 功分器馈电，以保证均匀的幅度调制（图 3b）。

**Original:** Four positive-intrinsic-negative (PIN) diodes are integrated on the input end of the bottom feeding structure to provide 1-bit phase modulation, and a backside sector is introduced to isolate the microwave signal from the d.c. bias (Fig. 3d). Here a MADP-14020-907 PIN diode is used in each column of the programmable metasurface antenna to switch the phase states, whose equivalent circuit can be tuned by changing the polarity of the bias voltage (Fig. 3e). With this configuration, the effective length of the feeding line can be changed by applying an opposite bias voltage to the two groups of PIN diodes, resulting in 180° phase modulation of the radiated waves at a frequency of 9.7 GHz. The detailed characterization of the feeding structure of the programmable metasurface antenna is provided in Supplementary Section 6.

**中文:** 底部馈电结构的输入端集成四只正-本征-负（PIN）二极管以提供 1 比特相位调制，并引入背面扇区（sector）把微波信号与直流偏置隔离（图 3d）。可编程超表面天线每一列采用一只 MADP-14020-907 PIN 二极管来切换相位状态，其等效电路可通过改变偏压极性进行调谐（图 3e）。在该配置下，向两组 PIN 二极管施加相反的偏压即可改变馈线有效长度，从而在 9.7 GHz 频率上实现 180° 的辐射波相位调制（馈电结构详细表征见补充材料第 6 节）。

**Original:** The outermost four columns of the elements are configured as dummy elements to establish the same boundary conditions for the central five columns. Such an arrangement ensures the same far-field scattering pattern for each column of the meta-atom array. To simplify the notation, we assign on and off to label the 0° and 180° phase states, respectively, for each column of the meta-atoms. The simulated far-field amplitude and phase responses for each column working at f = 9.7 GHz are shown in Fig. 3f–h. The far-field responses generated by the five columns of radiators can realize a phase shift from 0° to 180° when operating in the on and off states in the normal direction (θ = 0°). As the radiation angle deviates from the normal, the resulting far-field response of each column varies by a factor of exp(jkₓx), where x denotes the location of each column. Consequently, the far-field phase degeneracy of the five columns operating in the on and off states will be lifted in the direction away from the normal (Fig. 3g).

**中文:** 最外侧四列单元被配置为哑元（dummy elements），以便为中央五列建立相同的边界条件——这种排布保证超原子阵列每一列具有相同的远场散射图案。为简化记号，我们分别用 on 与 off 表示每一列超原子的 0° 与 180° 相位状态。f = 9.7 GHz 时每一列的仿真远场幅度与相位响应见图 3f–h。工作在 on/off 状态下的五列辐射体，其法向（θ = 0°）远场响应可实现 0° 至 180° 的相移；当辐射角度偏离法向时，每列远场响应会乘上因子 exp(jkₓx)（x 为该列位置），因此五列在 on/off 状态下的远场相位简并会在偏离法向的方向上被解除（图 3g）。

**Original:** In particular, the simulated phase responses of the ten states in the first-harmonic direction (θ = 24.4°) are arranged in the ascending order (Fig. 3h). The average phase difference between the adjacent states is calculated as 35.9°, closely aligned with the theoretical prediction of 36° (Supplementary Section 2 provides more details). The average standard deviation of the simulated phases relative to the linear fit (red dashed line) was calculated to be less than 3.9°.

**中文:** 特别地，一次谐波方向（θ = 24.4°）上十个状态的仿真相位响应按升序排列（图 3h）。相邻状态间的平均相位差计算为 35.9°，与理论预测值 36° 高度吻合（详见补充材料第 2 节）；相对线性拟合（红色虚线）的仿真相位平均标准差小于 3.9°。

<a id="F003"></a>
### 图 3 样机设计与远场响应

![Figure 3](assets/figures/fig3.png)

**Original caption:** Fig. 3 | Prototype design and far-field responses. a,b, Front (a) and back (b) configurations of the programmable metasurface antenna. The outer four columns of elements are configured as dummy elements to establish the same boundary conditions for the central five columns of the elements. The five central columns used for information mapping are labelled by numbers from 1 to 5, and the outer dummy columns are not labelled. c, Meta-atom of the programmable metasurface antenna, in which the slotted patch is connected to the ground copper through a metallic rod. d, MADP-14020-907 PIN diodes, controlled by a single-chip microcomputer, are incorporated into each column of the meta-atom array to control the phase states of the metasurface antenna. e, Equivalent circuit model of the PIN diode with respect to the different polarities of the bias voltages (+2.5 V and −2.5 V). f,g, Simulated far-field amplitude (f) and phase (g) responses of the central five columns of the meta-atom array when working in the ‘on’ and ‘off’ states. The green dashed lines mark the amplitude and phase responses in the direction of the first spatial harmonic (θ = 24.4°). h, Simulated far-field phase responses in the first-harmonic direction (θ = 24.4°), obtained by exciting each column of the central five columns of the programmable metasurface antenna in the on and off states, respectively. The obtained phase responses are represented by the modulo of 360° and subsequently arranged in the ascending order, as denoted by state number n. The linear fit of these phase states is represented by the red dashed line, adhering to the equation θ = 35.8062° × n – 9.1218°, and the standard deviation of the simulated phases with respect to the linear fit is calculated as 3.387°.

**中文图注:** 图 3：样机设计与远场响应。a,b，可编程超表面天线正面 (a) 与背面 (b) 结构；外侧四列单元为哑元，为中央五列建立相同边界条件；用于信息映射的中央五列以数字 1–5 标注。c，天线超原子：开缝贴片通过金属杆连接到接地铜。d，每列超原子阵列嵌入由单片机控制的 MADP-14020-907 PIN 二极管以控制天线相位状态。e，不同偏压极性（+2.5 V 与 −2.5 V）下 PIN 二极管的等效电路模型。f,g，中央五列超原子在 on/off 状态下的仿真远场幅度 (f) 与相位 (g) 响应；绿色虚线标注一次空间谐波方向（θ = 24.4°）处的幅度与相位响应。h，分别激励中央五列处于 on/off 状态时，一次谐波方向（θ = 24.4°）的仿真远场相位响应；相位响应按 360° 取模后升序排列（状态号 n），红色虚线为线性拟合 θ = 35.8062° × n − 9.1218°，仿真相位相对拟合的标准差为 3.387°。

**Reading note:** 上图是样机结构：正/背面（a/b）、超原子（c，开缝贴片 + 接地 + 过孔）、PIN 二极管与等效电路（d/e，+2.5/−2.5 V 切换 7.8 Ω/0 Ω 等）；下图是 9.7 GHz 下中央五列 on/off 的幅度与相位（f/g）以及一次谐波方向十个状态的线性相位（h）——相邻状态间隔 ≈35.9°/36°，接近理想的 2π/10。

## 4 信息映射方案的实验验证 EXPERIMENTAL DEMONSTRATION OF THE INFORMATION MAPPING SCHEME

**Original:** Photographs of the fabricated sample and measurement setup are shown in Fig. 4a–c. All the experiments were carried out in a microwave anechoic chamber (Methods). The far-field radiation patterns with respect to all the 32 programmable patterns of the metasurface antenna are measured and organized based on their amplitude responses in the half-harmonic and first-harmonic directions (Methods).

**中文:** 加工样机与测量装置的照片见图 4a–c。全部实验均在微波暗室中进行（见 Methods）。我们测量了超表面天线全部 32 种可编程图案的远场辐射方向图，并按其在半谐波与一次谐波方向的幅度响应进行归类（见 Methods）。

**Original:** The harmonic-field responses generated by the encoding sequences of length 5 exhibit four distinct amplitude levels (Fig. 2h). These amplitude levels can be normalized, thereby represented as α₀ = 0, α₁ ≈ 0.38, α₂ ≈ 0.62 and α₃ = 1. Thus, the 32 encoding sequences can be partitioned into four sets based on their far-field amplitude responses at the first harmonic, which can be represented as {S₀}, {S₁}, {S₂} and {S₃}. Specifically, the set {S₀} comprises only two encoding sequences, namely, all 1s and all −1s. Furthermore, the sets {S₁}, {S₂} and {S₃} each consist of ten encoding sequences (Methods).

**中文:** 长度为 5 的编码序列产生的谐波场响应呈现四个不同幅度电平（图 2h）。将这些电平归一化后可表示为 α₀ = 0、α₁ ≈ 0.38、α₂ ≈ 0.62 与 α₃ = 1。于是，根据一次谐波方向的远场幅度响应，可把 32 条编码序列划分为四个集合 {S₀}、{S₁}、{S₂}、{S₃}：其中 {S₀} 仅含两条编码序列（全 1 与全 −1），而 {S₁}、{S₂}、{S₃} 各含十条编码序列（见 Methods）。

**Original:** The experimentally retrieved far-field responses of the programmable metasurface antenna corresponding to the encoding sequence sets {S₁}, {S₂} and {S₃} are shown in Fig. 4d–f. The far-field responses corresponding to the encoding sequence set {S₀} are shown in Supplementary Section 15. It can be observed that the measured far-field responses within the same set share almost the same amplitude level of αᵢ in the first-harmonic direction, which agrees well with the theoretical predictions.

**中文:** 编码序列集合 {S₁}、{S₂}、{S₃} 对应的实验远场响应见图 4d–f；{S₀} 对应的远场响应见补充材料第 15 节。可以观察到，同一集合内的实测远场响应在一次谐波方向几乎共享相同的幅度电平 αᵢ，与理论预测吻合良好。

**Original:** Similarly, the encoding sequences corresponding to four levels of amplitude responses in the half-harmonic direction can be represented as γ⁻¹₅{S₀}, γ⁻¹₅{S₁}, γ⁻¹₅{S₂} and γ⁻¹₅{S₃}, respectively. Specifically, each of the sets γ⁻¹₅{S₁}, γ⁻¹₅{S₂} and γ⁻¹₅{S₃} contain ten encoding sequences, where the corresponding far-field responses are shown in Fig. 4g–i. The far-field responses with respect to the encoding sequence set of γ⁻¹₅{S₀} are shown in Supplementary Section 15.

**中文:** 类似地，半谐波方向四个幅度电平对应的编码序列可分别表示为 γ⁻¹₅{S₀}、γ⁻¹₅{S₁}、γ⁻¹₅{S₂} 与 γ⁻¹₅{S₃}。其中 γ⁻¹₅{S₁}、γ⁻¹₅{S₂}、γ⁻¹₅{S₃} 各含十条编码序列，其远场响应见图 4g–i；集合 γ⁻¹₅{S₀} 的远场响应见补充材料第 15 节。

**Original:** The measured far-field amplitude and phase responses of the 32 programmable patterns in the normal, half-harmonic and first-harmonic directions are presented in Supplementary Section 16. Only six states can be effectively distinguished in the normal direction. By contrast, 31 distinct states are produced in the half-harmonic and first-harmonic directions, with only one state being indistinguishable from the others.

**中文:** 32 种可编程图案在法向、半谐波与一次谐波方向的实测远场幅度与相位响应见补充材料第 16 节。法向方向只能有效区分六个状态；相比之下，半谐波与一次谐波方向可产生 31 个不同状态，仅有一个状态与其它状态无法区分。

**Original:** Furthermore, multiple far-field measurements were performed at a specific angle of 23° for each encoding pattern, aiming to synthesize the constellation diagram in the first-harmonic direction. Specifically, the harmonic-field responses produced by each encoding pattern were measured 1,000 times, with the input power (Pₜ) supplied to the programmable metasurface antenna varying from 0.0125 mW to 0.05 mW (Fig. 4j–l). The collected states exhibit overlaps with the input power supply of 0.0125 mW and 0.025 mW. As the input power supply increases to 0.05 mW, all the points corresponding to different encoding patterns can be unambiguously identified in the constellation diagram. In general, the experimental obtained constellation diagrams are in agreement with the theoretical predicted results (Fig. 2h).

**中文:** 此外，为合成一次谐波方向的星座图，我们对每种编码图案在特定角度 23° 进行了多次远场测量：每种图案的谐波场响应被测量 1000 次，输入功率 Pₜ 在 0.0125 mW 至 0.05 mW 之间变化（图 4j–l）。在输入功率为 0.0125 mW 与 0.025 mW 时，收集到的状态存在重叠；当输入功率提高到 0.05 mW，不同编码图案对应的点都能在星座图中被无歧义地分辨。总体而言，实验获得的星座图与理论预测结果一致（图 2h）。

**Original:** Even though the far-field responses in our model are distinct and non-overlapping in theory, the presence of noise might lead to the produced points to overlap and mix in the constellation diagram. For instance, Fig. 2g–i shows that the points in the produced constellation diagrams become more closely spaced as the length of the encoding sequence increases. The closely spaced points are more vulnerable to noise in the communication channel, potentially leading to increased bit errors and compromise the data transmission. Hence, for practical communications, extending the sequence length might not always yield a higher information mapping efficiency, as the closely spaced points in the constellation diagram might not be distinguished in a noisy channel. Therefore, evaluating the SNR of the communication channel is helpful to determine the appropriate encoding length adopted in our proposed scheme. Moreover, it is feasible to remove certain points in the constellation diagram that are very closely spaced. Accordingly, the retained points in the constellation diagram will exhibit greater minimum spacing, and can be used for data transmission with improved resilience to noise.

**中文:** 尽管理论上我们模型中的远场响应各不相同、互不重叠，但噪声的存在仍可能使星座图中的状态点发生重叠与混叠。例如图 2g–i 表明，随着编码序列长度增加，星座图中各点间距变小。间距过近的点在通信信道噪声面前更脆弱，可能导致误码增加、危及数据传输。因此，在实际通信中，一味延长序列长度未必能带来更高的信息映射效率——过近的星座点在有噪信道中可能无法分辨。所以，评估通信信道的 SNR 有助于确定本方案应采用的编码长度。此外，还可以剔除星座图中间距过近的点：保留点之间的最小间距会变大，从而以更强的抗噪能力用于数据传输。

**Original:** The far-field responses of the programmable metasurface antenna exhibit relatively high angular dependency around the first-harmonic direction (Supplementary Sections 10–13). For practical communications, the proposed scheme is primarily suited to a scenario in which the relative orientation of the receiver and transmitter varies within a small angle range, such as geosynchronous-satellite-based communication networks and point-to-point wireless links with small angular variations. One feasible strategy to broaden the communication angular range is to utilize frequency scanning, for which the first-harmonic angle varies as the working frequency changes (Supplementary Section 14). Moreover, implementing electrically tunable phase shifters at the feeding part of the meta-array can shift the first-harmonic angle, thereby enabling wide-angle scanning of the communication channel. Supplementary Section 21 provides more details.

**中文:** 可编程超表面天线的远场响应在一次谐波方向附近表现出较强的角度依赖性（补充材料第 10–13 节）。因此在实际通信中，本方案主要适用于收发端相对取向变化较小的场景，例如基于地球同步卫星的通信网络以及角度变化很小的点对点无线链路。拓宽通信角度范围的一个可行策略是利用频率扫描：一次谐波角会随工作频率变化（补充材料第 14 节）；此外，在超原子阵列的馈电部分引入电调移相器也能移动一次谐波角，从而实现通信信道的广角扫描（详见补充材料第 21 节）。

<a id="F004"></a>
### 图 4 信息映射方案的实验结果

![Figure 4](assets/figures/fig4.png)

**Original caption:** Fig. 4 | Experimental results of information mapping scheme based on a programmable metasurface antenna. a, Measurement setup of the programmable metasurface antenna in a microwave anechoic chamber. b,c, Photographs of the programmable metasurface antenna (b) and the integrated controlling unit (c). d–f, Measured far-field radiation patterns with respect to the encoding sequences {S₁} (d), {S₂} (e) and {S₃} (f). The two red dashed lines mark the angles of the –first-harmonic and first-harmonic directions, and the blue dashed semicircles mark the normalized amplitude of α₁ = 0.38, α₂ = 0.62 and α₃ = 1. g–i, Measured far-field radiation patterns with respect to the encoding sequence sets γ⁻¹₅{S₁} (g), γ⁻¹₅{S₂} (h) and γ⁻¹₅{S₃} (i). The two red dashed lines mark the angles of the negative and positive half-harmonic directions, and the blue dashed semicircles mark the normalized amplitude levels of α₁ = 0.38, α₂ = 0.62 and α₃ = 1. j–l, Experimentally retrieved constellation diagrams in the first-harmonic direction, where the input power fed to the programmable metasurface antenna (Pₜ) is 0.0125 mW (j), 0.025 mW (k) and 0.05 mW (l).

**中文图注:** 图 4：基于可编程超表面天线的信息映射方案实验结果。a，微波暗室中可编程超表面天线的测量装置。b,c，可编程超表面天线 (b) 与集成控制单元 (c) 的照片。d–f，对应编码序列集合 {S₁} (d)、{S₂} (e)、{S₃} (f) 的实测远场辐射方向图；两条红色虚线标注 −一次谐波与一次谐波方向，蓝色虚线圈标注归一化幅度 α₁ = 0.38、α₂ = 0.62、α₃ = 1。g–i，对应编码序列集合 γ⁻¹₅{S₁} (g)、γ⁻¹₅{S₂} (h)、γ⁻¹₅{S₃} (i) 的实测远场辐射方向图；两条红色虚线标注负、正半谐波方向，蓝色虚线圈标注归一化幅度 α₁ = 0.38、α₂ = 0.62、α₃ = 1。j–l，一次谐波方向实验提取的星座图，输入功率 Pₜ 分别为 0.0125 mW (j)、0.025 mW (k) 与 0.05 mW (l)。

**Reading note:** d–f 与 g–i 分别是第一/半谐波方向按集合测量的方向图——同集合状态幅度几乎一致（α₁/α₂/α₃），验证了理论分类；j–l 是同一角（23°）重复 1000 次测量合成的星座：Pₜ 增大到 0.05 mW 后 31 个状态点可无歧义分辨。

## 5 模拟数据传输 SIMULATED DATA TRANSMISSION

**Original:** Here we propose a simulated data transmission experiment to illustrate how a picture can be transmitted using our proposed scheme, with a detailed description of the bit string encoding provided in Methods. A test image with a size of 971k bytes was converted into a series of pixels, each represented by an 8-bit binary string. Next, the bit strings of the image pixels are grouped into a long bit stream. Following this, the bit stream is segmented into 9-bit binary strings, where each string is assigned with two programmable patterns. To simulate a noisy communication channel, complex Gaussian noise is added to the experimentally retrieved constellation diagram, yielding different levels of SNRs (Fig. 5a–c). More details about the partitioning of the constellation diagram are provided in Supplementary Section 18. Afterwards, the test image can be reconstructed by decoding each segment of the 9-bit string based on the obtained harmonic-field responses in the simulated noisy channel. The reconstructed images under SNR levels of 7 dB, 12 dB and 17 dB are plotted in Fig. 5d–f, respectively. The obtained image exhibits a high level of blurriness under the SNR of 7 dB. In comparison, the quality of the reconstructed image is greatly improved when the SNR increases to 12 dB, and achieves pronounced clarity under the SNR of 17 dB.

**中文:** 这里我们提出一个模拟数据传输实验，演示如何用所提出的方案传输一幅图片（比特串编码的详细描述见 Methods）。一张 971k 字节的测试图像先被转换为一系列像素，每个像素用 8 比特二进制串表示；随后把所有像素的比特串拼成一条长比特流。接着，比特流被切分为 9 比特的二进制串，每个 9 比特串被分配给两个可编程图案。为模拟有噪通信信道，我们向实验提取的星座图加入复高斯噪声，产生不同的 SNR 电平（图 5a–c；星座图划分的更多细节见补充材料第 18 节）。之后，根据模拟有噪信道中得到的谐波场响应，对每个 9 比特串分段解码即可重建测试图像。SNR 为 7 dB、12 dB 与 17 dB 时的重建图像见图 5d–f：SNR = 7 dB 时图像高度模糊；SNR 提高到 12 dB 后图像质量大幅改善；SNR = 17 dB 时图像清晰度显著。

**Original:** During the simulated image transmission, the bit error rate is calculated too (Fig. 5g). Both analytically and experimentally retrieved constellation diagrams are used to decode the transmitted image. The computed bit error rate falls below 10⁻⁶ at an SNR of 15 dB when decoding is performed using an analytical constellation diagram and at an SNR of 17 dB when using experimentally retrieved constellation diagram. The bit error rate obtained from the experimental constellation diagram is greater than the analytically calculated ones, which is attributed to the distortion of the states in the experimentally retrieved constellation diagram. Optimizing the meta-array to generate a constellation diagram that more closely aligns with the theoretical model is expected to further reduce the bit error rate.

**中文:** 在模拟图像传输过程中，我们还计算了误码率（图 5g），并分别用解析提取与实验提取的星座图对传输图像解码。采用解析星座图解码时，误码率在 SNR = 15 dB 时降至 10⁻⁶ 以下；采用实验提取星座图时，则需 SNR = 17 dB。实验星座图得到的误码率高于解析计算结果，这归因于实验提取星座图中状态点的畸变。若优化超原子阵列，使其生成的星座图更贴近理论模型，有望进一步降低误码率。

<a id="F005"></a>
### 图 5 模拟数据传输实验中的误码率评估

![Figure 5](assets/figures/fig5.png)

**Original caption:** Fig. 5 | Bit-error-rate evaluation through a simulated data transmission experiment. a–c, Complex Gaussian functions are added to the experimentally retrieved constellation diagram to model a communication channel with SNRs of 7 dB (a), 12 dB (b) and 17 dB (c). d–f, Reconstructed images under SNRs of 7 dB (d), 12 dB (e) and 17 dB (f). g, Calculated bit error rates during simulated image transmission using both analytically and experimentally retrieved constellation diagrams. The green curve corresponds to the calculated bit error rates utilizing the analytical constellation diagram (Supplementary Fig. 16a shows the distribution of the constellation diagram). The orange curve corresponds to the calculated bit error rates utilizing the experimentally retrieved constellation diagram. The experimentally retrieved constellation diagram was obtained by taking the average of the experimentally retrieved harmonic-field responses for each sequence in Fig. 4l, and the obtained constellation diagram is shown in Supplementary Fig. 16b.

**中文图注:** 图 5：通过模拟数据传输实验评估误码率。a–c，向实验提取的星座图加入复高斯函数以模拟 SNR 分别为 7 dB (a)、12 dB (b) 与 17 dB (c) 的通信信道。d–f，SNR 为 7 dB (d)、12 dB (e) 与 17 dB (f) 时的重建图像。g，用解析提取与实验提取两种星座图解码的模拟图像传输误码率：绿色曲线对应解析星座图（星座分布见补充图 16a），橙色曲线对应实验提取星座图（由对图 4l 中各序列的实验谐波场响应取平均得到，见补充图 16b）。

**Reading note:** 该图展示了端到端图像传输验证：随 SNR 提高（a→c）星座点噪声变小、重建图像（d→f）从模糊到清晰；g 图 BER 曲线显示解析星座在 ~15 dB、实验星座在 ~17 dB 达到 10⁻⁶，实验曲线偏高源于实测星座点畸变。

**Original:** The proposed communication scheme features a simpler architecture than conventional MIMO systems. However, this simplification comes with trade-offs in terms of functionalities. The MIMO-based transmitters are capable of dynamic beam steering, active beamforming, adaptable control of modulation schemes to accommodate varying channel conditions and supporting high and dynamic bandwidths for data transmission. These capabilities are currently absent in our prototype, but they could be realized in principle in the future. Overall, the proposed scheme is still in the early stage of development and faces several challenges and limitations that necessitate further exploration and improvement.

**中文:** 所提出的通信方案比传统 MIMO 系统架构更简单，但这种简化也带来功能上的取舍。基于 MIMO 的发射机能够进行动态波束控制、主动波束赋形、自适应调整调制方案以适配变化的信道条件，并支持高且动态的带宽用于数据传输——这些能力目前在我们的样机中尚不具备，但原则上未来可以实现。总体而言，本方案仍处于发展初期，面临若干有待进一步探索与改进的挑战与局限。

**Original:** In this study, only one-dimensional programmable metasurface antenna-based transmitters were investigated. It is conceivable to adopt a programmable metasurface antenna-assisted transmitter using two-dimensional encodings to send information at the two-dimensional spatial harmonic (or half-harmonic), which could potentially provide a greater enhancement of the data transmission rate for the programmable metasurface antenna-assisted wireless networks.

**中文:** 本研究只考察了一维可编程超表面天线发射机。可以设想，采用二维编码的可编程超表面天线辅助发射机在二维空间谐波（或半谐波）方向发送信息，将可能为可编程超表面天线辅助的无线网络带来更大的数据传输速率提升。

## 6 结论 CONCLUSIONS

**Original:** We have reported a programmable metasurface antenna-based transmitter that approaches the maximum information mapping efficiency. Our approach incorporates non-recurrent encoding and spatial harmonic retrieval, and we showed that our model can achieve symmetrically distributed and distinctive far-field responses in the first-harmonic direction. Cascaded encoding was used to enhance the power efficiency of the communication networks and to suppress unwanted energy radiation to the non-harmonic angles. We performed a simulated data transmission experiment and demonstrated bit stream transmission using our model. Our findings are generally applicable over a wide spectral range and lay the groundwork for future programmable metasurface antenna-enabled high-speed radio-frequency-chain-free wireless networks.

**中文:** 我们报道了一种逼近最大信息映射效率的可编程超表面天线发射机。该方法融合非递归编码与空间谐波检索，证明我们的模型能在一次谐波方向产生对称分布且彼此独特的远场响应；级联编码被用于提升通信网络的功率效率并抑制向非谐波角度辐射的无用能量。我们还开展了模拟数据传输实验，验证了基于该模型的比特流传输。研究结果普遍适用于宽频谱范围，为未来由可编程超表面天线赋能的、无需射频链路的高速无线网络奠定了基础。

## 7 方法 METHODS

### 7.1 编码序列与远场响应（Encoding sequence and far-field response）

**Original:** A metasurface or metasurface antenna can scatter/radiate the electromagnetic waves to the far-field region, where the far-field pattern (E₂(k)) is proportional to the Fourier transform of the field distribution on the metasurface (E₁(r)):

**中文:** 超表面或超表面天线能把电磁波散射/辐射到远场区，其远场方向图 E₂(k) 正比于超表面上场分布 E₁(r) 的傅里叶变换：

<a id="E006"></a>

![公式 6（原图）](assets/equations/eq6.png)

**中文说明：** 式 (6) 即 E₂(k) ∝ ∫∫E₁(r)e^(−jkr)dr = F[E₁(r)]，其中 ℱ 表示傅里叶变换，k 是辐射方向 (θ, φ) 的函数：k = [kₓ, k_y] = [ksinθcosφ, ksinθsinφ]。

**Original:** where ℱ denotes the Fourier transform. The vector k is a function of the elevation and azimuth angles (θ, φ) of the radiation direction such that k = [kₓ, k_y] = [ksinθcosφ, ksinθsinφ]. For the model of a one-dimensional programmable metasurface, equation (5) can be simplified to E₂(kₓ) ∝ ∫E₁(x)·e^(−jkₓx)dx, where kₓ = ksinθ.

**中文:** 其中 ℱ 表示傅里叶变换；向量 k 是辐射方向仰角与方位角 (θ, φ) 的函数：k = [kₓ, k_y] = [ksinθcosφ, ksinθsinφ]。对于一维可编程超表面模型，式 (5)（原文如此，应指式 (6)）可简化为 E₂(kₓ) ∝ ∫E₁(x)·e^(−jkₓx)dx，其中 kₓ = ksinθ。

**Original:** A typical 1-bit programmable metasurface is composed of a meta-atom array with p columns, where the phase state of each column of elements can be independently switched from 0 to π (or from π to 0) in real time by the integrated control unit. Here the width of each column of the meta-array is denoted as d, and the electric-field distribution on a column of the meta-array as φ_d(x) for the zero-phase state. Accordingly, the field distribution on the same column of the meta-array can be approximated as –φ_d(x) for the π-phase state. As a result, the overall field distribution on the metasurface plane can be expressed as the convolution of the aperture function of the meta-atoms (φ_d(x)) and the encoding sequence such that

**中文:** 典型 1 比特可编程超表面由含 p 列超原子的阵列构成，每列单元的相位状态可由集成控制单元在 0 与 π（或 π 与 0）之间实时独立切换。设超原子阵列每列宽度为 d，零相位状态下该列的电场分布为 φ_d(x)；相应地，π 相位状态下同一列的场分布可近似为 −φ_d(x)。于是，超表面平面上的总场分布可表示为超原子口径函数 φ_d(x) 与编码序列的卷积：

<a id="E007"></a>

![公式 7（原图）](assets/equations/eq7.png)

**中文说明：** 式 (7) 即 E₁(x) ∝ φ_d(x) ∗ s(x)，其中 s(x) = Σₘ₌₀^{p−1}[δ(x−md)] × exp(−jφₘ) 是长度为 p 的离散编码序列，δ(x) 为狄拉克 δ 函数，φₘ 为第 m 列超原子阵列的相位响应（下标在原文图注中写作 m−1）。

**Original:** where s(x) = Σₘ₌₀^{p−1}[δ(x−md)] × exp(−jφₘ) represents a discrete encoding sequence with length p. The term δ(x) denotes the Dirac delta function and φₘ represents the phase response of the mth column of the meta-atom array. Following the convolution theorem, the radiated electric far field can be expressed as the product of the Fourier transform of the aperture function and the encoding sequence such that

**中文:** 其中 s(x) = Σₘ₌₀^{p−1}[δ(x−md)] × exp(−jφₘ) 表示长度为 p 的离散编码序列，δ(x) 为狄拉克 δ 函数，φₘ 为第 m 列超原子阵列的相位响应。根据卷积定理，辐射电远场可表示为口径函数的傅里叶变换与编码序列傅里叶变换的乘积：

<a id="E008"></a>

![公式 8（原图）](assets/equations/eq8.png)

**中文说明：** 式 (8) 即 E₂(kₓ) ∝ F[φ_d(x)] × F[s(x)] = f(kₓ) × F[s(x)]，其中 f(kₓ) 是零相位状态下单列超原子产生的远场响应。

**Original:** where f(kₓ) represents the far-field response generated by a single column of meta-atoms in the zero-phase state. In particular, the Fourier transform of the encoding sequence can be further formulated as

**中文:** 其中 f(kₓ) 表示零相位状态下单列超原子产生的远场响应。特别地，编码序列的傅里叶变换可进一步写成：

<a id="E009"></a>

![公式 9（原图）](assets/equations/eq9.png)

**中文说明：** 式 (9) 给出 F[s(x)] = ∫₋∞^{+∞} s(x)e^(−jkₓx)dx = ∫₋∞^{+∞} [Σₘ₌₀^{p−1} δ(x−md)e^(−jφₘ)e^(−jk₁x)]dx = Σₘ₌₀^{p−1} exp[−j(k₁d + φₘ)]（注意原文被积函数下标处 k₁ 的用法）。

**Original:** As a result, the far-field responses generated by the programmable metasurface can be represented as

**中文:** 因此，可编程超表面产生的远场响应可表示为：

<a id="E010"></a>

![公式 10（原图）](assets/equations/eq10.png)

**中文说明：** 式 (10) 即 E₂(kₓ) ∝ f(kₓ) × F[s(kₓ)] = f(kₓ) × Σₘ₌₀^{p−1} exp[−j(mkₓd + φₘ)]，由此建立了辐射方向图 E₂(kₓ) 与编码序列之间的关系（详细分析见补充材料第 1 节）。

**Original:** from which a relation between the radiation pattern (E₂(kₓ)) and the encoded sequence is built. Detailed analysis is provided in Supplementary Section 1.

**中文:** 由此建立了辐射方向图 E₂(kₓ) 与编码序列之间的关系，详细分析见补充材料第 1 节。

### 7.2 一次谐波方向远场响应的独特性（Distinctiveness of far-field responses at the first harmonic）

**Original:** Since the far-field responses generated by the two encoding sequences are assumed to be the same in the first-harmonic direction, the two sequences must satisfy equation (2). To simplify the analysis, we denote half of the difference between the sequences c and d as h, which is expressed as h = 0.5 × (c – d) = 0.5 × (c₀ – d₀, c₁ – d₁,…, cₚ₋₁ – dₚ₋₁). Accordingly, equation (2) can be rewritten as Σₘ₌₀^{p−1} hₘ × exp(−jm2π/p) = 0, and the new sequence h is composed of 1s, 0s and −1s, and must contain at least two different numbers since the sequences c and d are different.

**中文:** 既然假设两条编码序列在一次谐波方向产生的远场响应相同，它们就必须满足式 (2)。为简化分析，记序列 c 与 d 差的一半为 h，即 h = 0.5 × (c – d) = 0.5 × (c₀ – d₀, c₁ – d₁,…, cₚ₋₁ – dₚ₋₁)。于是式 (2) 可改写为 Σₘ₌₀^{p−1} hₘ × exp(−jm2π/p) = 0；新序列 h 由 1、0、−1 组成，且因 c 与 d 不同，h 中至少包含两种不同的数。

**Original:** In particular, a cyclic permutation (R) of the encoding sequence h from h = [h₀, h₁,…, hₚ₋₂, hₚ₋₁] to R(h) = [hₚ₋₁, h₀,…, hₚ₋₃, hₚ₋₂] will generate a phase shift of exp(–j2π/p) at the first harmonic. Accordingly, p distinctive cyclic permutation operations (R⁰, R¹, R²,…, Rᵖ⁻¹) can be performed on the sequence h, and the resultant first-harmonic responses will be zero, too. As a result, the first-harmonic responses generated by all the cyclic permuted sequences can be expressed in the matrix form as follows:

**中文:** 特别地，对编码序列 h 做循环置换 R：h = [h₀, h₁,…, hₚ₋₂, hₚ₋₁] → R(h) = [hₚ₋₁, h₀,…, hₚ₋₃, hₚ₋₂]，将使其一次谐波响应产生 exp(−j2π/p) 的相移。因此，可对序列 h 施加 p 种不同的循环置换（R⁰, R¹, R²,…, Rᵖ⁻¹），所得一次谐波响应同样为零。于是，全部循环置换序列的一次谐波响应可写成如下矩阵形式：

<a id="E011"></a>

![公式 11（原图）](assets/equations/eq11.png)

**中文说明：** 式 (11) 即 R^qₘ × ζₘ = 0：p 维矩阵 R 的第 q 列为循环置换序列 R^(q−1)(h)，ζ 为 p 维列向量，其分量 ζₘ = exp[−(m−1)j2π/p]；并且列向量 ζ 的元素之和为零。

**Original:** where the qth column of the p-dimensional matrix R is the cyclic permuted sequence R^(q–1)(h), and ζ represents the p-dimensional column vector such that ζₘ = exp[−(m−1)j2π/p]. Note that the sum of the elements of the column vector ζ is zero. Thus, we can construct another matrix equation such that J^qₘζₘ = 0, where each entry of the matrix J is 1. Due to the homogeneity of the matrix equations, a third matrix equation can be constructed by the summation of the two matrix equations such that

**中文:** 其中 p 维矩阵 R 的第 q 列为循环置换序列 R^(q−1)(h)，ζ 为 p 维列向量，其分量 ζₘ = exp[−(m−1)j2π/p]。注意列向量 ζ 的元素之和为零，因此可构造另一个矩阵方程 J^qₘζₘ = 0（矩阵 J 的每个元素都是 1）。由于矩阵方程具有齐次性，将两个矩阵方程相加可构造第三个矩阵方程：

<a id="E012"></a>

![公式 12（原图）](assets/equations/eq12.png)

**中文说明：** 式 (12) 即 Mζ = (R + J)ζ = 0。M 是满足循环条件 Mⁱ⁺¹ⱼ₊₁ = Mⁱⱼ 的循环矩阵，其元素由 2、1、0 等非负整数构成。

**Original:** Evidently, M is a circulant matrix satisfying the circulation condition Mⁱ⁺¹ⱼ₊₁ = Mⁱⱼ, and the matrix elements of M consist of non-negative integers comprising 2s, 1s and 0s. Since M is a real-valued matrix, the matrix equation Mζ = 0 can hold only if M is singular. However, we will show in the following that such a matrix must be non-singular as long as the encoding sequences are non-recurrent.

**中文:** 显然，M 是满足循环条件 Mⁱ⁺¹ⱼ₊₁ = Mⁱⱼ 的循环矩阵，其元素由 2、1、0 等非负整数构成。由于 M 是实矩阵，矩阵方程 Mζ = 0 只有在 M 奇异时才可能成立；但下面将证明：只要编码序列是非递归的，这样的矩阵必然非奇异。

**Original:** To demonstrate the non-singularity of the matrix M, we invoke the theorem that the rank of a real circulant matrix is p – d, where d is the degree of the greatest common divisor between α(x) and xᵖ – 1 (ref. 42). The associated polynomial of the circulant matrix (α(x)) can be expressed as

**中文:** 为证明矩阵 M 的非奇异性，我们引用如下定理：实循环矩阵的秩为 p − d，其中 d 是 α(x) 与 xᵖ − 1 的最大公因式的次数（文献 42）。循环矩阵的伴随多项式 α(x) 可表示为：

<a id="E013"></a>

![公式 13（原图）](assets/equations/eq13.png)

**中文说明：** 式 (13) 即 α(x) = M¹₁ + M¹₂x + … + M¹ₚx^(p−1)（上标为行号，下标为列号；正文写作 Mⁱⱼ）。

**Original:** Since the length of the encoding sequence is an odd prime number, the term xᵖ – 1 is irreducibly factored out as xᵖ – 1 = (x – 1)(xᵖ⁻¹ + xᵖ⁻² +…+ 1), where the irreducibility is guaranteed by the Eisenstein’s criterion (Supplementary Section 5).

**中文:** 由于编码序列长度为奇素数，xᵖ − 1 可不可约地分解为 xᵖ − 1 = (x − 1)(xᵖ⁻¹ + xᵖ⁻² + … + 1)，其中不可约性由艾森斯坦判别法保证（补充材料第 5 节）。

**Original:** In particular, the matrix elements of M cannot be the same (all 0s, all 1s or all 2s) because the encoding sequences (c and d) are required to be different and non-recurrent. Thus, the associated polynomial of the matrix M cannot be expressed as multiples of xᵖ⁻¹ + xᵖ⁻² +…+ 1. That is, the associated polynomial does not share any non-trivial common divisor with the term xᵖ⁻¹ + xᵖ⁻² +…+ 1.

**中文:** 特别地，矩阵 M 的元素不可能全部相同（全 0、全 1 或全 2），因为编码序列 c 与 d 要求彼此不同且均为非递归序列。因此，矩阵 M 的伴随多项式不可能等于 xᵖ⁻¹ + xᵖ⁻² + … + 1 的倍数，即伴随多项式与 xᵖ⁻¹ + xᵖ⁻² + … + 1 不共享任何非平凡公因子。

**Original:** On the contrary, since the matrix M cannot consist of all 0s, the coefficients of the associated polynomial α(x) must include at least one positive value. As a result, the summation of the coefficients of the polynomial must be greater than zero, which can be expressed as α(1) > 0. In other words, α(x) and x – 1 do not share any non-trivial common divisor either.

**中文:** 反过来，由于矩阵 M 不可能全为 0，伴随多项式 α(x) 的系数中至少有一个正值，因而多项式系数之和必大于零，即 α(1) > 0。换言之，α(x) 与 x − 1 也不共享任何非平凡公因子。

**Original:** The above analysis demonstrates that the degree of the greatest common divisor between α(x) and xᵖ – 1 must be zero (d = 0), and therefore, the rank of the circulant matrix M can be derived as p – 0 = p. Therefore, we have proved that the circulant matrix M must be non-singular if the length of the encoding sequence is an odd prime.

**中文:** 以上分析表明：α(x) 与 xᵖ − 1 的最大公因式的次数必为零（d = 0），因此循环矩阵 M 的秩为 p − 0 = p。由此证明：当编码序列长度为奇素数时，循环矩阵 M 必然非奇异。

**Original:** In particular, when the length of the 1-bit encoding sequence is a composite number, the harmonic-field responses generated by all available encoding sequences generally exhibit a greater number of degenerated states in the resulting constellation diagram (Supplementary Section 9).

**中文:** 特别地，当 1 比特编码序列长度为合数时，全部可用编码序列产生的谐波场响应在星座图中通常呈现更多的简并状态（补充材料第 9 节）。

### 7.3 半谐波方向的远场响应（Far-field responses in the half-harmonic direction）

**Original:** It has been shown that the far-field responses of the programmable metasurface antenna in the half-harmonic and first-harmonic directions are proportional to the inner product between the encoding sequence (s) and the gradient term as g₁/₂ = g(π/pd) = [1, exp(−jπ/p), …, exp(−(p−1)jπ/p)] and g₁ = g(2π/pd) = [1, exp(−j2π/p), …, exp(−(p−1)j2π/p)], respectively. Now, suppose m is an even number; then, the mth element in g₁/₂ is related to the ((m/2)+1)th element in g₁ by g₁/₂(m) = −g₁((m/2)+1). Similarly, when m is an odd number, the mth element in g₁/₂ is related to the ((m+1)/2)th element in g₁ by g₁/₂(m) = g₁((m+1)/2). Thus, it is possible to construct a non-degenerate transformation matrix γₚ between these two phase gradients. For instance, when the length of the encoding sequence is p = 5, the phase gradients g₁/₂ and g₁ are related by the matrix transformation rule such that

**中文:** 前面已表明，可编程超表面天线在半谐波与一次谐波方向的远场响应分别正比于编码序列 s 与梯度项 g₁/₂ = g(π/pd) = [1, exp(−jπ/p), …, exp(−(p−1)jπ/p)] 和 g₁ = g(2π/pd) = [1, exp(−j2π/p), …, exp(−(p−1)j2π/p)] 的内积。设 m 为偶数，则 g₁/₂ 的第 m 个元素与 g₁ 的第 (m/2+1) 个元素满足 g₁/₂(m) = −g₁(m/2+1)；当 m 为奇数时，g₁/₂(m) = g₁((m+1)/2)。因此可以在两条相位梯度之间构造非退化变换矩阵 γₚ。例如，当编码序列长度 p = 5 时，相位梯度 g₁/₂ 与 g₁ 满足如下矩阵变换规则：

<a id="E014"></a>

![公式 14（原图）](assets/equations/eq14.png)

**中文说明：** 式 (14) 即 p = 5 时 g₁ᵀ = γ₅·g₁/₂ᵀ = [1 0 0 0 0; 0 0 1 0 0; 0 0 0 0 1; 0 −1 0 0 0; 0 0 0 −1 0]·g₁/₂ᵀ，γ₅ 为非退化矩阵。

**Original:** It can be easily verified that the matrix γₚ is non-degenerate. That is, the array factor retrieved in the half-harmonic direction for the encoding sequence γ⁻¹₅·s will be the same as the array factor retrieved at the first harmonic for encoding sequence s. For instance, the sequence s = [1, 1, 1, 1, 1] will produce zero in the first-harmonic direction. Thus, we can adopt inverse matrix transformation to obtain the sequence γ⁻¹₅·s = [1, −1, 1, −1, 1]. It can be verified that the sequence γ⁻¹₅·s will produce zero in the half-harmonic direction, too. That is, the far-field responses at the half-harmonic exhibits a similar distribution in the complex plane compared with those observed in the first-harmonic direction.

**中文:** 容易验证矩阵 γₚ 非退化：对编码序列 γ⁻¹₅·s，其半谐波方向取回的阵列因子与编码序列 s 在一次谐波方向取回的阵列因子相同。例如，序列 s = [1,1,1,1,1] 在一次谐波方向产生零响应；通过逆矩阵变换得到序列 γ⁻¹₅·s = [1,−1,1,−1,1]，可验证该序列在半谐波方向同样产生零响应。也就是说，半谐波方向的远场响应与一次谐波方向相比，在复平面上呈现相似的分布。

### 7.4 负一次谐波方向的共轭对称（Conjugate symmetry in the –first-harmonic direction）

**Original:** Given that the encoding sequence s = (s₀, s₁, s₂,…, sₚ₋₁) is composed of elements that are either 1 or −1, it is, therefore, real valued. Meanwhile, the array factor is expressed as the inner product of the encoding sequence with the phase gradient term: Σₘ₌₀^{p−1} sₘ·exp(−jmkₓd). Thus, changing kₓ to –kₓ is equivalent to flipping j to –j in this expression. As a result, the constellation diagram produced at the –first harmonic will exhibit conjugation symmetry (j→–j) with the constellation diagram produced at the first harmonic. Therefore, it is also possible to adopt the –first harmonic to realize information mapping and wireless communications. However, the decoding scheme at the –first harmonic should differ from that used at the first harmonic, as the resulting points in the constellation diagram are conjugate with those at the first harmonic. More details are shown in Supplementary Section 17.

**中文:** 编码序列 s = (s₀, s₁, s₂,…, sₚ₋₁) 的元素为 1 或 −1，因此它是实值序列；而阵列因子表示为编码序列与相位梯度项的内积 Σₘ₌₀^{p−1} sₘ·exp(−jmkₓd)。把 kₓ 变为 −kₓ，等价于在该表达式中把 j 变为 −j。因此，负一次谐波方向产生的星座图与一次谐波方向产生的星座图呈共轭对称关系（j→−j）。所以也可以利用负一次谐波实现信息映射与无线通信，但其解码方案应与一次谐波不同——因为该方向星座图的各点与一次谐波方向互为共轭（详见补充材料第 17 节）。

### 7.5 集合 {Sᵢ} 内的编码序列（Encoding sequences in sets {Sᵢ}）

**Original:** In particular, the sequences in the set of {Sᵢ} are related by cyclic permutations (R) and sign inversions (σ). For instance, consider an encoding sequence s₁ = [1, –1, 1, –1, 1] within the set {S₁}. By performing all the possible combinations of cyclic permutations and sign inversions to s₁, all the ten sequences contained within the set {S₁} will be generated. These ten sequences can be represented as s₁ = [1, –1, 1, –1, 1], R(s₁) = [1, 1, –1, 1, –1], R²(s₁) = [–1, 1, 1, –1, 1], R³(s₁) = [1, –1, 1, 1, –1], R⁴(s₁) = [–1, 1, –1, 1, 1], σ(s₁) = [–1, 1, –1, 1, –1], Rσ(s₁) = [–1, –1, 1, –1, 1], R²σ(s₁) = [1, –1, –1, 1, –1], R³σ(s₁) = [–1, 1, –1, –1, 1] and R⁴σ(s₁) = [1, –1, 1, –1, –1]. In a similar way, the encoding sequences contained within the sets {S₂} and {S₃} can be generated by performing all the possible combinations of cyclic permutations and sign inversions to the encoding sequence s₂ = [1, 1, 1, 1, –1] and s₃ = [1, 1, 1, –1, –1], respectively.

**中文:** 集合 {Sᵢ} 内的序列由循环置换（R）与符号翻转（σ）相互联系。以 {S₁} 中的编码序列 s₁ = [1,−1,1,−1,1] 为例：对 s₁ 施加全部可能的循环置换与符号翻转组合，即可生成 {S₁} 所含的十条序列——s₁、R(s₁)=[1,1,−1,1,−1]、R²(s₁)=[−1,1,1,−1,1]、R³(s₁)=[1,−1,1,1,−1]、R⁴(s₁)=[−1,1,−1,1,1]、σ(s₁)=[−1,1,−1,1,−1]、Rσ(s₁)=[−1,−1,1,−1,1]、R²σ(s₁)=[1,−1,−1,1,−1]、R³σ(s₁)=[−1,1,−1,−1,1]、R⁴σ(s₁)=[1,−1,1,−1,−1]。类似地，{S₂} 与 {S₃} 中的编码序列可分别由 s₂ = [1,1,1,1,−1] 与 s₃ = [1,1,1,−1,−1] 施加全部循环置换与符号翻转组合生成。

### 7.6 非谐波方向的远场响应（Far-field responses in non-harmonic directions）

**Original:** Though it is possible to transmit information at non-harmonic directions, retrieving data at non-harmonic angles has three major drawbacks. First, the rotational symmetry of the far-field responses in the constellation diagram will be inevitably broken when the retrieving angle is not the integer or half-integer harmonic, and thus, it causes great difficulties in decoding information from the distorted far-field distribution. Second, when noises are present, the far-field responses at the non-harmonic angles are more likely to overlap, compared with the harmonic (or half-harmonic) angle, which causes a notable decrease in the information mapping efficiency. Furthermore, the radiated energy at the non-harmonic angles will be notably reduced when the cascaded encoding is introduced (Supplementary Section 7).

**中文:** 虽然也可以在非谐波方向传输信息，但在非谐波角度取回数据有三个主要缺点：其一，当取回角度不是整数或半整数谐波时，星座图中远场响应的旋转对称性必然被破坏，从而给从畸变远场分布中解码信息带来很大困难；其二，在有噪声时，非谐波角度的远场响应比谐波（或半谐波）角度更易重叠，导致信息映射效率明显下降；其三，引入级联编码后，非谐波角度的辐射能量将显著降低（补充材料第 7 节）。

### 7.7 实验装置与测量（Experimental setup and measurements）

**Original:** The experimental setup for measuring the far-field responses of the programmable metasurface antenna-based transmitter were established in a microwave anechoic chamber. A vector network analyser was utilized to retrieve the far-field amplitude and phase responses of the programmable metasurface antenna. The programmable metasurface antenna was placed on a turntable, and the far-field responses can be measured with the angular accuracy of 1°. The five inner columns of the meta-atoms were connected to port 1 of the vector network analyser via a power divider and a power amplifier, whereas the four outer columns were connected to matching loads and served as dummy elements. The phase state of the meta-array was controlled by a single-chip microcomputer. A dual-ridged horn antenna operating from 2 to 18 GHz was connected to port 2 through a low-noise amplifier to receive the transmitted signals. Due to the angular accuracy of 1° for the far-field measurement, interpolation is used to obtain the far-field responses at fractional angles.

**中文:** 测量可编程超表面天线发射机远场响应的实验装置搭建于微波暗室中：用矢量网络分析仪提取天线的远场幅度与相位响应；天线置于转台上，远场测量角度精度为 1°。超原子的中央五列经功分器与功率放大器接到矢量网络分析仪端口 1，外侧四列接匹配负载作为哑元；超原子阵列的相位状态由单片机控制。一只工作频带 2–18 GHz 的双脊喇叭天线经低噪声放大器接至端口 2 作为接收。由于远场测量角度精度为 1°，分数角度处的远场响应通过插值获得。

**Original:** As shown in Fig. 4d–f, the dashed red lines mark the angles that correspond to the first-harmonic direction (θ = ±sin⁻¹(2π/pd)) and the half-harmonic direction (θ = ±sin⁻¹(π/pd)). In particular, the coded sequences can be partitioned into four sets based on their respective amplitude levels in the first-harmonic direction (Fig. 2h). Specifically, the four levels of normalized amplitude can be determined as α₀ = 0, α₁ ≈ 0.38, α₂ ≈ 0.62 and α₃ = 1, where the encoding sequences within the same set are related by the right cyclic permutation and sign flipping. For instance, it can be shown that the encoding s₁ = [1, 1, 1, 1, –1] produces the far-field radiation pattern with normalized amplitude of α₁ in the first-harmonic direction. Hence, applying right cyclic permutation and sign flipping to the sequence s₁ yields all ten sequences with identical amplitude responses at the first harmonic. The generated ten sequences can be represented as follows: s₁ = [1, 1, 1, 1, –1], R·s₁ = [–1, 1, 1, 1, 1], R²·s₁ = [1, –1, 1, 1, 1], R³·s₁ = [1, 1, –1, 1, 1], R⁴·s₁ = [1, 1, 1, –1, 1], –s₁ = [–1, –1, –1, –1, 1], –(R·s₁) = [1, –1, –1, –1, –1], –(R²·s₁) = [–1, 1, –1, –1, –1], –(R³·s₁) = [–1, –1, 1, –1, –1] and –(R⁴·s₁) = [–1, –1, –1, 1, –1].

**中文:** 如图 4d–f 所示，红色虚线标注的角分别对应一次谐波方向（θ = ±sin⁻¹(2π/pd)）与半谐波方向（θ = ±sin⁻¹(π/pd)）。特别地，编码序列可按其一次谐波方向的幅度电平划分为四个集合（图 2h）：四个归一化幅度电平确定为 α₀ = 0、α₁ ≈ 0.38、α₂ ≈ 0.62 与 α₃ = 1，同一集合内的编码序列通过右循环置换与符号翻转相互联系。例如，可证明编码 s₁ = [1,1,1,1,−1] 在一次谐波方向产生归一化幅度 α₁ 的辐射方向图；因此，对 s₁ 施加右循环置换与符号翻转可得到一次谐波方向幅度响应全部相同的十条序列：s₁、R·s₁=[−1,1,1,1,1]、R²·s₁=[1,−1,1,1,1]、R³·s₁=[1,1,−1,1,1]、R⁴·s₁=[1,1,1,−1,1]、−s₁=[−1,−1,−1,−1,1]、−(R·s₁)=[1,−1,−1,−1,−1]、−(R²·s₁)=[−1,1,−1,−1,−1]、−(R³·s₁)=[−1,−1,1,−1,−1]、−(R⁴·s₁)=[−1,−1,−1,1,−1]。

**Original:** Likewise, the programmable patterns with normalized amplitudes of α₂ and α₃ can be obtained by applying cyclic permutation and sign inversion to the sequences s₂ = [1, 1, 1, –1, –1] and s₃ = [1, 1, –1, 1, –1]. Similarly, the encoding sequence exhibiting a normalized amplitude response of αᵢ at the half-harmonic can be obtained as γ⁻¹₅·sᵢ based on equation (13), where sᵢ represents the encoding sequence with the normalized amplitude of αᵢ in the first-harmonic direction.

**中文:** 同样地，归一化幅度 α₂、α₃ 的可编程图案可通过分别对 s₂ = [1,1,1,−1,−1] 与 s₃ = [1,1,−1,1,−1] 施加循环置换与符号翻转得到；半谐波方向归一化幅度为 αᵢ 的编码序列则按式 (13)（原文编号）取 γ⁻¹₅·sᵢ，其中 sᵢ 是一次谐波方向归一化幅度为 αᵢ 的编码序列。

**Original:** In particular, the experimentally retrieved harmonic angles (Fig. 4d–i) are deviated slightly from the theoretical predictions. Specifically, the measured angles corresponding to the positive and negative half-harmonics are –9.8° and 13.5°, which deviated from the theoretical prediction (±11.9°) by about 2.1° and 1.6°, respectively. The measured angles corresponding to the ±first harmonics are –23.4° and 26°, which deviated from the theoretical prediction (±24.4°) by about 1° and 1.6°, respectively. In Fig. 4j–l, the angle for the experimental retrieval of the constellation diagrams is 23°, which deviates by about 1.3° from the first-harmonic angle. We consider the slight deviation of the harmonic angles as mainly caused by the calibration error (approximately –1° to –1.5°) of the turntable, for which the far-field states at angle –1° exhibit great agreement with the theoretical prediction in the normal direction (Fig. 4j).

**中文:** 特别地，实验提取的谐波角（图 4d–i）与理论预测略有偏差：正、负半谐波实测角分别为 −9.8° 与 13.5°，相对理论预测 ±11.9° 偏差约 2.1° 与 1.6°；±一次谐波实测角为 −23.4° 与 26°，相对理论预测 ±24.4° 偏差约 1° 与 1.6°。图 4j–l 中实验合成星座图的角度为 23°，与一次谐波角偏差约 1.3°。我们认为谐波角的轻微偏差主要源于转台的标定误差（约 −1° 至 −1.5°）——法向 −1° 处的远场状态与理论预测高度一致（图 4j）。

### 7.8 用可编程图案编码比特串（Coding of bit strings with programmable patterns）

**Original:** Bit stream transmission typically uses coding sequences with fixed length L, which necessitates the total number of states at the receiver end to be 2ᴸ. For instance, when the length of each bit string is L = 3, the constellation diagram is required to feature eight unique states, each corresponding to the bit string of ‘000’, ‘001’, ‘010’, ‘011’, ‘100’, ‘101’, ‘110’ and ‘111’.

**中文:** 比特流传输通常使用固定长度 L 的编码序列，这要求接收端的状态总数为 2ᴸ。例如，当每个比特串长度为 L = 3 时，星座图需要具备八个不同状态，分别对应比特串‘000’、‘001’、‘010’、‘011’、‘100’、‘101’、‘110’与‘111’。

**Original:** To encode the bit string with our proposed scheme, it is crucial to select 2ᴸ points from the generated 2ᵖ – 1 points in the constellation diagram. Evidently, the maximum permissible value for L is p – 1, for which the number of unique states in the constellation diagram satisfies the inequality 2ᵖ⁻¹ < 2ᵖ – 1. Since p bits of information are input into the programmable metasurface antenna, the resultant bit mapping efficiency through this approach can be calculated as (p – 1)/p.

**中文:** 用本方案编码比特串的关键，是从星座图产生的 2ᵖ − 1 个状态点中选取 2ᴸ 个。显然，L 的最大允许值为 p − 1，此时星座图状态数满足不等式 2ᵖ⁻¹ < 2ᵖ − 1。由于输入可编程超表面天线的信息为 p 比特，该方法得到的比特映射效率为 (p − 1)/p。

**Original:** Alternatively, one may use multiple programmable patterns to encode a longer bit string, thereby capable of achieving a higher bit mapping efficiency that approaches the theoretical limit of η₁. Specifically, q successive programmable patterns can produce a total number of (2ᵖ–1)^q ≈ 2^(pq) – q outcomes at the receiving end. Thus, it is feasible to use q measurements to retrieve the encoding sequence with length L_q, where L_q denotes the greatest integer less than or equal to log₂(2^(pq) – q).

**中文:** 另一种做法是使用多个可编程图案编码更长的比特串，从而获得逼近理论上限 η₁ 的更高比特映射效率。具体而言，q 个连续的可编程图案在接收端总共可产生 (2ᵖ−1)^q ≈ 2^(pq) − q 种结果，因此可用 q 次测量取回长度为 L_q 的编码序列，其中 L_q 为不超过 log₂(2^(pq) − q) 的最大整数。

**Original:** For instance, in the case of p = 5 and q = 2, using two successive programmable patterns results in a total number of 31 × 31 = 961 outcome states at the first harmonic. In such a case, L_q can be calculated as 9, indicating that 9 bits of information can be transmitted with two successive programmable patterns. Accordingly, the resultant bit mapping efficiency can be computed as 90%. Generally, the bit mapping efficiency will approach the theoretical upper limit of the information mapping efficiency (η₁) as q increases. For instance, in the case where p = 5, the bit mapping efficiency is calculated as 93% for q = 3, and it will increase to 98% for q = 10.

**中文:** 例如，当 p = 5、q = 2 时，两个连续可编程图案在一次谐波方向共产生 31 × 31 = 961 种结果状态；此时 L_q 可算得为 9，即两个连续可编程图案可传输 9 比特信息，相应比特映射效率为 90%。一般而言，随着 q 增大，比特映射效率将逼近信息映射效率的理论上限 η₁：例如 p = 5 时，q = 3 的比特映射效率为 93%，q = 10 时可提高到 98%。

**Original:** In the proposed scheme, it is feasible to use two programmable patterns, each of length 5, to encode an arbitrary binary bit string of length 9. For notational simplicity, we assign 31 programmable patterns with integers ranging from 0 to 30 (Supplementary Table 1). Next, we express each 9-bit string with the form of 31 × γ₁ + γ₀, where γ₀ takes integer values from 0 to 30, and γ₁ takes integer values from 0 to 16. For instance, the binary bit string ‘101010010’ takes the decimal value of 338, and can be represented as 31 × 10 + 28. Accordingly, the integer pair of (γ₁, γ₀) can be determined as (10, 28). Thus, to transmit the bit string ‘101010010’, one can use two successive programmable patterns, specifically ‘−1 1 −1 −1 −1’ followed by ‘−1 1 −1 −1 1’.

**中文:** 在本方案中，可用两个长度均为 5 的可编程图案编码任意 9 比特二进制串。为便于记号，我们把 31 个可编程图案用整数 0 到 30 编号（补充表 1）；然后把每个 9 比特串表示为 31 × γ₁ + γ₀ 的形式，其中 γ₀ 取 0–30 的整数、γ₁ 取 0–16 的整数。例如，二进制串‘101010010’的十进制值为 338，可表示为 31 × 10 + 28，即整数对 (γ₁, γ₀) = (10, 28)。因此，传输比特串‘101010010’时，可使用两个连续可编程图案：‘−1 1 −1 −1 −1’ 后接 ‘−1 1 −1 −1 1’。

**Original:** To reconstruct the transmitted bit string, the constellation diagram is partitioned into 31 distinct regions, too, with each region being assigned with a unique integer from 0 to 30 (Supplementary Section 18). Therefore, the values of γ₁ and γ₀ can be obtained through the measurement of the harmonic-field responses produced by two successive encoding patterns. Accordingly, the encoded bit string can be reconstructed through the conversion of the decimal value of 31 × γ₁ + γ₀ into binary bits.

**中文:** 为重建传输的比特串，星座图同样被划分为 31 个不同区域，每个区域被赋予 0 到 30 的唯一整数（补充材料第 18 节）。因此，通过测量两个连续编码图案产生的谐波场响应，即可得到 γ₁ 与 γ₀ 的值，再把十进制值 31 × γ₁ + γ₀ 转换为二进制比特，就能重建所编码的比特串。

**Original:** Data availability. The data that support the findings of this study are available from the corresponding authors upon reasonable request.

**中文:** 数据可用性：支撑本研究结论的数据可向通讯作者合理索取。

## 附录：补充材料（Supplementary Information）

### A.1 远场响应的卷积关系（Supplementary Note S1）

**Original:** Suppose that the single column of the meta-atoms is of the width d, and the center of the meta-atoms is located at the x = d/2. Thus, the electric field distribution on this single column of meta-atom array can be denoted as φd(x)exp(−jφ0), where φd(x) is non-zero at 0 ≤ x ≤ d and zero elsewhere, and φ0 represents the phase response of the meta-atom array. To simplify the notation, the electric field distribution on the mth column of meta-atom array is denoted as E1m−1(x).

**中文:** 设单列超原子的宽度为 d，其中心位于 x = d/2。于是这一列超原子阵列上的电场分布可记为 φd(x)·exp(−jφ0)，其中 φd(x) 在 0 ≤ x ≤ d 上非零、其余为零，φ0 表示该列超原子阵列的相位响应。为简化记号，第 m 列超原子阵列上的电场分布记为 E1m−1(x)。

**Original:** Notably, the term E10(x) = φd(x)exp(−jφ0) could be reformulated with the aid of Dirac pulse function as:

**中文:** 值得注意的是，E10(x) = φd(x)·exp(−jφ0) 可以借助狄拉克脉冲函数改写为：

<a id="E015"></a>

![补充公式 S1（原图）](assets/si/equations/eqS1.png)

**中文说明：** 补充式 (S1) 用 δ 函数把单列场分布写成积分形式 E1₀(x) = ∫φd(x₁)δ(x−x₁)×exp(−jφ₀)dx₁。引入 δ 函数看似多余，但它让后续所有列都能用同一套“移位 δ”的写法统一表达，从而自然导出卷积结构。

**Original:** Similarly, the electric field distribution on the mth column of meta-atom array can be formulated as

**中文:** 类似地，第 m 列超原子阵列的电场分布可写为

<a id="E016"></a>

![补充公式 S2（原图）](assets/si/equations/eqS2.png)

**中文说明：** 补充式 (S2) 与式 (S1) 的唯一区别是 δ 的宗量中多了 (m−1)d 的平移，即 E1ₘ₋₁(x) = ∫φd(x₁)δ(x−x₁−(m−1)d)×exp(−jφₘ)dx₁。这就是“空间移位”的数学表达。

**Original:** Thus, the resultant electric field distribution on the plane of the metasurface or metasurface antenna could be obtained by the summation of these terms as:

**中文:** 因此，超表面（或超表面天线）平面上的总电场分布可由这些项求和得到：

<a id="E017"></a>

![补充公式 S3（原图）](assets/si/equations/eqS3.png)

**中文说明：** 补充式 (S3) 把 p 列叠加为 E1(x) = E1₀(x) + E1₁(x) + … + E1ₚ₋₁(x)。由于每一项都是 φd 与“移位 δ”的乘积，求和后自然呈现出“口径函数与编码序列卷积”的结构。

**Original:** The second term in the square bracket is denoted as s(x1), which can be expressed as:

**中文:** 方括号中的第二项记为 s(x₁)，可表示为：

<a id="E018"></a>

![补充公式 S4（原图）](assets/si/equations/eqS4.png)

**中文说明：** 补充式 (S4) 定义 s(x₁) = Σ_{m=0}^{p−1} δ(x₁−md)×exp(−jφₘ)，即把 p 个移位脉冲按各自相位加权后叠加。这个 s(x₁) 就是主文中所说的“编码序列”在空间域中的表示。

**Original:** Accordingly, Eq. 3 can be reformulated as the convolution between φd(x) and s(x) that:

**中文:** 相应地，式 (S3) 可以改写为 φd(x) 与 s(x) 之间的卷积：

<a id="E019"></a>

![补充公式 S5（原图）](assets/si/equations/eqS5.png)

**中文说明：** 补充式 (S5) 是注记 S1 的结论：E1(x) = φd(x) ∗ s(x)。取傅里叶变换后立即可得 E2(kₓ) ∝ F[φd(x)] × F[s(x)]，即主文式 (7)、(8) 的物理来源——**远场方向图是“单列响应”与“编码序列频谱”的乘积**。

### A.2 谐波场响应的 C₂ₚ 对称性（Supplementary Note S2）

**Original:** The scattered electric far field at the direction of the first spatial harmonic can be expressed as the inner product between the modulation sequence and the uniform phase gradient that:

**中文:** 一次空间谐波方向上的散射电场远场可表示为调制序列与均匀相位梯度之间的内积：

<a id="E020"></a>

![补充公式 S6（原图）](assets/si/equations/eqS6.png)

**中文说明：** 补充式 (S6) 把一次谐波方向的远场展开为 E1(k1) ∝ Σ_{m=0}^{p−1} exp(−jφₘ)·exp(−j2πm/p)，即“第 m 列贡献 exp(−j2πm/p) 相位”。这是 C₂ₚ 对称性推导的起点。

**Original:** Eq. S6 suggests that the cyclic permutation (R) of the encoding sequence from [exp(−jφ0), exp(−jφ1), … exp(−jφp−1)] to [exp(−jφp−1), exp(−jφ0) … exp(−jφp−2)] produces the phase shift of exp(−j2π/p) to the far-field response at the 1st harmonic direction with fixed amplitude. Since there are p distinctive cyclic permutation operations [R0, R1, R2 … Rp−1], by which phase shift of [exp(−j0π/p), exp(−2jπ/p), exp(−4jπ/p) …, exp(−(p−1)j2π/p)] would be generated for the harmonic responses of arbitrary sequence. Thus, the generated far-field responses of all sequences must share the Cp symmetry in the complex plane at the 1st harmonic direction.

**中文:** 式 (S6) 表明，把编码序列从 [exp(−jφ₀), exp(−jφ₁), … exp(−jφₚ₋₁)] 循环置换（R）为 [exp(−jφₚ₋₁), exp(−jφ₀), … exp(−jφₚ₋₂)]，会使一次谐波方向的远场响应产生 exp(−j2π/p) 的相位偏移而幅度不变。由于共有 p 种不同的循环置换 [R₀, R₁, R₂, …, Rₚ₋₁]，对任意序列的谐波响应而言，它们会分别产生 [exp(−j0π/p), exp(−2jπ/p), exp(−4jπ/p), …, exp(−(p−1)j2π/p)] 的相位偏移。因此，所有序列在一次谐波方向产生的远场响应在复平面上必然具有 Cₚ 对称性。

**Original:** On the other hand, since the phase state of the meta-atoms are either '0' or 'π' for the 1-bit phase modulated programmable metasurface antenna, the flip of the signs of the phase states of arbitrary encoding sequence will induce phase shift of π to the far-field responses. Accordingly, the generated far-field responses of all sequences must share the C2 symmetry in the complex plane as well. Hence, the generated far-field responses must share both Cp and C2 symmetry in the complex plane at the 1st harmonic direction, by which the far-field responses must share Clcm(p,2) symmetry in the complex plane, where 'lcm' denotes the least common multiples. When p is an odd prime number, lcm(p, 2) is just 2p. Thus, it is demonstrated that the 1st harmonic field responses of the binary phase coded programmable metasurface antenna must share the C2p symmetry in the complex plane.

**中文:** 另一方面，由于 1 比特相位调制可编程超表面天线的超原子相位状态只取‘0’或‘π’，把任意编码序列的相位状态整体反号会使远场响应产生 π 的相位偏移。因此，所有序列产生的远场响应在复平面上必然也具有 C₂ 对称性。综上，一次谐波方向的远场响应必须同时具有 Cₚ 与 C₂ 对称性，因而必须具有 C_lcm(p,2) 对称性（lcm 表示最小公倍数）。当 p 为奇素数时，lcm(p, 2) = 2p。由此可证：二值相位编码可编程超表面天线的一次谐波场响应必然具有 C₂ₚ 对称性。

**Original:** The intensity of the array factor, represented by |Σ_{m=0}^{p−1} exp[−j(mkₓd)]·sm|², exhibits two types of degeneracy. Firstly, when the sign of the encoding sequence inverts, i.e., s → −s, the resulting intensity of the array factor remains unchanged. Secondly, the intensity of the array factor is unchanged when the sequence s = [s0, s1, … sp−2, sp−1] is reversed to s′ = [sp−1, sp−2, … s1, s0]. To illustrate this degeneracy, we formulate the array factor as:

**中文:** 阵列因子的强度 |Σ_{m=0}^{p−1} exp[−j(mkₓd)]·sₘ|² 存在两类简并。其一，当编码序列整体反号（s → −s）时，阵列因子强度不变；其二，当序列 s = [s₀, s₁, …, sₚ₋₂, sₚ₋₁] 反转为其反序 s′ = [sₚ₋₁, sₚ₋₂, …, s₁, s₀] 时，阵列因子强度也不变。为说明这种简并，我们把阵列因子写成：

<a id="E021"></a>

![补充公式 S7（原图）](assets/si/equations/eqS7.png)

**中文说明：** 补充式 (S7) 把阵列因子展开为逐项求和，用以说明序列与反序序列给出相同的阵列因子（强度）。这解释了一个重要结果：**p = 5 时 32 种编码序列只对应 10 个互不相同的阵列因子**，因此实际可区分的状态数为 2ᵖ − 1 = 31 而非 2ᵖ。

### A.3 长度为奇素数的递归 1 比特编码序列的证明（Supplementary Note S3）

**Original:** For an encoding sequence with length p, if a cyclic permutation of this sequence with number of steps that are not multiples of p cannot yield the original sequence, then the sequence is classified as non-recurrent. Conversely, if there exists such a cyclic permutation that can restore the sequence to its initial configuration with the number of steps that are not multiples of p, then the sequence is classified as recurrent. For instance, the sequence sa = [1,1,−1,1,1,−1] is recurrent for which the cyclic permutation of the sequence with 3 steps results in the original sequence that R3(sa) = sa. In contrast, the sequence sb = [1,1,1,1,1,−1] is nonrecurrent for which it cannot be restored to its original configuration unless the permutation step is the integer multiples of 6.

**中文:** 对长度为 p 的编码序列，若步数不是 p 的整数倍的循环置换都无法得到原序列，则该序列称为非递归序列；反之，若存在这样的循环置换、其步数不是 p 的整数倍却能把序列恢复为初始构型，则该序列称为递归序列。例如序列 sa = [1,1,−1,1,1,−1] 是递归的，因为它循环置换 3 步后即回到原序列，R₃(sa) = sa；而序列 sb = [1,1,1,1,1,−1] 是 非递归 的，除非置换步数为 6 的整数倍，否则无法恢复原构型。

**Original:** For an encoding sequence with the length of odd prime and consists of 1's and −1's. If the encoding sequence is not made of entirely 1's or −1's, then the sequence must be [non-recurrent]. The proof is as follows: if there exists such a recurrent sequence, then cyclic shift the sequence by steps less than p (e.g., 1, 2, 3, ..., p−1) would result in the original sequence. On the other hand, the allowable step number that can result in the same sequence must be a divisor of the length of the encoding sequence. Since p is restricted to an odd prime, the permissible number of steps for a cyclic shift to result in the same sequence must be 1, which implies that the recurrent encoding sequence must consist of identical elements. Therefore, in the case where the encoding sequences are made of 1's and −1's, the only allowable recurrent encoding sequences are those comprising either all 1's or all −1's.

**中文:** 对于长度为奇素数、由 1 与 −1 构成的编码序列：若它并非全部由 1 或全部由 −1 组成，则该序列一定是非递归的。证明如下：若存在这样的递归序列，则把它循环平移小于 p 的步数（如 1, 2, 3, …, p−1）都会得到原序列；另一方面，能使序列保持不变的允许步数必须是序列长度的约数。由于 p 限定为奇素数，能保持序列不变的最小循环平移步数只能是 1，这意味着递归编码序列必须由相同的元素构成。因此在由 1 与 −1 构成的编码序列中，唯一允许的递归序列就是全部为 1 或全部为 −1 的序列。

### A.4 递归编码序列的远场响应为零（Supplementary Note S4）

**Original:** It is demonstrated that the recurrent sequence must be composed of all 1's or all −1's. We suppose the recurrent sequence is made of all 1's, and the far-field response of the sequence can be expressed based on Eq. 5 that:

**中文:** 前已证明递归序列必须由全 1 或全 −1 构成。设该递归序列为全 1，则基于式 (5)，该序列的远场响应可表示为：

<a id="E022"></a>

![补充公式 S8（原图）](assets/si/equations/eqS8.png)

**中文说明：** 补充式 (S8) 计算全 1（递归）序列在一次谐波方向的远场：E1(k1) ∝ f(k1)·Σ_{m=0}^{p−1} exp(−j2πm/p)。由于当 p > 1 时该等比级数之和恒为 0（首项 1、公比 exp(−j2π/p) ≠ 1 且满足 exp(−j2π) = 1），远场响应严格为零。

**Original:** Thus, we demonstrated that the far-field responses of the metasurface antenna encoded with recurrent sequence must vanish at the 1st harmonic direction.

**中文:** 由此证明：以递归序列编码的超表面天线，其远场响应在一次谐波方向必然消失（为零）。

### A.5 用 Eisenstein 判别法证明多项式的不可约性（Supplementary Note S5）

**Original:** The polynomial x^{p−1} + x^{p−2} + ⋯ + 1 can be rewritten as:

**中文:** 多项式 x^(p−1) + x^(p−2) + ⋯ + 1 可以改写为：

<a id="E023"></a>

![补充公式 S9（原图）](assets/si/equations/eqS9.png)

**中文说明：** 补充式 (S9) 即 x^(p−1) + x^(p−2) + ⋯ + 1 = (x^p − 1)/(x − 1)。这是使用 Eisenstein 判别法的第一步准备。

**Original:** The substitution of x + 1 for x can be adopted, such that the above equation can be reformulated as:

**中文:** 可作代换 x → x + 1，从而把上式改写为：

<a id="E024"></a>

![补充公式 S10（原图）](assets/si/equations/eqS10.png)

**中文说明：** 补充式 (S10) 即 ((x+1)^p − 1)/x = x^(p−1) + C(p,1)x^(p−2) + … + C(p,p−1)。除首项外的系数都是二项式系数、可被 p 整除，而常数项等于 p、不被 p² 整除。这正是 Eisenstein 判别法要求的条件。

**Original:** Evidently, all of those non-leading coefficients are divisible by p by the properties of binomial coefficients. In addition, the constant coefficient is equal to p, and thus is not divisible by p². Consequently, the Eisenstein's criterion is fulfilled, indicating that the polynomial x^{p−1} + x^{p−2} + ⋯ + 1 is irreducible over the rational numbers as long as p is a prime number. In other words, the polynomial x^{p−1} + x^{p−2} + ⋯ + 1 cannot be factorized into the products of non-constant.

**中文:** 显然，由二项式系数的性质，这些非首项系数都能被 p 整除；此外常数项等于 p，故不被 p² 整除。因此满足 Eisenstein 判别法，说明只要 p 是素数，多项式 x^(p−1) + x^(p−2) + ⋯ + 1 在有理数域上不可约；换言之，该多项式无法分解为非平凡（非常数）多项式之积。

**Reading note:** 注记 S3–S5 合起来回答了“为什么必须取 p 为奇素数”：S5 说明 x^(p−1)+…+1 不可约 ⇒ 不存在非平凡的循环置换把序列映回自身（除全 1/全 −1）⇒ 除两条递归序列外其余序列都互不相同；S4 则说明那两条递归序列在一次谐波方向响应恰好为零。两者共同保证“2ᵖ 种图案 → 2ᵖ − 1 个互不重叠状态”的近似双射成立，这正是主文信息映射效率 η₁ = log₂(2ᵖ − 1)/p 的理论根基。

### A.6 1 比特相位调制的馈电结构表征（Supplementary Note S6）

**Original:** Positive (+2.5V) and negative (−2.5V) bias voltages can be applied to the two sides of the feeding line through two metallic rods to control the 'on' and 'off' states for the four Pin diodes, and thus provide phase modulation of 0° and 180° for the radiated wave. The performance of the 1-bit phase-modulation structure is stimulated and depicted in Fig. S1b-d. It can be noticed from Fig. S1b that the reflection of the feeding structure is below 0.2 for 'on' and 'off' states at the working frequency of 9.7GHz. Meanwhile, it can be observed that the transmission amplitudes are almost the same when different bias voltages (2.5V and −2.5V) are applied, and the phase difference between the two states is almost 180° at the working frequency of 9.7GHz, as shown in Fig. S1c-d.

**中文:** 通过两根金属棒把正（+2.5 V）与负（−2.5 V）偏置电压加到馈线两侧，即可控制四个 PIN 二极管的‘开/关’状态，从而为辐射波提供 0° 与 180° 的相位调制。该 1 比特相位调制结构的性能经仿真得到，如图 S1b–d 所示。由图 S1b 可见，在工作频率 9.7 GHz 处，馈电结构在‘开’与‘关’两种状态下的反射均低于 0.2；同时可以看到，在不同偏置电压（2.5 V 与 −2.5 V）下透射幅度几乎相同，而两状态间的相位差在工作频率 9.7 GHz 处接近 180°，如图 S1c–d 所示。

**Original:** One to eight power dividers are adopted to provide the amplitude and phase modulation for meta-atoms in each column, as shown in Fig. S2a. The simulated transmission amplitude and phase received at the eight ports and presented in Fig. S2b-c. It can be observed that the resulting amplitude and phases response are almost same for the eight meta-atoms in the same column.

**中文:** 每个列采用一分八功分器为各超原子提供幅度与相位调制，如图 S2a 所示。在八个端口处得到的仿真透射幅度与相位分别见图 S2b–c。可以看到，同一列中八个超原子得到的幅度与相位响应几乎相同。

#### 图 S1 1 比特相位调制结构的表征

![FS1](assets/si/figures/figS1.png)

**Original caption:** Fig. S1. Characterization of the 1-bit phase modulation structure. a, Top view of the 1-bit phase modulator. The bias voltage is connected to the left feeding line, and the right feeding line is connected to the ground located at the central layer. b, Reflection amplitude of the phase modulation structure when opposite bias voltages are applied. c-d, Transmission amplitude (c) and phase (d) of the phase modulation structure when opposite bias voltages are applied.

**中文图注:** 图 S1：1 比特相位调制结构的表征。a 1 比特相位调制器的俯视图；偏置电压接左侧馈线，右侧馈线连接到位于中间层的接地。b 施加相反偏置电压时相位调制结构的反射幅度。c、d 施加相反偏置电压时相位调制结构的透射幅度（c）与相位（d）。

**Reading note:** 读图时按“反射 → 透射幅度 → 透射相位”三步走：b 说明馈电结构在工作频段反射很低（< 0.2），因此能量基本被送入超原子而不被返回；c 说明两态的透射幅度几乎重合，即调制几乎不损失能量；d 是最关键的一幅——两态相位差在工作频率 9.7 GHz 处约为 180°，这正是 1 比特相位调制的物理前提。

#### 图 S2 每列一分八功分器的表征

![FS2](assets/si/figures/figS2.png)

**Original caption:** Fig. S2. Characterization of the one-to-eight power divider in each column. a, Top view of the one to eight power divider that feeds the eight meta-atoms in each column. b-c, Transmission amplitude (b) and phase (c) of the power divider at the eight ports.

**中文图注:** 图 S2：每列一分八功分器的表征。a 为每列八个超原子馈电的一分八功分器俯视图。b、c 功分器在八个端口处的透射幅度（b）与相位（c）。

**Reading note:** 这张图回答的是“同一列八个超原子能否被一致驱动”。b 与 c 中各端口曲线几乎重合，说明经过功分器后八个超原子获得几乎相同的幅度与相位激励；因此主文把“每列”当作一个整体编码单元来处理是合理的，这也是样机只用 5 路控制电压就能驱动 5 × 8 个辐射单元的原因。

### A.7 通过级联编码提升一次空间谐波的能量转换效率（Supplementary Note S7）

**Original:** When a cascaded encoding factor of r is introduced to the encoding sequence, the far-field response of the metasurface antenna is modified to E(k1) ∝ f(k1) × ∫ s_r(x)e^{−jk1x}dx at the direction of the 1st harmonic. The term s_r(x) represents the encoding sequence with cascaded encoding factor of r, meaning that the encoding sequence repeated r times in space. For instance, the sequence s = [1,1,−1,1,−1] will be extended to s2 = [1,1,−1,1,−1,1,1,−1,1,−1] when cascaded encoding with r = 2 is introduced.

**中文:** 当对编码序列引入级联编码因子 r 时，超表面天线在一次谐波方向的远场响应变为 E(k1) ∝ f(k1) × ∫s_r(x)e^(−jk1x)dx。其中 s_r(x) 表示级联编码因子为 r 的编码序列，即该编码序列在空间上重复 r 次。例如序列 s = [1,1,−1,1,−1] 在引入 r = 2 的级联编码后扩展为 s2 = [1,1,−1,1,−1,1,1,−1,1,−1]。

**Original:** Notably, the oscillating phase shift factor e^{−jk1x} and the sequence s_r(x) with cascaded encoding factor of r share the same periodicity of pd, such that the generated far-field response at the 1st harmonic can be reformulated as:

**中文:** 值得注意的是，振荡相位因子 e^(−jk1x) 与级联因子为 r 的序列 s_r(x) 具有相同的周期 pd，因此一次谐波方向的远场响应可改写为：

<a id="E025"></a>

![补充公式 S11（原图）](assets/si/equations/eqS11.png)

**中文说明：** 补充式 (S11) 把积分区间由 r·pd 缩小为 pd，代价是场幅多出一个因子 r：E(k1) ∝ f(k1) × ∫₀^{rpd} s_r(x)e^(−jk1x)dx = r × f(k1) × ∫₀^{pd} s(x)e^(−jk1x)dx。也就是说**场幅放大 r 倍、强度放大 r² 倍，而输入能量只随 r 线性增长**，因此一次谐波的归一化强度随 r 线性提升——这就是级联编码提升能量转换效率的数学根据。

**Original:** where f(k1) × ∫ s(x)e^{−jk1x}dx from 0 to pd is the harmonic field response generated by a sequence s(x) without cascaded encoding. Eq. S10 suggests that the intensity of the 1st harmonic mode (I(k1) ∝ E(k1)²) is proportional to the square of repetition factor (r²), whereas the input energy also grows linearly as r increases. That is to say, the normalized intensity at the 1st harmonic grows linearly as r increases. In fact, this conclusion can be extended to the directions of all the integer harmonics. In other words, the radiation energy will become more concentrated to the integer harmonics when cascaded encoding is introduced to the metasurface antenna.

**中文:** 其中 f(k1) × ∫₀^{pd} s(x)e^(−jk1x)dx 是不含级联编码的序列 s(x) 所产生的谐波场响应。该式表明：一次谐波模式的强度 I(k1) ∝ E(k1)² 正比于重复因子 r 的平方，而输入能量只随 r 线性增长；换言之，一次谐波的归一化强度随 r 线性提升。事实上该结论可推广到所有整数次谐波方向——也就是说，引入级联编码后辐射能量会更集中到整数次谐波上。

**Original:** To demonstrate the enhancement of the energy conversion efficiency of the 1st harmonic response, Fig. S3 plots the array factors of the metasurface antenna with respect to encoding schemes of different cascaded encoding factors, where the adopted sequences are s1 = [1,−1,1,−1,1] and s2 = [1,−1,1,1,−1,−1,1] respectively.

**中文:** 为展示一次谐波响应能量转换效率的提升，图 S3 给出了不同级联编码因子下超表面天线的阵列因子，所用序列分别为 s1 = [1,−1,1,−1,1] 与 s2 = [1,−1,1,1,−1,−1,1]。

#### 图 S3 不同级联编码下超表面天线的阵列因子

![FS3](assets/si/figures/figS3.png)

**Original caption:** Fig. S3. Array factor of the metasurface antenna with different cascaded encoding factors. a-b, Array factor of the metasurface antenna generated by the sequences with different length and cascaded encoding factors, where the width of the meta-atom is 0.5λ. The pink lines mark the 1st, 2nd and the 3rd harmonic directions. c-d, Array factor of the metasurface antenna generated by the sequences with different length and cascaded encoding factors, where the width of the meta-atom is 0.33λ (c) and 0.25λ (d) respectively.

**中文图注:** 图 S3：不同级联编码因子下超表面天线的阵列因子。a、b 超原子宽度为 0.5λ 时，不同序列长度与级联编码因子下超表面天线的阵列因子；粉色竖线标出一次、二次与三次谐波方向。c、d 超原子宽度分别为 0.33λ（c）与 0.25λ（d）时的阵列因子。

**Reading note:** 读图时抓住两点：其一，随着级联因子 r 增大，能量向离散的整数次谐波方向收拢，谐波之间的旁瓣被压低，这正是“级联提升能量转换效率”的直观证据；其二，c、d 对比 a、b 说明超原子宽度（即单元周期 d 与波长之比）决定了哪些谐波模式能够被辐射——当 d 取 0.33λ 或 0.25λ 时，|k₁| < k < |k₂| 得以满足，二次及以上谐波不再出现。这也提醒读者：级联带来的“效率提升”并非无条件，需要与单元尺寸设计配合。

### A.8 通过级联编码完全抑制所有半谐波方向的远场响应（Supplementary Note S8）

**Original:** For direction that corresponds to half harmonic (k_{n+1/2} = 2(n+0.5)π/pd), the far-field responses will be in proportional to the inner product between the discrete phase gradient and the encoding sequence. Specifically, when the cascaded encoding factor being a positive number, the discrete phase gradient at the direction of the half harmonic can be expressed as:

**中文:** 对于半谐波方向（k_{n+1/2} = 2(n+0.5)π/pd），远场响应正比于离散相位梯度与编码序列的内积。具体而言，当级联编码因子为正整数时，半谐波方向的离散相位梯度可表示为：

<a id="E026"></a>

![补充公式 S12（原图）](assets/si/equations/eqS12.png)

**中文说明：** 补充式 (S12) 给出半谐波方向的离散相位梯度 g(k_{n+1/2})。它是一个含 rp 个元素的序列，各元素为单位模复指数，其相位随列序号线性增长，并带有与 n + 1/2 相关的固定偏移。

**Original:** Notably, the discrete phase gradient can be further partitioned into r terms as g1(k_{n+1/2}), g2(k_{n+1/2}), …, gr(k_{n+1/2}), where gm(k_{n+1/2}) is expressed as:

**中文:** 值得注意的是，该离散相位梯度可以进一步拆分为 r 个分组 g1(k_{n+1/2}), g2(k_{n+1/2}), …, gr(k_{n+1/2})，其中 gm(k_{n+1/2}) 表示为：

<a id="E027"></a>

![补充公式 S13（原图）](assets/si/equations/eqS13.png)

**中文说明：** 补充式 (S13) 把相位梯度按 r 个分组写出。每个分组 gm 对应“级联序列中的第 m 次重复”，因此第 m 组在第 m 次重复的位置上相位额外增加 π/r 的偏移。

**Original:** It can be verified that these phase gradient terms obey the following relations that g_{n+1/2}³ = ⋯ = g_{n+1/2}^{r−1}, g_{n+1/2}² = g_{n+1/2}⁴ = ⋯ = g_{n+1/2}^{r} and g_{n+1/2}¹ are [alternating]. Since the cascaded encoding sequence repeats the original sequence r times in space, the resulting far-field response at the half harmonic can be expressed as:

**中文:** 可以验证这些相位梯度项满足如下关系：奇数号分组与偶数号分组分别彼此相等（g³ = ⋯ = g^{r−1}、g² = g⁴ = ⋯ = g^{r}），且 g¹ 与之呈交替关系。由于级联编码序列在空间上把原序列重复 r 次，半谐波方向的远场响应可表示为：

<a id="E028"></a>

![补充公式 S14（原图）](assets/si/equations/eqS14.png)

**中文说明：** 补充式 (S14) 给出半谐波方向的远场 F(k_{n+1/2}) ∝ f(k_{n+1/2}) × (⟨s, g1⟩ + ⟨s, g2⟩ + … + ⟨s, gr⟩)。由于奇数号与偶数号分组的贡献符号相反而成对出现，当 r 为偶数时它们两两抵消，因此**所有半谐波方向的远场响应被完全抑制**。

**Original:** where ⟨s, gm⟩ indicates the inner product between the sequence s without cascaded encoding and the phase gradient gm(k_{n+1/2}). Notably, Eq. S13 suggests that the terms of odd and even indexes will be cancelled out for the inner products if r is an even number. As a result, the far-field responses will be completely vanished at the directions of all half harmonics.

**中文:** 其中 ⟨s, gm⟩ 表示不含级联编码的序列 s 与相位梯度 gm(k_{n+1/2}) 的内积。值得注意的是，式 (S13) 表明当 r 为偶数时，奇数号与偶数号分组的贡献在内积中会相互抵消，其结果是所有半谐波方向的远场响应都被完全消除。

### A.9 不同长度编码序列的谐波场响应（Supplementary Note S9）

**Original:** We have shown that the encoding sequence with prime length plays an important role in producing unique far-field responses at the direction of the 1st harmonic. Once the length of the encoding sequence is a prime number, all of the non-constant sequences exhibit distinctive far-field responses with symmetrical distribution in the complex plane at the 1st harmonic direction. However, if the length of the sequence is not prime, the uniqueness of the far-field responses at the 1st harmonic will not hold in general. For instance, it can be verified that the far-field responses generated by the two encoding sequences of '1, −1, 1, −1' and '−1, 1, −1, 1' are the same.

**中文:** 我们已说明，长度为素数的编码序列对于在一次谐波方向产生互不相同的远场响应至关重要。一旦编码序列长度为素数，所有非常数序列都会在一次谐波方向呈现互不相同、且在复平面上对称分布的远场响应。然而若序列长度不是素数，一次谐波方向远场响应的唯一性一般不再成立——例如可以验证，编码序列‘1,−1,1,−1’与‘−1,1,−1,1’产生的远场响应完全相同。

**Original:** For illustration, we plot the constellation diagrams generated by encoding sequences of the length from 3 to 8, as shown in Fig. S4-5. At the normal direction, the number of unique far-field states are always p + 1, for p columns of 1-bit encoding sequence, as shown in Fig. S4. At the direction of the 1st harmonic, the number of the unique states will be extended for both encoding sequences with prime and composite lengths. However, the information mapping efficiency for the encoding sequence with length of the composite number is relatively small as that of prime number, as shown in Fig. S5. For instance, 31 unique states can be generated when the length of encoding sequences is 5, whereas only 19 unique states will be generated when the length of encoding sequences increases to 6.

**中文:** 为便于说明，我们绘制了长度为 3 至 8 的编码序列所产生的星座图，见图 S4、S5。在法向方向，对于含 p 列的 1 比特编码序列，不同远场状态数始终为 p + 1，如图 S4 所示。而在一次谐波方向，无论长度为素数还是合数，不同状态数都会增加；但与素数长度相比，合数长度编码序列的信息映射效率明显偏低，如图 S5 所示。例如当编码序列长度为 5 时可产生 31 个不同状态，而当长度增至 6 时只能产生 19 个不同状态。

#### 图 S4 法向方向的远场响应

![FS4](assets/si/figures/figS4.png)

**Original caption:** Fig. S4. Far-field responses of the metasurface antenna at the normal direction. a-c, Far-field responses generated by all possible encoding sequences with the length of composite number of 4 (a), 6 (b), and 8 (c), respectively. d-f, Far-field responses generated by encoding sequences with the length of prime number of 3 (d), 5 (e), and 7 (f), respectively.

**中文图注:** 图 S4：法向方向的远场响应。a–c 长度分别为合数 4（a）、6（b）、8（c）的全部可能编码序列产生的远场响应。d–f 长度分别为素数 3（d）、5（e）、7（f）的编码序列产生的远场响应。

**Reading note:** 这张图是“对照组”：在法向方向，无论长度是素数还是合数，可分辨状态数都只有 p + 1 个，远小于 2ᵖ − 1。这说明**法向方向无法承载信息映射**——主文之所以强调“空间谐波检索”，正是因为只有把检索方向选在一次谐波（或半谐波）方向，状态数才会被拉到最大。

#### 图 S5 一次谐波方向的远场响应

![FS5](assets/si/figures/figS5.png)

**Original caption:** Fig. S5. Far-field responses of the metasurface antenna at the 1st harmonic direction. a-c, Far-field responses generated by all possible encoding sequences with the length of composite number of 4 (a), 6 (b), and 8 (c), respectively. d-f, Far-field responses generated by encoding sequences with the length of prime number of 3 (d), 5 (e), and 7 (f), respectively.

**中文图注:** 图 S5：一次谐波方向的远场响应。a–c 长度分别为合数 4（a）、6（b）、8（c）的全部可能编码序列产生的远场响应。d–f 长度分别为素数 3（d）、5（e）、7（f）的编码序列产生的远场响应。

**Reading note:** 与图 S4 对照阅读即可看出素数长度的价值：在 d–f（p = 3、5、7）中，全部 2ᵖ 种图案几乎一一对应到 2ᵖ − 1 个互不重叠的状态点，排布呈 C₂ₚ 对称；而在 a–c（p = 4、6、8）中，状态点明显重合（p = 6 时只剩 19 个不同状态）。这直接解释了主文为何要求 p 为奇素数。

### A.10 非谐波方向的远场响应（Supplementary Note S10）

**Original:** The far-field responses of the metasurface antenna at the non-harmonic directions exhibit no rotational symmetry unless the retrieving direction is aligned with the half harmonic (kx = 0.5k1), as shown in Fig. S6. In addition, the far-field responses at these non-harmonic directions (other than the half harmonic) are less robust against disorders, for which the states are more likely to overlap when noise is introduced. For instance, when noise of δ = 0.14 is introduced, all of non-harmonic states (other than the half harmonic) exhibit states overlapping in the constellation diagrams, as shown in Fig. S6.

**中文:** 超表面天线在非谐波方向的远场响应不具有旋转对称性，除非检索方向与半谐波方向（kx = 0.5k1）对齐，如图 S6 所示。此外，这些非谐波方向（半谐波除外）的远场响应对抗扰动的鲁棒性较差，一旦引入噪声，状态更容易重叠。例如当引入 δ = 0.14 的噪声时，除半谐波外所有非谐波状态在星座图中都出现重叠，如图 S6 所示。

**Original:** Figs. S7a-i illustrate the non-overlapping far-field states at different directions (kx = 0.2k1, 0.7k1 and k1). Different levels of noises (δ) are introduced, which are represented as the radii of the red circles in the constellation diagram. We note that the far-field responses exhibit no rotational symmetry at the non-harmonic directions, whereas the C2p symmetry is [retained at the 1st harmonic]. The number of non-overlapping far-field states varies as the noise level increases. Compared to the non-harmonic directions, the far-field responses at the 1st harmonic direction exhibit more robustness against the disorders. In particular, the robustness of the far-field responses at the 1st harmonic will be further enhanced when cascaded encoding is introduced.

**中文:** 图 S7a–i 展示了不同方向（kx = 0.2k1、0.7k1 与 k1）上互不重叠的远场状态。图中引入了不同水平的噪声 δ，其大小以星座图中红圈的半径表示。可以看到，非谐波方向的远场响应不具备旋转对称性，而一次谐波方向则保留 C₂ₚ 对称性。互不重叠的远场状态数随噪声增大而变化：与各非谐波方向相比，一次谐波方向的远场响应对扰动更为鲁棒；特别地，引入级联编码后，一次谐波方向远场响应的鲁棒性会进一步增强。

**Original:** For instance, Figs. S7g-i plot the non-overlapping far-field states at different retrieving angles when the cascaded encoding factor of 2 is introduced. It is noticed that the number of non-overlapping states remains invariant at the 1st harmonic even when the noise level increases, whereas the number of non-overlapping states at the non-harmonic directions drops significantly. In addition, it can be observed from Figure S7k that the far-field responses at the 1st harmonic exhibit much more robustness than the non-harmonic angles when the cascaded encoding is adopted.

**中文:** 例如，图 S7g–i 给出引入级联编码因子 2 时不同检索角度下互不重叠的远场状态。可以看到：即使噪声水平提高，一次谐波方向的不重叠状态数仍保持不变；而各非谐波方向的不重叠状态数则显著下降。此外，由图 S7k 可见，采用级联编码后，一次谐波方向的远场响应比非谐波方向鲁棒得多。

#### 图 S6 非谐波方向的远场响应

![FS6](assets/si/figures/figS6.png)

**Original caption:** Fig. S6. Far-field responses at the non-harmonic directions. a-i, Far-field responses generated by all 1-bit encoding sequences with the length p = 5, where the retrieving direction spans from kx = 0.1k1 to 0.9k1.

**中文图注:** 图 S6：非谐波方向的远场响应。a–i 长度为 p = 5 的全部 1 比特编码序列产生的远场响应，检索方向从 kx = 0.1k1 变化到 0.9k1。

**Reading note:** 这张图是一张“角度扫描图”：九个面板对应九种检索方向，只有半谐波（kx = 0.5k1）与整数次谐波方向呈现出规整、不重叠的状态分布，其余方向的状态点彼此交叠。读图时应把它当作“为什么必须精确对准半谐波/一次谐波方向”的反面证据。

#### 图 S7 噪声存在时的远场响应

![FS7](assets/si/figures/figS7.png)

**Original caption:** Fig. S7. Far-field responses of the programmable metasurface antenna in the presence of noise. a-c, In the presence of noise of δ = 0.12, the far-field responses obtained at the directions of kx = 0.2k1, 0.7k1 and k1 respectively, where the overlapping states are omitted. d-f, In the presence of noise of δ = 0.24, the far-field responses obtained at the directions of kx = 0.2k1, 0.7k1 and k1 respectively. g-i, In the presence of noise of δ = 0.48, the far-field responses obtained at the directions of kx = 0.2k1, 0.7k1 and k1 respectively, where the cascaded encoding factor of 2 is introduced for the encoding sequences. j, Number of non-overlapping states at different retrieval directions with the increase of noise. k, Number of non-overlapping states at different retrieval directions with the increase of noise, where the cascaded encoding factor of 2 is introduced for the encoding sequences.

**中文图注:** 图 S7：存在噪声时可编程超表面天线的远场响应。a–c 噪声 δ = 0.12 时，在 kx = 0.2k1、0.7k1 与 k1 方向上得到的远场响应（重叠状态已略去）。d–f 噪声 δ = 0.24 时，同样三个方向上的远场响应。g–i 噪声 δ = 0.48 时、对编码序列引入级联编码因子 2 后同样三个方向上的远场响应。j 随噪声增大，不同检索方向上互不重叠状态数的变化。k 引入级联编码因子 2 后，同样互不重叠状态数的变化。

**Reading note:** 这张图把“噪声鲁棒性”量化了。横轴是噪声水平、纵轴是可分辨状态数：j 中一次谐波（k1）曲线始终高于各非谐波方向；k 中引入级联编码后，一次谐波的曲线几乎不随噪声下降，而非谐波方向迅速塌陷。结论很清楚——**级联编码在提升能量效率之外，还额外买到了一次谐波方向的抗噪裕度**。

### A.11 偏离角度下的模拟远场响应（Supplementary Note S11）

**Original:** The far-field responses of the meta-array, encompassing all 25 possible coding sequences, are simulated by the CST Microwave Studio. In particular, the constellation diagrams corresponding to the far-field responses at the normal (θ = 0°), half harmonic (θ = 11.6°) and the 1st harmonic directions (θ = 24.4°) are provided in Fig. S8a-c. It can be observed from Fig. S8a that the far-field responses exhibit great degeneracy at the normal direction, showing only 6 unique states in the complex plane. In sharp contrast, the far-field responses at the half-harmonic and the 1st harmonic directions exhibit 31 non-overlapping states symmetrically distributed in the complex plane, validating the proposed information mapping at the harmonic and the half-harmonic directions.

**中文:** 我们使用 CST Microwave Studio 对包含全部可能编码序列的元阵列远场响应进行了仿真。其中，法向（θ = 0°）、半谐波（θ = 11.6°）与一次谐波（θ = 24.4°）方向远场响应对应的星座图见图 S8a–c。由图 S8a 可见，法向方向的远场响应高度简并，在复平面上只有 6 个互不相同的状态；与之形成鲜明对照的是，半谐波与一次谐波方向的远场响应呈现出 31 个互不重叠、在复平面上对称分布的状态，从而验证了本文在谐波与半谐波方向上的信息映射方案。

**Original:** Due to the angle dependency of the phase gradient term e^{ikx}, the far-field responses of the programmable metasurface antenna exhibit high angle sensitivity at the 1st harmonic direction. As an illustrative example, Fig. S8d-f display the simulated far-field responses of the metasurface antenna at the directions that deviate from the first harmonic by ∆θ of −2°, −4° and 4°, respectively. Substantial distortions of both amplitude and phase responses are observed, which serve as great impedance for the retrieval of modulated information at the deviated angles.

**中文:** 由于相位梯度项 e^(ikx) 的角度依赖性，可编程超表面天线在一次谐波方向的远场响应具有很强的角度敏感性。作为示例，图 S8d–f 给出天线在偏离一次谐波 ∆θ 分别为 −2°、−4° 与 4° 的方向上的仿真远场响应。可以观察到幅度与相位响应都出现了明显畸变，这对在偏离角度上检索调制信息构成了很大障碍。

#### 图 S8 不同检索角度下的模拟远场响应

![FS8](assets/si/figures/figS8.png)

**Original caption:** Fig. S8. Simulated far-field responses at different retrieving angles. a-c, The constellation diagrams that display the simulated far-field responses of the metasurface antenna for all 32 encoding sequences, with the radiation angles oriented towards the normal, half-harmonic, and 1st harmonic directions, respectively. d-f, The constellation diagrams that display the simulated far-field responses of the metasurface antenna at the angles deviated from the 1st harmonic direction with −2°, −4°, and 4°, respectively.

**中文图注:** 图 S8：不同检索角度下的模拟远场响应。a–c 分别以法向、半谐波与一次谐波方向为辐射角时，超表面天线对全部 32 种编码序列的模拟远场响应星座图。d–f 偏离一次谐波方向 −2°、−4° 与 4° 时超表面天线的模拟远场响应星座图。

**Reading note:** 六个面板构成了“角度敏感性”的完整叙事：a 的 6 个状态点说明法向不可用；b 与 c 各有 31 个清晰的对称状态点；而 d–f 只要偏离几度，状态点就沿切向被拉长、重叠。这为主文“系统对角度敏感、仅适合小角度变化场景”的结论提供了直接的仿真证据。

### A.12 偏离一次谐波角度时的简并解除（Supplementary Note S12）

**Original:** The phase gradient term introduces angular dependency to the far-field responses, and thus the amplitude degeneracy at the 1st harmonic will be lifted when the retrieving angle is deviated. For illustration, Fig. S9a-d shows the simulated far-field radiation patterns generated by encoding sequences with the same amplitude responses at the 1st harmonic (θ = 24.4°), where dashed red line marks the retrieving direction. Evidently, the far-field responses are almost the same (degenerated) at the angle that align with the 1st harmonic (Fig. S9a). In contrast, the collected far-field amplitudes exhibit different responses when the retrieving angle is deviated from the 1st harmonic, as shown in Fig. S9b-d.

**中文:** 相位梯度项使远场响应具有角度依赖性，因此当检索角度偏离时，一次谐波处的幅度简并会被解除。作为示例，图 S9a–d 给出在一次谐波（θ = 24.4°）处幅度响应相同的若干编码序列所产生的仿真远场辐射方向图，红色虚线标出检索方向。显然，当检索角与一次谐波对齐时，各序列的远场响应几乎相同（即简并），见图 S9a；相反，当检索角偏离一次谐波时，各序列的远场幅度呈现出互不相同的响应，如图 S9b–d 所示。

#### 图 S9 偏离一次谐波角度时的远场幅度响应

![FS9](assets/si/figures/figS9.png)

**Original caption:** Fig. S9. Far-field amplitude responses at angles deviated from the 1st harmonic. a, Simulated far-field radiation patterns. The dashed red line marks the angle of the 1st harmonic. b-d, Simulated far-field radiation patterns. The dashed red line marks the angle deviated from the 1st harmonic by ∆θ = −2° (b), ∆θ = −4° (c), and ∆θ = 4° (d), respectively.

**中文图注:** 图 S9：偏离一次谐波角度时的远场幅度响应。a 仿真远场辐射方向图，红色虚线标出一次谐波角度。b–d 仿真远场辐射方向图，红色虚线分别标出偏离一次谐波 ∆θ = −2°（b）、∆θ = −4°（c）与 ∆θ = 4°（d）的角度。

**Reading note:** 这张图说明的是一个“双刃剑”效应：简并解除意味着**偏离角度后原本重合的幅度态变得可区分**，理论上可以借此扩大可分辨状态数；但同一效应也会让本该重合的星座点变形、破坏既定的分区表。因此主文才强调“把接收端对准一次谐波附近的窄角范围”，否则星座图会被扭曲。

### A.13 偏离角度下远场响应的实验结果（Supplementary Note S13）

**Original:** Fig. 4d-f demonstrates that the far-field responses of encoding sequences within the same set exhibit nearly identical amplitudes at the 1st harmonic direction, as indicated by the red dashed lines. However, such amplitude degeneracy will be lifted at angles away from the 1st harmonic, leading to the transition from single to multiple amplitude states. The amplitude degeneracy lifting along with the phase distortions leads to the deformation of constellation diagram when deviated far from the 1st harmonic. Specifically, the measured constellation diagrams obtained at directions away from the 1st harmonic are presented in Fig. S10, with deviations angles of ±2° and ±4°, respectively. The observed far-field distortions in the constellation diagrams exhibit great agreement with the simulation results, thereby confirming the high angular sensitivity inherent in the proposed communication scheme.

**中文:** 图 4d–f 表明，同一集合内编码序列的远场响应在一次谐波方向上的幅度几乎相同（由红色虚线标出）；然而一旦偏离一次谐波方向，这种幅度简并就会被解除，从而由单一幅度态过渡为多个幅度态。幅度简并解除与相位畸变共同作用，导致偏离一次谐波较远时星座图发生变形。具体而言，在偏离一次谐波方向上测得星座图见图 S10，偏离角分别为 ±2° 与 ±4°。星座图中观察到的远场畸变与仿真结果高度一致，从而确认了所提通信方案固有的高角度敏感性。

**Original:** Indeed, attaining the upper limit on information mapping efficiency entails a trade-off in the communication angular coverage, necessitating the stabilization of the relative angle between the receiver and transmitter. Hence, it is suggested to align the receiver within a narrow angular proximity around the 1st harmonic, otherwise the constellation diagram might be distorted, which will potentially compromise the communication quality.

**中文:** 事实上，要达到信息映射效率的上限，就必须在通信角度覆盖范围上作出取舍，并要求收发两端相对角度保持稳定。因此建议把接收端对准一次谐波附近的狭窄角度范围，否则星座图可能发生畸变，进而损害通信质量。

#### 图 S10 偏离角度处星座图的实验结果

![FS10](assets/si/figures/figS10.png)

**Original caption:** Fig. S10. Experimental results of constellation diagrams at the deviated angles. a-d, The constellation diagrams that display the simulated far-field responses of the metasurface antenna at the angles deviated from the 1st harmonic direction with −2°, −4°, 2° and 4°, respectively.

**中文图注:** 图 S10：偏离角度处星座图的实验结果。a–d 分别给出偏离一次谐波方向 −2°、−4°、2° 与 4° 时超表面天线的远场响应星座图。

**Reading note:** 与图 S8d–f、图 S9 一起看：这是仿真预测在实验中的复现。a–d 中状态点沿切向被拉伸、边界模糊，与仿真给出的畸变形态一致，说明角度敏感性并非仿真假象。工程含义是——若要把该方案用于实际通信，必须配备精确对准（或角度反馈校正）机制。

### A.14 谐波信息映射的频率扫描（Supplementary Note S14）

**Original:** After achieving the phase difference of 180 degree for the two states of the meta-atoms in a certain frequency range, it becomes feasible to realize frequency scanning for the purpose of mapping harmonic information. For instance, the far-field radiation patterns at different frequencies are simulated and illustrated in Fig. S11. The adopted encoding sequences belong to the set S3, where the phase modulation for each radiation pattern is denoted in this plot. It can be clearly observed that the direction of the 1st harmonic scans from 24.4° to 23.5° when the frequency changes from 9.7GHz to 10GHz. In addition, the constellation diagrams retrieved from the 9.7GHz and 10GHz are presented as shown in Fig. S12, where the retrieved angle spans from 24.4° to 23.5°. It is evident that the far-field responses are in great agreement with the theoretical predictions, indicating the feasibility for angle-scanning in data transmissions.

**中文:** 只要在某一频率范围内使超原子两种状态间的相位差达到 180°，就可以通过频率扫描来实现谐波信息的映射。例如图 S11 给出不同频率下的仿真远场辐射方向图，所用编码序列属于集合 S₃，图中标注了各辐射方向图对应的相位调制。可以清楚看到，当频率由 9.7 GHz 变化到 10 GHz 时，一次谐波方向从 24.4° 扫描到 23.5°。此外，从 9.7 GHz 与 10 GHz 检索得到的星座图见图 S12，其检索角度覆盖 24.4° 至 23.5°。显然远场响应与理论预测高度一致，说明在数据传输中实现角度扫描是可行的。

#### 图 S11 不同频率下的远场辐射方向图

![FS11](assets/si/figures/figS11.png)

**Original caption:** Fig. S11. Far-field radiation patterns with varying frequency. a, Simulated far-field radiation patterns at the frequency of f = 9.7GHz, where the angle of the 1st harmonic is θ = 24.4°. b, Simulated far-field radiation patterns at the frequency of f = 9.8GHz, where the angle of the 1st harmonic is θ = 24.1°. c, Simulated far-field radiation patterns at the frequency of f = 9.9GHz, where the angle of the 1st harmonic is θ = 23.8°. d, Simulated far-field radiation patterns at the frequency of f = 10GHz, where the angle of the 1st harmonic is θ = 23.5°.

**中文图注:** 图 S11：随频率变化的远场辐射方向图。a 频率 f = 9.7 GHz 时的仿真远场辐射方向图，一次谐波角度为 θ = 24.4°。b 频率 f = 9.8 GHz 时，θ = 24.1°。c 频率 f = 9.9 GHz 时，θ = 23.8°。d 频率 f = 10 GHz 时，θ = 23.5°。

**Reading note:** 这幅图给出的是“用频率换角度”的可行性证据：由于一次谐波方向 θ = sin⁻¹(λc/pd) 与波长成正比，改变工作频率即可平移波束指向，10% 的相对带宽对应约 1° 的扫描范围。注意扫描幅度很小（24.4° → 23.5°），因此频率扫描只能做细调；若要大范围改变通信方向，需要借助补充注记 S21 的附加相位梯度方案。

#### 图 S12 谐波信息映射的频率扫描

![FS12](assets/si/figures/figS12.png)

**Original caption:** Fig. S12. Frequency scanning for the harmonic information mapping. a, Constellation diagrams retrieved at frequency of f = 9.7GHz, where the retrieving angle is θ = 24.4°. b, Constellation diagrams retrieved at frequency of f = 9.8GHz, where the retrieving angle is θ = 24.1°. c, Constellation diagrams retrieved at frequency of f = 9.9GHz, where the retrieving angle is θ = 23.8°. d, Constellation diagrams retrieved at frequency of f = 10GHz, where the retrieving angle is θ = 23.5°.

**中文图注:** 图 S12：用于谐波信息映射的频率扫描。a 频率 f = 9.7 GHz、检索角 θ = 24.4° 时检索得到的星座图。b f = 9.8 GHz、θ = 24.1°。c f = 9.9 GHz、θ = 23.8°。d f = 10 GHz、θ = 23.5°。

**Reading note:** 与图 S11 配对：S11 说明波束指向随频率移动，S12 则确认“在移动后的新角度上重新对准接收端，星座图依然保持 31 个可分辨状态”。也就是说，频率扫描改变的是通信链路的方向，而不会破坏信息映射本身的可解码性。

### A.15 半谐波与一次谐波方向零幅度远场响应的实验结果（Supplementary Note S15）

**Original:** The two programmable patterns of with the encoding sequences of '1,1,1,1,1' and '−1,−1,−1,−1,−1' will produce far-field responses with zero amplitude at the direction of the 1st harmonic. The simulated far-field responses generated by the two encoding sequences are shown in Fig. S13a. It can be clearly observed that the far-field responses are almost zero at the 1st harmonic. Similarly, the two programmable patterns of with the encoding sequences of '−1,1,−1,1,−1' and '1,−1,1,−1,1' will produce far-field responses with zero amplitude at the direction of the half harmonic, as shown in Fig. S13b.

**中文:** 编码序列为‘1,1,1,1,1’与‘−1,−1,−1,−1,−1’的两个可编程图案，会在一次谐波方向产生幅度为零的远场响应；这两个编码序列产生的仿真远场响应见图 S13a，可以清楚看到一次谐波处的远场响应几乎为零。类似地，编码序列为‘−1,1,−1,1,−1’与‘1,−1,1,−1,1’的两个可编程图案，会在半谐波方向产生幅度为零的远场响应，如图 S13b 所示。

#### 图 S13 半谐波与一次谐波方向零幅度远场响应的实验结果

![FS13](assets/si/figures/figS13.png)

**Original caption:** Fig. S13. Experimental results of the programmable metasurface antenna enabled information mapping with zero far-field responses at the half and the 1st harmonics. a, Measured radiation patterns produced by the encoding sequences belonging to the set γ5⁻¹{S0}, where the resultant far-field responses vanish at the positive half and negative half harmonic directions. b, Measured radiation patterns produced by the encoding sequences belonging to the set {S0}, where the resultant far-field responses vanish at the −1st and the 1st harmonic directions.

**中文图注:** 图 S13：可编程超表面天线在半谐波与一次谐波方向实现零幅度远场响应的信息映射实验结果。a 属于集合 γ5⁻¹{S₀} 的编码序列所产生的实测辐射方向图，其远场响应在正、负半谐波方向消失。b 属于集合 {S₀} 的编码序列所产生的实测辐射方向图，其远场响应在 −1 次与 +1 次谐波方向消失。

**Reading note:** 这张图是补充注记 S4（递归序列响应为零）的实验落地：a 中全 1/全 −1 两条序列在一次谐波方向“打洞”，b 中两条交替序列在半谐波方向“打洞”。工程意义是——这两条特殊图案不能用于编码信息，必须从 2ᵖ 种图案中剔除，这正是信息映射效率写成 log₂(2ᵖ − 1)/p（而非 log₂(2ᵖ)/p）的原因。

### A.16 法向、半谐波与一次谐波方向远场响应的实验结果（Supplementary Note S16）

**Original:** The far-field amplitude and phase response of the 32 encoding patterns of the programmable metasurface antenna is measured. The collected far-field responses at the directions of normal, half harmonic and the 1st harmonic are presented in Fig. S14. The collected states at the normal direction exhibit great overlaps, with only 6 states can be identified. In comparison, 31 states can be uniquely identified at the directions of the half and the 1st harmonics.

**中文:** 我们测量了可编程超表面天线 32 种编码图案的远场幅度与相位响应。在法向、半谐波与一次谐波方向收集到的远场响应见图 S14。法向方向收集到的状态高度重叠，只能辨认出 6 个状态；相比之下，在半谐波与一次谐波方向都能唯一辨认出 31 个状态。

#### 图 S14 不同方向检索得到的实测远场响应

![FS14](assets/si/figures/figS14.png)

**Original caption:** Fig. S14. Experimental retrieved far-field responses at different directions. a-c, Far-field responses generated by the 32 possible encoding sequences, measured at the normal (a), half harmonic (b) and the 1st harmonic (c) directions, respectively.

**中文图注:** 图 S14：不同方向检索得到的实测远场响应。a–c 32 种可能编码序列分别在法向（a）、半谐波（b）与一次谐波（c）方向测得的远场响应。

**Reading note:** 这张图是主文图 4 的实测版“三点对照”：法向只有 6 个可辨状态（a），半谐波与一次谐波各有 31 个（b、c）。把它与补充图 S8（仿真）并排看，即可确认“31 个可分辨状态”这一核心指标在实验上成立，且半谐波方向同样可用——这为可选的双方向通信留出了空间。

### A.17 负谐波方向远场响应的实验结果（Supplementary Note S17）

**Original:** Figs. S15a-b depict the theoretically computed constellation diagrams generated at the 1st and the −1st harmonics. In the two plots, each point is labeled with an integer number to represent the corresponding binary coding sequence. For instance, an encoding sequence with phase modulation of 0, π, π, 0, 0 is first converted to the binary sequence 01100, which is then represented as the integer 12 through binary-to-decimal conversion. It can be clearly observed that the distribution of the constellation diagram produced at the −1st harmonic exhibit conjugation symmetry with those produced at the 1st harmonic. Therefore, it is also possible to adopt the −1st harmonic to realize the information mapping and wireless communication. It should be noted that the decoding scheme for the −1st harmonic must differ from that used for the 1st harmonic, as the point distribution in the constellation diagram at the −1st harmonic is conjugate to that at the 1st harmonic.

**中文:** 图 S15a–b 给出在 +1 次与 −1 次谐波处计算得到的星座图。两图中每个点都用整数标注，以表示对应的二进制编码序列。例如，相位调制为 0, π, π, 0, 0 的编码序列先转为二进制序列 01100，再通过二进制-十进制转换表示为整数 12。可以清楚看到，−1 次谐波处星座图的分布与 +1 次谐波处呈共轭对称。因此，同样可以用 −1 次谐波实现信息映射与无线通信。但需注意，−1 次谐波的解码方案必须与 +1 次谐波不同，因为其星座图点位分布与 +1 次谐波共轭。

**Original:** The simulated and measured far-field responses at the negative half and 1st harmonics are presented, as shown in Fig. S15c-f. The obtained constellation diagrams exhibit great agreement with the theoretical predictions, validating the effectiveness of our model.

**中文:** 负半谐波与负一次谐波方向的仿真与实测远场响应见图 S15c–f。所得星座图与理论预测高度一致，验证了模型的有效性。

#### 图 S15 负角度处星座图的实验结果

![FS15](assets/si/figures/figS15.png)

**Original caption:** Fig. S15. Experimental results of the constellation diagrams of the programmable metasurface antenna at negative angles. a-b, Calculated array factors produced by 31 encoding sequences at the 1st and −1st harmonics, with the corresponding encoding sequences represented by integers from 0 to 30. c-d, Simulated constellation diagram generated by the 32 possible encoding sequences, retrieved at the directions of the negative half (kx = −0.5k1) and 1st harmonics (kx = −k1). e-f, Measured constellation diagram generated by the 32 possible encoding sequences, retrieved at the directions of the negative half (kx = −0.5k1) and 1st harmonics (kx = −k1).

**中文图注:** 图 S15：负角度处可编程超表面天线星座图的实验结果。a、b 31 条编码序列在 +1 次与 −1 次谐波处计算得到的阵列因子，对应编码序列用 0 至 30 的整数表示。c、d 32 种可能编码序列在负半谐波（kx = −0.5k1）与负一次谐波（kx = −k1）方向检索得到的仿真星座图。e、f 同样两个方向上的实测星座图。

**Reading note:** 这张图的意义在于“多出一个可用的信道”：−1 次谐波方向的星座图与 +1 次谐波共轭，因此理论上可以把负一次谐波当作第二个（共轭）通信方向，从而在不增加硬件的前提下扩展可用角度资源。代价是解码表必须为负方向单独设计——不能直接套用正方向的区域划分。

### A.18 用于比特串检索的星座图划分与标注（Supplementary Note S18）

**Original:** For the extraction of bit string from experimental measurement of the harmonic field responses, the constellation diagram should be partitioned and labeled corresponding to each input encoding sequence. Specifically, Fig. S16 illustrates one of the partition and labeling of both theoretically and experimentally retrieved constellation diagrams. The integer in each region of the constellation diagram corresponds to the encoding sequence labelled with the same integer in Table. S1. Notably, the experimental constellation diagram shown in Fig. S16b is obtained by averaging the experimentally retrieved far-field responses of each encoding pattern that presented in Fig. 4l. [Section S19 follows.]

**中文:** 为从谐波场响应的实验测量中提取比特串，需要按照每一个输入编码序列对星座图进行划分与标注。具体而言，图 S16 给出了理论检索与实验检索星座图的一种划分与标注方式。星座图每个区域内的整数，对应于表 S1 中标注同一整数的编码序列。值得注意的是，图 S16b 中的实验星座图是对图 4l 中各编码图案的实验远场响应取平均后得到的。

#### 图 S16 星座图的划分与标注

![FS16](assets/si/figures/figS16.png)

**Original caption:** Fig. S16. Partition and label of the points in analytically and experimentally retrieved constellation diagrams at the 1st harmonic. a-b, Partition of the analytically (a) and experimentally (b) retrieved constellation diagrams, where each constellation diagram is partitioned into 31 regions. c-d, Label of the analytically (c) and experimentally (d) retrieved constellation diagrams, where each region of the constellation diagram is labeled by a unique integer ranging from 0 to 30.

**中文图注:** 图 S16：一次谐波处解析检索与实验检索星座图中各点的划分与标注。a、b 解析检索（a）与实验检索（b）星座图的划分，每幅星座图都被划分为 31 个区域。c、d 解析检索（c）与实验检索（d）星座图的标注，每个区域都用 0 至 30 的唯一整数标注。

**Reading note:** 这张图是把“物理状态”翻译成“比特串”的字典：a、b 是判决区域（Voronoi 式的 31 个扇区），c、d 则是为每个区域分配 0–30 的整数编号。实际解码时，接收端测到的复场点落在哪个区域，就直接查出对应整数，再换算回 5 比特图案。注意 b 与 d 是实测数据平均后的结果，比 a、c 更“粗糙”，因此实验星座图需要单独划分而不能直接套用理论划分。

#### 表 S1 编码序列与星座图区域编号的对应关系

![TabS1](assets/si/figures/tabS1.png)

**Original caption:** Table. S1. The encoding sequence and the corresponding region of the partitioned constellation diagram.

**中文图注:** 表 S1：编码序列与划分后星座图区域编号的对应关系。

**Reading note:** 这张表是补充注记 S18 解码流程的“查表依据”：星座图的 31 个区域各自对应一条 5 位编码序列，收发双方共享同一张表，接收端只需判断落在哪个区域即可反推编码图案。

### A.19 通信架构对比（Supplementary Note S19）

**Original:** In Fig. S17a, the architecture of a conventional sub-6GHz transmitter is given, encompassing several key components: a digital-to-analog converter (DAC) that converts digital bit streams into amplitude and phase-modulated signals; a π/2 phase shifter aimed at generating in-phase (I) and quadrature (Q) signal components; a frequency mixer employed to generate new frequencies through the multiplication of two input signals; a summing device to combine the signals from the I and Q channels; and finally, a radiating antenna deployed to transmit the signal.

**中文:** 图 S17a 给出了传统 sub-6 GHz 发射机的架构，包含若干关键部件：把数字比特流转为幅度与相位调制信号的数模转换器（DAC）；用于生成同相（I）与正交（Q）信号分量的 π/2 移相器；通过两路输入信号相乘产生新频率的混频器；把 I、Q 两路信号合路相加的求和器件；以及最终用于发射信号的辐射天线。

**Original:** In comparison, the schematic of architecture for the proposed programmable metasurface antenna based transmitter is depicted in Fig. S17b. Specifically, the transmitter includes a dynamic controller, such as a Microcontroller Unit (MCU) or Field-Programmable Gate Array (FPGA) to convert the binary bit stream to high and low levels of voltage signal; an oscillator for generating the base signal; and the 1-bit phase modulated programmable metasurface antenna for the simultaneous modulation and radiation of the signal.

**中文:** 作为对比，所提出的可编程超表面天线发射机架构示意见图 S17b。该发射机具体包括：动态控制器（如微控制器单元 MCU 或现场可编程门阵列 FPGA），用于把二进制比特流转换为高、低电平电压信号；产生基信号的振荡器；以及 1 比特相位调制的可编程超表面天线，用于同时完成信号的调制与辐射。

#### 图 S17 传统发射机与所提可编程超表面天线发射机的架构示意

![FS17](assets/si/figures/figS17.png)

**Original caption:** Fig. S17. Schematic illustration of the architectures for conventional transmitter and the proposed programmable metasurface antenna based transmitter. a, The conventional transmitter consists of an oscillator, the digital-to-analog converter, the π/2 phase shifter, mixers, the signal summing device, and the radiation antenna. b, The proposed programmable metasurface antenna based transmitter consists of an oscillator, the dynamic controller, and the 1-bit phase modulated programmable metasurface antenna.

**中文图注:** 图 S17：传统发射机与所提可编程超表面天线发射机的架构示意。a 传统发射机由振荡器、数模转换器、π/2 移相器、混频器、信号求和器件与辐射天线构成。b 所提可编程超表面天线发射机由振荡器、动态控制器与 1 比特相位调制可编程超表面天线构成。

**Reading note:** 这张图用“器件清单”讲清了本文的工程价值：传统链路里 DAC、π/2 移相器、混频器与求和器件逐个对应着成本、功耗与频率上限；而本文方案把这些全部替换为“MCU/FPGA + 振荡器 + 1 比特相位调制超表面天线”。读图时注意 b 中只有两条控制线（动态控制器 → 超表面天线），这正是“无需射频链”的直观体现。

### A.20 通信能力与功耗对比（Supplementary Note S20）

**Original:** Regarding system complexity and expenditure, our proposed scheme does not require I/Q channels to synthesize the constellation diagram, thereby eliminating the necessity for mixers and summation devices. Moreover, the proposed programmable metasurface antenna based platform enables concurrent signal modulation and emission, eliminating the need to integrate extra antennas for signal radiation. Furthermore, in our proposed scheme, increasing the number of states in the constellation diagram can be accomplished by expanding the number of columns of the programmable metasurface antenna, a process that does not significantly raise the design complexity of the system.

**中文:** 在系统复杂度与开销方面，所提方案无需 I/Q 通道来合成星座图，因而不需要混频器与求和器件；此外，基于可编程超表面天线的平台可同时完成信号调制与发射，无需额外集成天线来辐射信号；再者，在所提方案中增加星座图的状态数只需扩展可编程超表面天线的列数，这一过程不会显著提升系统设计复杂度。

**Original:** Notably, the existing sub-6GHz transmitters are well-developed, offering considerable performance with a relatively low cost, rendering our design potentially less applicable for sub-6GHz applications. In higher working spectra such as X, Ku, and Ka bands, as well as terahertz and optical frequencies, the requirement of precise multi-level amplitude and phase modulation in the I/Q channels to synthesize the constellation diagram significantly increases the design complexity and expenses for the transmitter. Meanwhile, the integration of mixers at higher frequency spectrum entails increased design complexity and cost as well. In comparison, our proposed transmitter architecture necessitates only two modulation phase states for each column. The simplified signal modulation process exhibits advantages particularly at higher working spectrum.

**中文:** 值得注意的是，现有 sub-6 GHz 发射机已相当成熟，能以较低成本提供可观性能，因此本文设计在 sub-6 GHz 应用中可能未必占优。但在更高的工作频段（如 X、Ku、Ka 波段，乃至太赫兹与光学频率），要在 I/Q 通道中实现精确的多电平幅度与相位调制以合成星座图，会显著提高发射机的设计复杂度与成本；同时，在高频段集成混频器同样会增加设计复杂度与成本。相比之下，所提发射机架构每列只需要两种调制相位状态，这种简化的信号调制过程在高频段尤其具有优势。

**Original:** Notably, the data transmission rate of our proposed scheme is closely related to the switching rate of the programmable patterns. Specifically, the switching rate of our proposed scheme is determined by the external controlling devices such as the Microcontroller unit (MCU) or Field-Programmable Gate Array (FPGA), as well as the integrated PIN diodes. Commercial FPGA is capable of achieving switching speed in the Gigahertz range and beyond, and the switching time for the PIN diodes (MADP-14020-907) implemented in this study is approximately 2-3 nanoseconds, as indicated in the data sheet of the product. Recent advancement in CMOS based programmable arrays have demonstrated the capability to achieve minimum switching time of 0.2 nanoseconds within the terahertz spectrum.

**中文:** 值得注意的是，所提方案的数据传输速率与可编程图案的切换速率密切相关。具体而言，切换速率由外部控制器件（如 MCU 或 FPGA）以及集成的 PIN 二极管共同决定。商用 FPGA 的切换速度可达吉赫兹量级甚至更高；本研究采用的 PIN 二极管（MADP-14020-907）根据产品数据手册，其切换时间约为 2–3 纳秒。近期基于 CMOS 的可编程阵列的进展已表明，在太赫兹频谱内可实现 0.2 纳秒的最短切换时间。

**Original:** Here, we consider the PIN diodes are characterized by the switching time of 3 nanoseconds, and thus the switching speed can be computed as 1/3 gigabits per second. As discussed above, the employment of two successive programmable patterns enables the transmission of 9-bit string, yielding an average information transmission rate of 4.5 bits per unit switching time. As a result, the data transmission rate of the proposed scheme can be computed as 1/3 × 4.5 = 1.5 Gbits/s, which is comparable to communication speed in current 5G network. A higher communication speed is expected with the optimization the strategy for encoding and decoding of bit string, the integration of higher speed dynamic devices, and increasing the number of columns of the dynamic array.

**中文:** 这里我们取 PIN 二极管的切换时间为 3 纳秒，则切换速率为 1/3 Gbit/s（即每秒 3.33 亿次切换）。如上所述，连续使用两个可编程图案可传输 9 比特串，平均信息传输速率为每个单位切换时间 4.5 比特。因此所提方案的数据传输速率可计算为 1/3 × 4.5 = 1.5 Gbit/s，与当前 5G 网络的通信速率相当。通过优化比特串的编码与解码策略、集成更高速的动态器件以及增加动态阵列的列数，有望获得更高的通信速率。

**Reading note:** 注记 S20 的关键数字有三个：8 m 距离下 0.05 mW 辐射功率即可区分 31 个状态；扩展到 100 m 与 1000 m 时所需辐射功率按距离平方增长到 0.0078 W 与 0.78 W；每列调制功耗 0.027 W，5 列合计 0.135 W。原文同时坦率指出：**由于辐射方向图峰值与一次谐波方向未对齐，本文方案的辐射功率效率低于标准 MIMO**，需要通过补充注记 S21 的相位梯度（或优化单元方向图）来改善。

### A.21 施加相位梯度以调谐与扫描通信信道（Supplementary Note S21）

**Original:** Section S12 of the Supplementary Information demonstrates that the orientation of the 1st harmonic can be tuned by frequency scanning, but the realized angular tuning range is relatively small, thereby limiting the angular flexibility of the communication channel. To address this issue, we demonstrate that applying an additional phase gradient to the meta-atom array can shift the angle of the first harmonic, thereby enhancing the angular scanning range of the communication channel.

**中文:** 补充注记 S12 表明，一次谐波的指向可以通过频率扫描来调谐，但可实现的角度调谐范围相对较小，因而限制了通信信道的角度灵活性。为解决这一问题，我们证明对超原子阵列施加附加相位梯度可以移动一次谐波的角度，从而扩大通信信道的角度扫描范围。

**Original:** In the proposed prototype, the angle of the first harmonic is determined as θ1 = sin⁻¹(k1/k). Here, we apply an additional uniform phase gradient gu to the input end of the meta-array. Given that the spacing between adjacent columns of the meta-array is d, the phase gradient gu can be implemented by introducing an additional phase delay of m·gu·d to the (m+1)th column of the meta-array, where m ranges from 0 to p−1. Consequently, the phase of the first column of radiators (m = 0) should be unchanged, while an additional phase of φu should be added to the phase state of the second column of radiators (m = 1), and an additional phase of 2φu should be added to the phase state of the third column of radiators (m = 2), and so on. Alternatively, the (m+1)th column of the meta-array can be considered as being modulated by two modified phase states, expressed as φmu = m·gu·d + φm, where φm takes the value between 0 and π.

**中文:** 在所提样机中，一次谐波的角度由 θ1 = sin⁻¹(k1/k) 决定。这里我们在元阵列输入端施加一个附加的均匀相位梯度 gu。设元阵列相邻列的间距为 d，则相位梯度 gu 可以通过对第 (m+1) 列引入额外的相位延迟 m·gu·d 来实现，其中 m 取 0 到 p−1。于是第一列辐射体（m = 0）的相位保持不变，第二列辐射体（m = 1）的相位状态需额外增加 φu，第三列辐射体（m = 2）的相位状态需额外增加 2φu，依此类推。换一种说法，第 (m+1) 列可以看作被两个修正后的相位状态调制，即 φmu = m·gu·d + φm，其中 φm 取值于 0 到 π 之间。

**Original:** When subjected to such an additional uniform phase gradient, the far-field responses at the shifted angle of θu = sin⁻¹((kx − gu)/k) can be determined as:

**中文:** 在受到这种附加均匀相位梯度作用时，偏移角度 θu = sin⁻¹((kx − gu)/k) 处的远场响应可表示为：

<a id="E029"></a>

![补充公式 S15（原图）](assets/si/equations/eqS15.png)

**中文说明：** 补充式 (S15) 给出施加附加均匀相位梯度 gu 后，偏移角方向上的远场展开式。其中每一项对应一个带附加相位偏移 m·gu·d 的辐射分量，因此原本集中在一次谐波方向的主波束（及其简并状态）会随 gu 一起平移。

**Original:** In other words, when an additional phase gradient of gu is applied to the meta-array, the constellation diagram at the 1st harmonic will be shifted from θ1 = sin⁻¹(2π/pd / k) to θ1u = sin⁻¹(2π/pd / k − gu/k). Meanwhile, the average energy of the points in the constellation diagram will be rescaled by a factor of [f(k1−gu)/f(k1)]².

**中文:** 换言之，当对元阵列施加附加相位梯度 gu 时，一次谐波处的星座图将从 θ1 = sin⁻¹((2π/pd)/k) 平移到 θ1u = sin⁻¹((2π/pd)/k − gu/k)；同时，星座图中各点的平均能量将按 [f(k1−gu)/f(k1)]² 的比例重新缩放。

**Original:** It should be noted that the radiation function of a single column of radiators, f(kx), peaks in the normal direction (kx = 0). Hence, the average energy of the points in the produced constellation diagram reaches the maximum when the additional phase gradient of gu = k1 = 2π/pd is applied. In such case, φu can be determined as φu = gu·d = 2π/p.

**中文:** 需要指出的是，单列辐射体的辐射函数 f(kx) 在法向（kx = 0）处取峰值。因此，当施加的附加相位梯度为 gu = k1 = 2π/pd 时，所得星座图中各点的平均能量达到最大；此时 φu 可由 φu = gu·d = 2π/p 确定。

**Original:** Consequently, the additional phases to be added to the 1st (m = 0), 2nd (m = 1), through the pth (m = p−1) column of radiators are determined as 0, 2π/p, 4π/p, …, (p−1)2π/p, respectively. In the simulation, each column from the left to right was fed with additional phase delays of 0, 2π/5, 4π/5, 6π/5, and 8π/5, respectively. In the absence of the additional phase gradient, the 1st harmonic appears at an angle of 24.4°, and the corresponding constellation diagram is retrieved at 24.4°, as presented in Fig. S18a. When the additional phase gradient of 2π/5d is applied, the 1st harmonic shifts to the angle 0°, and the constellation diagram is also retrieved at this angle, as presented in Fig. S18b. Despite slight deviations, the obtained constellation diagram at the normal direction exhibits similar distribution to that at the angle of 24.4°.

**中文:** 因此，需为第 1 列（m = 0）、第 2 列（m = 1）直至第 p 列（m = p−1）辐射体分别附加相位 0, 2π/p, 4π/p, …, (p−1)2π/p。在仿真中，从左到右各列分别被馈以 0、2π/5、4π/5、6π/5 与 8π/5 的附加相位延迟。未施加附加相位梯度时，一次谐波出现在 24.4° 处，星座图也在 24.4° 处检索得到，如图 S18a 所示；当施加 2π/5d 的附加相位梯度后，一次谐波移至 0° 角，星座图也改在该角度检索，如图 S18b 所示。尽管存在轻微偏差，在法向方向得到的星座图与在 24.4° 处的分布相近。

**Original:** Therefore, we demonstrate that incorporating varying phase gradients to the meta-array can extend the angular coverage of the proposed scheme. In practice, varying phase gradients can be introduced by approaches such as incorporating electrically tunable phase shifters at the input end of the meta-array.

**中文:** 由此证明，对元阵列引入可变的相位梯度可以扩展所提方案的角度覆盖范围。在实际中，可变相位梯度可以通过在元阵列输入端引入电可调移相器等方式实现。

**Original:** Fig. S19 presents the normalized far-field radiation pattern generated by a single column of radiators and the computed average energies of the points in the constellation diagrams shown in Fig. S18. We observe that an energy enhancement of approximately 10% is realized when the phase gradient of gu = 2π/5d is applied.

**中文:** 图 S19 给出单列辐射体产生的归一化远场辐射方向图，以及图 S18 中星座图各点的计算平均能量。可以看到，当施加 gu = 2π/5d 的相位梯度时，能量提升了约 10%。

<a id="E030"></a>

![补充公式 S16（原图）](assets/si/equations/eqS16.png)

**中文说明：** 补充式 (S16) 给出施加附加相位梯度后第 m 次谐波的远场表达式，其中多出与 gu 相关的相位项（即把每个编码状态的相位从 φm 修正为 φmu = m·gu·d + φm）。它是补充注记 S21 中“用附加相位梯度扫描通信信道、并把一次谐波对准单列辐射方向图峰值”的核心公式，也是把辐射能量效率提升约 10% 的来源。

#### 图 S18 有/无相位梯度时一次谐波处的检索星座图

![FS18](assets/si/figures/figS18.png)

**Original caption:** Fig. S18. The retrieved constellation diagrams at the 1st harmonic without and with the phase gradients. a, The constellation diagram retrieved at the first harmonic at the angle of θ1 = 24.4°, where no phase gradient is applied. b, The constellation diagram retrieved at the 1st harmonic at the angle of θ1u = 0°, where the phase gradient of gu = 2π/5d is applied.

**中文图注:** 图 S18：未施加与施加相位梯度时在一次谐波处检索得到的星座图。a 未施加相位梯度时、在 θ1 = 24.4° 处检索得到的星座图。b 施加 gu = 2π/5d 的相位梯度后、在 θ1u = 0° 处检索得到的星座图。

**Reading note:** 这张图是注记 S21 的直接验证：a 与 b 的星座图形状相似，说明把相位梯度加在输入端只是“把整个一次谐波搬到法向”，并没有破坏星座图的内部结构。工程含义是——可以在不重新设计超表面的前提下，用附加相位梯度把通信方向指向任意期望角度。

#### 图 S19 有/无相位梯度时星座图各点的平均能量

![FS19](assets/si/figures/figS19.png)

**Original caption:** Fig. S19. Average energies of the retrieved constellation diagrams at the 1st harmonic without and with the phase gradients. The blue curve depicts the simulated radiation pattern of a single column of the meta-array. The red triangle represents the calculated average energy of the points in the constellation diagram at the 1st harmonic where no phase gradient is applied. The green triangle represents the calculated average energy of the points in the constellation diagram at the 1st harmonic where phase gradient of gu = 2π/5d is applied.

**中文图注:** 图 S19：未施加与施加相位梯度时一次谐波处检索星座图各点的平均能量。蓝线为单列元阵列的仿真辐射方向图；红色三角表示未施加相位梯度时一次谐波处星座图各点计算所得的平均能量；绿色三角表示施加 gu = 2π/5d 相位梯度后一次谐波处星座图各点计算所得的平均能量。

**Reading note:** 读图时把三个标记与蓝色方向图峰值对齐看：红色三角落在方向图的下降沿上（对应 24.4°，能量偏低），绿色三角形则被搬到方向图峰值附近（对应 0°），因此能量提升约 10%。这幅图解释了主文所述“辐射功率效率低于 MIMO”的根因——**峰值与一次谐波方向不重合**，而附加相位梯度正是把二者对齐的手段。

### A.22 补充参考文献（Supplementary References）

**Original:** 1. Zhang, N. et al. Programmable Coding Metasurface for Dual-Band Independent Real-Time Beam Control. IEEE J. Emerg. Sel. Top. Circuits Syst. 10, 20-28 (2020). 2. Wang, S. R., Dai, J. Y., Zhou, Q. Y., Ke, J. C., Cheng, Q., & Cui, T. J. Manipulation of multi-frequency waves and signals via multi-partition asynchronous space-time-coding digital metasurface. Nat. Commun. 14, 5377 (2023). 3. Wong, K. L., Hsu, Y. H., Lee, C. Y., Li, W. Y. Wideband 4-Port Patch Antenna Module Based Compact 8-Port Two-Module Antenna for 6G Upper Mid-Band 8 x 4 Device MIMO With Enhanced Spectral Efficiency. IEEE Access 12, 88976-88991, (2024). 4. Wong, K. L., Hong, S. E., Li, W. Y. Low-Profile Four-Port MIMO Antenna Module Based 16-Port Closely-Spaced 2 x 2 Module Array for 6G Upper Mid-Band Mobile Devices. IEEE Access 11, 110796-110808, (2023). 5. Proakis, J. G., Salehi, M., Digital Communications, McGraw-Hill Higher Education, 5th edition, (2008). 6. Nam, H., Nguyen, V. V., Trinh, V. S., Song, J. M., Lee, B. H., Full X-Band Phased-Array Transmit/Receive Module Chip in 65-nm CMOS Technology. IEEE Access 8, 76182-76192, (2020). 7. Venkatesh, S., Lu, X. Y., Saeidi, H., Sengupta, K. A high-speed programmable and scalable terahertz holographic metasurface based on tiled CMOS chips. Nat. Electron. 3, 785-793 (2020).

**中文:** 1. Zhang, N. 等，用于双频独立实时波束控制的可编程编码超表面，IEEE J. Emerg. Sel. Top. Circuits Syst. 10, 20–28 (2020)。2. Wang, S. R., Dai, J. Y., Zhou, Q. Y., Ke, J. C., Cheng, Q., Cui, T. J.，通过多分区异步时空编码数字超表面操控多频波与信号，Nat. Commun. 14, 5377 (2023)。3. Wong, K. L., Hsu, Y. H., Lee, C. Y., Li, W. Y.，面向 6G 上中频段 8×4 设备 MIMO 的宽带四端口贴片天线模块与紧凑八端口双模块天线，IEEE Access 12, 88976–88991 (2024)。4. Wong, K. L., Hong, S. E., Li, W. Y.，面向 6G 上中频段移动设备的低剖面四端口 MIMO 天线模块与 2×2 紧凑十六端口模块阵列，IEEE Access 11, 110796–110808 (2023)。5. Proakis, J. G., Salehi, M.，数字通信，McGraw-Hill Higher Education，第 5 版 (2008)。6. Nam, H., Nguyen, V. V., Trinh, V. S., Song, J. M., Lee, B. H.，65 nm CMOS 工艺中的全 X 波段相控阵收发模块芯片，IEEE Access 8, 76182–76192 (2020)。7. Venkatesh, S., Lu, X. Y., Saeidi, H., Sengupta, K.，基于拼接 CMOS 芯片的高速可编程可扩展太赫兹全息超表面，Nat. Electron. 3, 785–793 (2020)。

## 阅读提示 / Critical Reading Notes

### 论文解决的问题与核心主张

本文解决的是可编程超表面发射机“信息映射效率”低下的问题：传统时空/编码超表面系统每单位切换时间实际传出的比特远低于编码图案所含比特。核心主张有三：
- (1) 用“非递归编码 + 空间谐波检索”，把 2ᵖ 种可编程图案（除全 1/全 −1 外）与一次谐波方向 2ᵖ−1 个星座状态构成近乎双射的映射，单次测量即可取回 p 比特信息；
- (2) 信息映射效率 η₁ = log₂(2ᵖ−1)/p 随 p 趋近 100%（p=5 为 99%、p=7 超 99.8%）；
- (3) 用级联编码把辐射能量集中到（整数）谐波方向，改善能量转换效率，代价是映射效率降至 1/q。

### 证据链与结论边界

- 证据链由四层构成：理论证明（循环矩阵 M 非奇异 ⇒ 一次谐波响应唯一、C₂ₚ 对称）→ 全波仿真（图 2/图 3 的幅度相位与 36° 相位台阶）→ 实测（32 图案方向图、四级幅度 α₀–α₃ 集合划分、星座图合成，图 4）→ 端到端图像传输仿真（BER 在解析/实验星座下分别于 15/17 dB 达 10⁻⁶，图 5）。
- 结论边界明确：实测谐波角存在 1–2° 偏差（归因于转台标定）；实验星座图有畸变导致 BER 高于理论；系统对角度敏感，仅适合小角度变化场景；当前只是 1D 编码、单频样机，尚无动态波束赋形、主动波束成形与高动态带宽等 MIMO 功能。

### 值得注意的局限与风险

- (1) 图像传输是“模拟/仿真”而非实时射频链路实验，BER 评估在实测星座图上加复高斯噪声完成；
- (2) “双射”有一个例外（全 1 与全 −1 两条递归序列在一次谐波响应均为零，只取其一），并非严格双射；
- (3) 提高 p 会增加星座点密度、降低噪声鲁棒性，故实际编码长度需按信道 SNR 折中；
- (4) 能量转换效率的提升依赖附加相位梯度或级联编码，级联会等比例降低映射效率；
- (5) 实测中区分 31 个状态对输入功率（0.05 mW）与测量次数（1000 次）有较高要求。

### 与领域的关系

- 本文把“可编程超表面直接发射/反射数字信息”（无 DAC/混频的射频链简化发射机）从“低效率、小状态数”推进到“效率逼近理论上限、状态数指数覆盖”的一步，属于东南大学崔铁军团队在编码超表面/信息超材料方向上的延续（同团队此前工作：时间域编码、时空编码、光控超表面、256-QAM 等）。
- 与 RIS 被动波束赋形不同，本文强调“发射机架构 + 星座合成”的信息论视角，并与光学计算中“用波传播与干涉做计算”的思路相通。

### 延伸阅读建议

可对照阅读：
- (1) 直接数字消息传输（Research 2019，崔铁军等）；
- (2) 时空编码数字超表面（Nat. Commun. 2018）；
- (3) 基于时空编码超表面的简化架构无线通信（Adv. Mater. Technol. 2019）；
- (4) 空频复用超表面通信（Nat. Electron. 2021）；
- (5) 与本文对比的 RIS 发射机综述（Proc. IEEE 2022，Cheng 等）。若关心“信息映射效率”的信息论定义，可回溯本文参考文献 49（Fourier/信息光学）。
