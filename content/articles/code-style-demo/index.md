---
title: "代码样式示例：覆盖全部语法高亮"
date: 2026-08-04
tags: ["示例", "技术", "日常"]
summary: "一篇用于检查代码高亮配色的示例文章，覆盖关键字、字符串、数字、注释、装饰器、类、内建函数等全部 token。"
draft: false
---

这篇示例文章用来检查代码块的配色，覆盖了 Python 中最常见的语法元素。如果你看到某个部分的颜色"跳"出整体风格，说明对应 token 需要调整。

## Python 综合示例

```python
"""模块文档字符串：覆盖字符串、三引号与类型注解。"""
from __future__ import annotations
import os
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np
import torch
from torch import nn


# 常量、数字与布尔值
MAX_RETRIES: int = 3
RATE_LIMIT = 0.5
BASE_URL = "https://example.com/api"
DEBUG: bool = True
PI = 3.14159
HEX_MASK = 0xFF  # 十六进制
BIN_FLAG = 0b1010
BIG_NUM = 1_000_000_000
COMPLEX = 1 + 2j


@dataclass
class Config:
    """配置类：演示类、装饰器、属性与静态方法。"""

    name: str = "default"
    retries: int = MAX_RETRIES

    @property
    def label(self) -> str:
        return f"[{self.name}]"

    @staticmethod
    def from_env() -> "Config":
        return Config(name=os.getenv("APP_NAME", "app"))


class Trainer(nn.Module):
    def __init__(self, config: Config, lr: float = 1e-3):
        super().__init__()
        self.config = config
        self.lr = lr
        self.losses: List[float] = []

    def train_step(self, x: torch.Tensor, y: torch.Tensor) -> float:
        # 注释：演示关键字、运算符与内建函数
        if not isinstance(x, torch.Tensor):
            raise TypeError("x 必须是 Tensor")
        try:
            loss = ((x - y) ** 2).mean()
        except RuntimeError as err:
            print(f"计算失败: {err}", file=sys.stderr)
            return -1.0
        else:
            self.losses.append(float(loss.item()))
            return loss.item()

    def summary(self) -> Dict[str, Any]:
        total = sum(p.numel() for p in self.parameters() if p.requires_grad)
        return {"params": total, "name": self.config.label}


def main() -> None:
    cfg = Config.from_env()
    model = Trainer(cfg, lr=0.001)
    xs = torch.randn(32, 10)
    ys = torch.randn(32, 10)
    for epoch in range(MAX_RETRIES):
        loss = model.train_step(xs, ys)
        if loss < 0.01:
            break
        elif loss > 1.0:
            continue
        else:
            pass
    print(model.summary())


if __name__ == "__main__":
    main()
```

## Bash 示例

```bash
#!/usr/bin/env bash
# 遍历目录并统计行数
for f in src/*.py; do
  lines=$(wc -l < "$f")
  if [ "$lines" -gt 100 ]; then
    echo "大文件: $f ($lines 行)"
  fi
done
```

## JSON 示例

```json
{
  "name": "yawningtree",
  "version": "1.0.0",
  "enabled": true,
  "items": [1, 2.5, -3, null],
  "meta": {"tags": ["blog", "code"]}
}
```
