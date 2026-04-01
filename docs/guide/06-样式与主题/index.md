# 第六章：样式与主题——从CSS到Avalonia样式

CSS是Web样式的基石，Avalonia同样拥有强大的样式系统。本章将对比CSS选择器与Avalonia Selector，掌握资源字典（ResourceDictionary）的使用、主题切换机制，并通过实战构建完整的UI样式库。

> **本章导读**：样式与主题——从CSS到Avalonia样式的完整迁移

## 章节导航

本章分为以下3个部分：

[**6.1 Avalonia样式系统**](<./6.1 Avalonia样式系统.md>)
- Style语法对比CSS
- Selector选择器详解
- 资源字典（ResourceDictionary）
- 样式继承与覆盖
- 完整示例：按钮样式库

[**6.2 主题与皮肤**](<./6.2 主题与皮肤.md>)
- Fluent主题
- 自定义主题
- Material Design主题
- 动画与过渡

[**6.3 样式实战：完整UI库**](<./6.3 样式实战：完整UI库.md>)
- 创建可复用样式库

---

## 核心要点速览

| CSS概念 | Avalonia概念 | 说明 |
|--------|-------------|------|
| `.class` | `.Class` | 类选择器 |
| `#id` | `x:Name` | 元素标识 |
| CSS变量 | `ResourceDictionary` | 资源/主题变量 |
| `@media` | 主题切换 | 主题响应 |
| `transition` | `Transitions` | 过渡动画 |
| `:hover` | `:pointerover` | 伪类选择器 |
| `:nth-child()` | `:nth-child()` | 位置选择器 |
| `!important` | 样式优先级规则 | 优先级控制 |

---

**预计学习时间**：50分钟

**重要性**：⭐⭐⭐⭐（UI美观的基础）
