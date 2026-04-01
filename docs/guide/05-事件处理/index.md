# 第五章：事件处理——从@click到Command

Vue中你习惯用 `@click`、`@input` 处理用户交互，在Avalonia中对应的是事件绑定和Command模式。本章将对比Vue事件系统与Avalonia事件机制，掌握从事件处理器到ICommand/ReactiveCommand的完整迁移路径。

> **本章导读**：事件处理——掌握Avalonia中的用户交互响应方式

## 章节导航

本章分为以下2个部分：

[**5.1 事件绑定**](<./5.1 事件绑定.md>)
- 事件处理器对比
- 常用事件对照表
- 事件参数对比
- Code-behind vs 纯XAML
- 事件转Command（高级场景）

[**5.2 Command模式**](<./5.2 Command模式.md>)
- ICommand接口详解
- ReactiveCommand（推荐使用）
- Command vs Vue methods对比
- Command的高级用法
- Command最佳实践

---

## 核心要点速览

| Vue事件 | Avalonia事件 | 说明 |
|---------|-------------|------|
| `@click` | `Click` 事件 / `Command` | 点击处理 |
| `@input` | `TextChanged` | 输入事件 |
| `@keyup.enter` | `KeyDown` + KeyBinding | 键盘事件 |
| `@submit.prevent` | 事件参数 `e.Handled = true` | 阻止默认行为 |
| `v-on` | `Interaction.Behaviors` | 行为绑定 |
| methods | `ICommand` / `ReactiveCommand` | 命令模式 |
| `$emit` | 路由事件（RoutedEvent） | 子组件通信 |

---

**预计学习时间**：40分钟

**重要性**：⭐⭐⭐⭐（交互是应用的核心）
