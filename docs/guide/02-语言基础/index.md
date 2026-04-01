# 第二章：语言基础

好消息是，C#在很多方面与TypeScript非常相似——毕竟它们都受到了相同语言的影响。本章将帮助你快速掌握C#的核心概念，包括类型系统、类与接口、LINQ查询、异步编程以及模块化与依赖管理，为后续的Avalonia开发打下语言基础。

> **本章导读**：语言基础——从JavaScript/TypeScript到C#的快速入门

## 章节导航

本章分为以下4个部分：

[**2.1 C#快速入门（针对JS开发者）**](<./2.1 C-Sharp快速入门（针对JS开发者）.md>)
- 变量声明与类型系统
- 类和接口
- 继承和多态
- LINQ（对比JavaScript数组方法）

[**2.2 异步编程**](<./2.2 异步编程.md>)
- async/await对比
- Task vs Promise
- 常见异步模式

[**2.3 模块化与依赖管理**](<./2.3 模块化与依赖管理.md>)
- NuGet vs npm
- using vs import
- 项目文件（.csproj）vs package.json

[**2.4 其他重要概念**](<./2.4 其他重要概念.md>)
- 枚举（Enum）
- 结构体（Struct）
- 泛型
- 扩展方法
- 异常处理

---

## 核心要点速览

| JavaScript/TypeScript | C# | 说明 |
|----------------------|-----|------|
| `let/const` | `var` | 变量声明 |
| `interface` | `interface` | 接口定义 |
| `class` | `class` | 类定义 |
| `async/await` | `async/await` | 异步编程 |
| `Promise` | `Task` | 异步操作 |
| `import/export` | `using/namespace` | 模块化 |
| `npm` | `NuGet` | 包管理器 |
| `package.json` | `.csproj` | 项目配置 |
| `Array.map/filter` | `LINQ` | 数据查询 |

---

**预计学习时间**：45分钟

**重要性**：⭐⭐⭐（后续章节的基础）
