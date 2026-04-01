# 从 Vue 到 Avalonia

> 专为 Vue 开发者打造的 Avalonia 桌面应用开发指南

在线阅读：[https://yjhenan.github.io/vue-to-avalonia/](https://yjhenan.github.io/vue-to-avalonia/)

## 简介

本书面向熟练 Vue 的 Web 前端开发者，通过 **Vue → Avalonia** 的对比映射，帮助你快速掌握 Avalonia 桌面应用开发。

### 你将学到

| Vue 概念 | Avalonia 对应 |
|---------|-------------|
| HTML 模板 | XAML |
| CSS | Style / Selector |
| `v-model` | `{Binding Mode=TwoWay}` |
| `v-for` | `ItemsControl` + `DataTemplate` |
| `computed` | C# 属性 / `WhenAnyValue` |
| Vuex / Pinia | Service + DI |
| Vue Router | 窗口导航 / ContentControl |
| Vue 组件 | UserControl / ControlTemplate |

### 章节概览

- **第1-3章**：基础入门（环境搭建、C# 语言、XAML 基础）
- **第4章**：数据绑定（核心，MVVM 与响应式系统）
- **第5-6章**：事件处理与样式主题
- **第7-9章**：组件化、导航、状态管理
- **第10-11章**：调试工具链与 TodoMVC 实战
- **第12章**：FAQ、最佳实践、速查附录

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建
npm run docs:build
```

## 技术栈

- [VitePress](https://vitepress.dev/) - 文档站点生成
- [Avalonia UI](https://avaloniaui.net/) - 跨平台 .NET 桌面框架

## License

MIT
