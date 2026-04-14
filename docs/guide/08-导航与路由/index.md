# 第八章：导航与路由——从Vue Router到Avalonia导航

桌面应用没有浏览器那样的URL路由，但同样需要管理页面切换与窗口导航。本章将对比Vue Router的路由模式与Avalonia 12的导航策略——窗口导航、原生页面导航（NavigationPage）、Tab导航（TabbedPage）、侧边栏导航（DrawerPage），帮助你选择适合项目场景的导航方案。

> **本章导读**：导航与路由——从Vue Router到Avalonia 12导航策略

## 章节导航

本章分为以下2个部分：

[**8.1 Avalonia中的导航模式**](<./8.1 Avalonia中的导航模式.md>)
- 窗口导航（Window Navigation）
- 页面导航（NavigationPage + ContentPage）— Avalonia 12 新特性
- Tab导航（TabbedPage）
- 侧边栏导航（DrawerPage）
- 手动视图切换（ContentControl）

[**8.2 小结**](<./8.2 小结.md>)

---

## 核心要点速览

| Vue Router概念 | Avalonia 12导航方式 | 说明 |
|--------------|-------------------|------|
| `router.push()` | `Navigation.PushAsync()` | 栈式导航 |
| `router.back()` | `Navigation.PopAsync()` | 后退 |
| `<router-view>` | `<NavigationPage>` | 导航出口 |
| `beforeEach` 守卫 | `OnNavigating` | 导航拦截 |
| Tab式路由 | `<TabbedPage>` | 多Tab导航 |
| 侧边栏布局 | `<DrawerPage>` | 抽屉导航 |
| `new Window().Show()` | 窗口导航 | 独立窗口 |

---

**预计学习时间**：30分钟

**重要性**：⭐⭐⭐（中大型项目必学）
