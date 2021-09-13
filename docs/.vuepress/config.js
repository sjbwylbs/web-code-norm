module.exports = {
    title: '前端代码规范',
    themeConfig: {
        logo: '/logo1.png',
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: [
          'javascript.md',
          'react.md',
          'namingRule.md',
          'commitRule.md'
        ],
      },
      plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
              '/zh/': {
                placeholder: '搜索',
              },
            },
          },
        ],
      ],
}