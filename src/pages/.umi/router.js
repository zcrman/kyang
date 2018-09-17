import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../index').default,
    "exact": true
  },
  {
    "component": () => React.createElement(require('E:/ReactProject/antd-course/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
