import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '从 Vue 到 Avalonia',
  description: '专为Vue开发者打造的Avalonia桌面应用开发指南',

  lang: 'zh-CN',
  base: '/vue-to-avalonia/',
  cleanUrls: true,

  themeConfig: {
    logo: '/images/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '学习指南', link: '/guide/' }
          ]
        },
        {
          text: '第一章：初识Avalonia',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/01-初识Avalonia/' },
            { text: '1.1 Avalonia是什么', link: '/guide/01-初识Avalonia/1.1 Avalonia是什么' },
            { text: '1.2 开发环境搭建', link: '/guide/01-初识Avalonia/1.2 开发环境搭建' },
            { text: '1.3 技术栈对比速览表', link: '/guide/01-初识Avalonia/1.3 技术栈对比速览表' },
            { text: '1.4 小结', link: '/guide/01-初识Avalonia/1.4 小结' }
          ]
        },
        {
          text: '第二章：语言基础',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/02-语言基础/' },
            { text: '2.1 C#快速入门', link: '/guide/02-语言基础/2.1 C-Sharp快速入门（针对JS开发者）' },
            { text: '2.2 异步编程', link: '/guide/02-语言基础/2.2 异步编程' },
            { text: '2.3 模块化与依赖管理', link: '/guide/02-语言基础/2.3 模块化与依赖管理' },
            { text: '2.4 其他重要概念', link: '/guide/02-语言基础/2.4 其他重要概念' }
          ]
        },
        {
          text: '第三章：XAML基础',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/03-XAML基础/' },
            { text: '3.1 XAML语法入门', link: '/guide/03-XAML基础/3.1 XAML语法入门' },
            { text: '3.2 布局系统', link: '/guide/03-XAML基础/3.2 布局系统' },
            { text: '3.3 基础控件映射表', link: '/guide/03-XAML基础/3.3 基础控件映射表' },
            { text: '3.4 实战：Web到Avalonia', link: '/guide/03-XAML基础/3.4 实战：从Web布局到Avalonia布局' },
            { text: '3.5 小结', link: '/guide/03-XAML基础/3.5 小结' }
          ]
        },
        {
          text: '第四章：数据绑定（核心★）',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/04-数据绑定/' },
            { text: '4.1 MVVM模式深度解析', link: '/guide/04-数据绑定/4.1 MVVM模式深度解析' },
            { text: '4.2 数据绑定全面对照', link: '/guide/04-数据绑定/4.2 数据绑定全面对照' },
            { text: '4.3 响应式系统深度对比', link: '/guide/04-数据绑定/4.3 响应式系统深度对比' },
            { text: '4.4 计算属性与监听器', link: '/guide/04-数据绑定/4.4 计算属性与监听器' },
            { text: '4.5 实战代码对比', link: '/guide/04-数据绑定/4.5 实战代码对比（详细）' },
            { text: '4.6 小结', link: '/guide/04-数据绑定/4.6 小结' }
          ]
        },
        {
          text: '第五章：事件处理',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/05-事件处理/' },
            { text: '5.1 事件绑定', link: '/guide/05-事件处理/5.1 事件绑定' },
            { text: '5.2 Command模式', link: '/guide/05-事件处理/5.2 Command模式' }
          ]
        },
        {
          text: '第六章：样式与主题',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/06-样式与主题/' },
            { text: '6.1 Avalonia样式系统', link: '/guide/06-样式与主题/6.1 Avalonia样式系统' },
            { text: '6.2 主题与皮肤', link: '/guide/06-样式与主题/6.2 主题与皮肤' },
            { text: '6.3 样式实战：完整UI库', link: '/guide/06-样式与主题/6.3 样式实战：完整UI库' }
          ]
        },
        {
          text: '第七章：组件化开发',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/07-组件化开发/' },
            { text: '7.1 控件封装', link: '/guide/07-组件化开发/7.1 控件封装' },
            { text: '7.2 控件模板', link: '/guide/07-组件化开发/7.2 控件模板' },
            { text: '7.3 最佳实践', link: '/guide/07-组件化开发/7.3 可复用组件开发最佳实践' }
          ]
        },
        {
          text: '第八章：导航与路由',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/08-导航与路由/' },
            { text: '8.1 Avalonia中的导航模式', link: '/guide/08-导航与路由/8.1 Avalonia中的导航模式' },
            { text: '8.2 小结', link: '/guide/08-导航与路由/8.2 小结' }
          ]
        },
        {
          text: '第九章：状态管理',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/09-状态管理/' },
            { text: '9.1 应用状态管理', link: '/guide/09-状态管理/9.1 应用状态管理' },
            { text: '9.2 服务层设计', link: '/guide/09-状态管理/9.2 服务层设计' },
            { text: '9.3 小结', link: '/guide/09-状态管理/9.3 小结' }
          ]
        },
        {
          text: '第十章：调试与工具链',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/10-调试与工具链/' },
            { text: '10.1 开发工具', link: '/guide/10-调试与工具链/10.1 开发工具' },
            { text: '10.2 性能优化', link: '/guide/10-调试与工具链/10.2 性能优化' },
            { text: '10.3 测试', link: '/guide/10-调试与工具链/10.3 测试' },
            { text: '10.4 小结', link: '/guide/10-调试与工具链/10.4 小结' }
          ]
        },
        {
          text: '第十一章：TodoMVC实战',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/11-TodoMVC实战/' },
            { text: '项目概述', link: '/guide/11-TodoMVC实战/项目概述' },
            { text: '11.1 Vue TodoMVC实现（回顾）', link: '/guide/11-TodoMVC实战/11.1 Vue TodoMVC实现（回顾）' },
            { text: '11.2 Avalonia TodoMVC - 第一步', link: '/guide/11-TodoMVC实战/11.2 Avalonia TodoMVC - 第一步：项目搭建与基础结构' },
            { text: '完整实现（步骤2-8总结版）', link: '/guide/11-TodoMVC实战/完整实现（步骤2-8总结版）' },
            { text: '完整功能对比', link: '/guide/11-TodoMVC实战/完整功能对比' },
            { text: '小结', link: '/guide/11-TodoMVC实战/小结' }
          ]
        },
        {
          text: '第十二章：常见问题与附录',
          collapsible: true,
          items: [
            { text: '章节导航', link: '/guide/12-常见问题与附录/' },
            { text: '12.1 FAQ（常见问题）', link: '/guide/12-常见问题与附录/12.1 FAQ（常见问题）' },
            { text: '12.2 最佳实践', link: '/guide/12-常见问题与附录/12.2 最佳实践' },
            { text: '12.3 学习资源', link: '/guide/12-常见问题与附录/12.3 学习资源' },
            { text: '附录', link: '/guide/12-常见问题与附录/附录' },
            { text: '全书总结', link: '/guide/12-常见问题与附录/全书总结' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/avalonia-doc' }
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: '从Vue到Avalonia' }],
    ['meta', { name: 'og:description', content: '专为Vue开发者打造的Avalonia开发指南' }]
  ]
})
