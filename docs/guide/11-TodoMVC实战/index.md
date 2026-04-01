# 第十一章：TodoMVC完整实现（综合实战）

TodoMVC是经典的TODO应用，涵盖了增删改查、过滤、状态管理等核心功能。本章将从Vue实现出发，完整实现Avalonia版本的TodoMVC，串联前面学习的所有知识点——XAML布局、数据绑定、事件处理、状态管理，组件化开发。

> **本章导读**：TodoMVC实战——串联所有知识点的综合项目

## 章节导航

本章分为以下6个部分：

[**项目概述**](<./项目概述.md>)
- 功能需求
- 技术栈

[**11.1 Vue TodoMVC实现（回顾）**](<./11.1 Vue TodoMVC实现（回顾）.md>)

[**11.2 Avalonia TodoMVC - 第一步：项目搭建与基础结构**](<./11.2 Avalonia TodoMVC - 第一步：项目搭建与基础结构.md>)
- 创建项目
- 项目结构
- 数据模型
- 服务接口

[**完整实现（步骤2-8总结版）**](<./完整实现（步骤2-8总结版）.md>)
- 完整代码结构
- TodoService完整实现
- MainViewModel完整实现
- MainWindow.axaml完整实现
- 启动和依赖注入

[**完整功能对比**](<./完整功能对比.md>)

[**小结**](<./小结.md>)

---

## 核心要点速览

| Vue TodoMVC要素 | Avalonia对应 | 说明 |
|----------------|-------------|------|
| `v-model` | `{Binding Mode=TwoWay}` | 双向绑定输入 |
| `v-for` | `ItemsControl` + `DataTemplate` | 列表渲染 |
| `computed` 过滤 | LINQ `.Where()` | 状态过滤 |
| `localStorage` | 文件/数据库 | 数据持久化 |
| `methods` | `ReactiveCommand` | 操作命令 |
| `watch` | `WhenAnyValue` | 状态监听 |
| Vue组件 | UserControl | 子组件拆分 |
| Pinia store | Service + DI | 状态管理 |

---

**预计学习时间**：60分钟

**重要性**：⭐⭐⭐⭐⭐（全书知识点的综合运用）
