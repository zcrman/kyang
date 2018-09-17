import pageRoutes from './router.config';

export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            polyfills: ['ie9'],
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
    // 路由配置
    routes: pageRoutes,
    lessLoaderOptions: {
        javascriptEnabled: true,
      },
      cssLoaderOptions: {
        modules: true,
        getLocalIdent: (context, localIdentName, localName) => {
          if (
            context.resourcePath.includes('node_modules') ||
            context.resourcePath.includes('ant.design.pro.less') ||
            context.resourcePath.includes('global.less')
          ) {
            return localName;
          }
          const match = context.resourcePath.match(/src(.*)/);
          if (match && match[1]) {
            const antdProPath = match[1].replace('.less', '');
            const arr = antdProPath
              .split('/')
              .map(a => a.replace(/([A-Z])/g, '-$1'))
              .map(a => a.toLowerCase());
            return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
          }
          return localName;
        },
      },
};