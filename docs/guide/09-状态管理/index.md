# 第九章：状态管理——从Vuex/Pinia到MVVM

Vue中你使用Vuex或Pinia管理全局状态，在Avalonia中则通过Service+依赖注入（DI）实现。本章将对比两种状态管理方案的差异，通过购物车实战案例掌握MVVM下的状态管理模式，并学习服务层的设计与通信机制。

> **本章导读**：状态管理——从中心化Store到分布式Service+DI

## 章节导航

本章分为以下3个部分：

[**9.1 应用状态管理**](<./9.1 应用状态管理.md>)
- Vuex/Pinia vs Service + DI
- 完整示例：购物车状态管理

[**9.2 服务层设计**](<./9.2 服务层设计.md>)
- 单例模式
- 服务间通信

[**9.3 小结**](<./9.3 小结.md>)

---

## 核心要点速览

| Vuex/Pinia概念 | Avalonia概念 | 说明 |
|---------------|-------------|------|
| `state` | ViewModel属性 | 响应式状态 |
| `getters` | C#计算属性 | 派生状态 |
| `mutations` | ViewModel方法 | 同步修改 |
| `actions` | Service方法 | 异步操作 |
| `store` | Service + DI | 全局状态容器 |
| `modules` | 多个Service | 模块化 |
| `provide/inject` | 构造函数注入 | 依赖注入 |
| `mapState` | 绑定ViewModel属性 | 状态映射 |

---

**预计学习时间**：35分钟

**重要性**：⭐⭐⭐⭐（中大型项目的架构基础）
