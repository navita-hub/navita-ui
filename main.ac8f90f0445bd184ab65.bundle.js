(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1435:function(module,exports,__webpack_require__){"use strict";__webpack_require__(61).addons.setConfig({refs:{}})},587:function(module,exports,__webpack_require__){__webpack_require__(588),__webpack_require__(936),__webpack_require__(952),__webpack_require__(1386),__webpack_require__(1388),__webpack_require__(1390),__webpack_require__(1393),__webpack_require__(1423),__webpack_require__(1428),__webpack_require__(1431),module.exports=__webpack_require__(1435)},721:function(module,exports){},936:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(576),_require=__webpack_require__(951),name=_require.name,version=_require.version;_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.addons.setConfig({theme:Object(_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__.create)({brandTitle:name+" "+version,colorSecondary:"#fba308"})})},951:function(module){module.exports=JSON.parse('{"name":"navita-design-system","beawareofchange":"change aswell scripts:build:storybook --static-dir","version":"1.0.0","distDirs":{"stencil":"dist-stencil","storybook":"dist-storybook","beawareofchange":"change aswell main,module,es2015,es2017,types,collection and .gitignore"},"main":"dist-stencil/index.cjs.js","module":"dist-stencil/index.js","es2015":"dist-stencil/esm/index.js","es2017":"dist-stencil/esm/index.js","types":"dist-stencil/index.d.ts","collection":"dist-stencil/collection/collection-manifest.json","scripts":{"npm:install":"npm install","--- development ---":"this is a divider","start":"concurrently -n storybook,stencil,proxy -c \\"bgMagenta.bold,bgBlue.bold,bgCyan.bold\\" \\"npm:watch:storybook\\" \\"npm:watch:stencil\\" \\"npm:watch:proxy\\"","watch:storybook":"start-storybook -p 3001 --ci --quiet","watch:stencil":"stencil build --dev --watch --serve --port 3002","watch:proxy":"wait-on http://localhost:3001/ && wait-on http://localhost:3002/ && node ./scripts/proxy.js","new:component":"stencil generate","--- production ---":"this is a divider","build":"run-s build:stencil build:storybook","build:stencil":"stencil build --docs","build:storybook":"build-storybook --output-dir ./dist-storybook --static-dir ./dist-stencil/stencil-storybook","--- misc ---":"this is a divider","test":"stencil test --spec --e2e --coverage","lint":"run-p lint:js lint:css","lint:js":"eslint src/**/*{.ts,.tsx}","lint:css":"stylelint \'src/**/*.style.ts\' --allow-empty-input --fix","lint:husky":"lint-staged","chromatic":"run-s build:stencil chromatic:publish","chromatic:publish":"npx chromatic --project-token <REPLACE-WITH-YOUR-TOKEN> --build-script-name build:storybook"},"husky":{"hooks":{"pre-commit":"npm run lint:husky"}},"dependencies":{"@emotion/css":"^11.0.0","@stencil/core":"^2.0.3","@stencil/sass":"^1.4.0","@storybook/web-components":"^6.1.0","lit-html":"^1.3.0"},"devDependencies":{"@babel/core":"^7.11.6","@stencil/eslint-plugin":"^0.3.1","@storybook/addon-actions":"^6.1.0","@storybook/addon-essentials":"^6.1.0","@storybook/addon-links":"^6.1.0","@storybook/addon-notes":"^5.3.21","@types/jest":"^26.0.14","@types/node":"^14.11.2","@types/puppeteer":"^3.0.2","@typescript-eslint/eslint-plugin":"^4.3.0","@typescript-eslint/parser":"^4.3.0","babel-loader":"^8.1.0","chalk":"^4.1.0","concurrently":"^5.3.0","copy-webpack-plugin":"^6.1.1","eslint":"^7.10.0","eslint-config-airbnb-typescript":"^10.0.2","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.21.2","gh-pages":"^3.1.0","http-proxy-middleware":"^1.0.5","husky":"^4.3.0","jest":"^26.4.2","jest-cli":"^26.4.2","lint-staged":"^10.4.2","node-fetch":"^2.6.1","npm-run-all":"^4.1.5","prettier":"^2.1.2","puppeteer":"^5.3.1","react-is":"^16.13.1","stylelint":"^13.7.2","stylelint-config-standard":"^20.0.0","stylelint-declaration-block-no-ignored-properties":"^2.3.0","stylelint-declaration-strict-value":"^1.6.1","stylelint-high-performance-animation":"^1.5.2","stylelint-order":"^4.1.0","ts-dedent":"^2.0.0","typescript":"^4.0.3","wait-on":"^5.2.0","write-file-webpack-plugin":"^4.5.1"},"jest":{"preset":"@stencil/core/testing"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')}},[[587,1,2]]]);