# 第四章：数据绑定（核心章节★）

本章是全书最核心的内容。作为Vue开发者，你已经深刻理解了响应式数据绑定的强大之处。Avalonia同样采用数据绑定机制，但实现方式和概念有所不同。通过本章的学习，你将完全掌握Avalonia的数据绑定系统，建立起从Vue响应式到Avalonia绑定的完整认知映射。

> **本章导读**：数据绑定是Avalonia的核心，本章将深入对比Vue的响应式系统，帮助你建立完整的认知映射。

## 章节导航

由于本章内容较长且重要，分为以下5个部分：

[**4.1 MVVM模式深度解析**](<./4.1 MVVM模式深度解析.md>)
- MVVM vs Vue的MVVM
- Model/View/ViewModel职责划分
- 为什么Avalonia需要更严格的MVVM

[**4.2 数据绑定全面对照**](<./4.2 数据绑定全面对照.md>)
- 基础绑定语法对照表
- 绑定模式详解（5种模式）
- 高级绑定技巧（Converter、MultiBinding）

[**4.3 响应式系统深度对比**](<./4.3 响应式系统深度对比.md>)
- Vue响应式原理（Proxy）
- Avalonia响应式机制（INotifyPropertyChanged）
- 集合响应式对比
- CommunityToolkit.Mvvm框架

[**4.4 计算属性与监听器**](<./4.4 计算属性与监听器.md>)
- computed属性迁移
- watch深度监听
- [ObservableProperty] OnChanged方法

[**4.5 实战代码对比**](<./4.5 实战代码对比（详细）.md>)
- 案例一：表单双向绑定
- 案例二：列表渲染与交互
- 案例三：条件渲染
- 案例四：动态样式绑定

[**4.6 小结**](<./4.6 小结.md>)
---

## 核心要点速览

| Vue概念 | Avalonia概念 | 说明 |
|--------|-------------|------|
| `{{ }}`插值 | `{Binding}` | 数据绑定 |
| `v-model` | `Mode=TwoWay` | 双向绑定 |
| `computed` | C#属性 | 计算属性 |
| `watch` | `partial void OnXxxChanged` | 监听变化 |
| `ref/reactive` | `ObservableObject` | 响应式对象 |
| `Proxy` | `INotifyPropertyChanged` | 响应式原理 |

---

**预计学习时间**：90分钟

**重要性**：⭐⭐⭐⭐⭐（全书最核心章节）
