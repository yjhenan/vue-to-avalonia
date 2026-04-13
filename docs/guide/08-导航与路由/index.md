# 第八章：导航与路由——从Vue Router到Avalonia导航

桌面应用没有浏览器那样的URL路由，但同样需要管理页面切换与窗口导航。本章将对比Vue Router的路由模式与Avalonia的三种导航策略——窗口导航、页面导航（ContentControl+UserControl）和视图切换（ContentControl），帮助你选择适合项目场景的导航方案。

> **本章导读**：导航与路由——从Vue Router到Avalonia导航策略

## 章节导航

本章分为以下2个部分：

[**8.1 Avalonia中的导航模式**](<./8.1 Avalonia中的导航模式.md>)
- 窗口导航（Window Navigation）
- 页面导航（ContentControl + UserControl）
- 视图切换策略（ContentControl）

[**8.2 小结**](<./8.2 小结.md>)

---

## 核心要点速览

| Vue Router概念 | Avalonia导航方式 | 说明 |
|--------------|----------------|------|
| `router.push()` | `new Window().Show()` | 窗口导航 |
| `<router-view>` | `ContentControl` + `UserControl` | 页面导航 |
| 动态路由 | `ContentControl.Content` | 视图切换 |
| 路由守卫 | 窗口生命周期 | 导航拦截 |
| 路由参数 | 窗口参数/ViewModel属性 | 参数传递 |
| `<router-link>` | `Button` + 导航命令 | 导航触发 |

---

**预计学习时间**：25分钟

**重要性**：⭐⭐⭐（中大型项目必学）
