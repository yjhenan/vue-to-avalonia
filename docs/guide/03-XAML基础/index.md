# 第三章：XAML基础——从HTML模板到XAML

XAML是Avalonia的UI描述语言，角色类似于HTML。本章将从XAML语法入门讲起，对比HTML/CSS与XAML的差异，掌握布局系统、控件映射，并通过实战完成从Web布局到Avalonia布局的转换。

> **本章导读**：XAML基础——掌握Avalonia的UI描述语言

## 章节导航

本章分为以下5个部分：

[**3.1 XAML语法入门**](<./3.1 XAML语法入门.md>)
- 元素和属性
- 命名空间
- 属性语法
- 内容属性（Content Property）

[**3.2 布局系统**](<./3.2 布局系统.md>)
- 常用布局控件
- 布局对比实战
- 对齐和边距

[**3.3 基础控件映射表**](<./3.3 基础控件映射表.md>)
- 常用控件对照
- 常用属性对照
- 控件属性对比（v-bind vs Binding）

[**3.4 实战：从Web布局到Avalonia布局**](<./3.4 实战：从Web布局到Avalonia布局.md>)
- Web页面示例
- 转换为Avalonia
- 转换要点总结

[**3.5 小结**](<./3.5 小结.md>)

---

## 核心要点速览

| HTML/CSS概念 | XAML概念 | 说明 |
|-------------|---------|------|
| `<div>` | `Panel`/`Grid`/`StackPanel` | 布局容器 |
| `<span>` | `TextBlock` | 文本显示 |
| `<input>` | `TextBox` | 输入框 |
| `<button>` | `Button` | 按钮 |
| CSS `display: flex` | `StackPanel` | 弹性布局 |
| CSS `display: grid` | `Grid` | 网格布局 |
| CSS `margin/padding` | `Margin`/`Padding` | 间距 |
| CSS选择器 | Selector | 样式选择器 |

---

**预计学习时间**：40分钟

**重要性**：⭐⭐⭐⭐（XAML是Avalonia开发的基础）
