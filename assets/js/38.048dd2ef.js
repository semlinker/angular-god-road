(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{147:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("本文将介绍如何使用 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-bundle-analyzer"),a("OutboundLink")],1),e._v(" 和 "),a("a",{attrs:{href:"https://github.com/danvk/source-map-explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("source-map-explorer"),a("OutboundLink")],1),e._v(" 这两款工具来分析 Angular Bundle 的大小。下面我们将使用 Github 上的 "),a("a",{attrs:{href:"https://github.com/Ismaestro/angular6-example-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("angular6-example-app"),a("OutboundLink")],1),e._v(" 这个项目来演示上述两个工具的使用案例，首先我们先来初始化  "),a("a",{attrs:{href:"https://github.com/Ismaestro/angular6-example-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("angular6-example-app"),a("OutboundLink")],1),e._v(" 这个项目。")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),a("p",[e._v("完成  "),a("a",{attrs:{href:"https://github.com/Ismaestro/angular6-example-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("angular6-example-app"),a("OutboundLink")],1),e._v(" 项目初始化之后，我们先来介绍 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-bundle-analyzer"),a("OutboundLink")],1),e._v(" 这个工具。")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Webpack Bundle Analyzer 这个工具为我们提供了交互性的 treemap 来可视化显示 webpack 打包输出文件的大小。")]),e._v(" "),a("p",[e._v("因为 angular6-example-app 项目已经默认安装了 webpack-bundle-analyzer 这个库，所以我们不需要再次安装该库，对于其它的项目来说的话，你可以在项目目录下执行下面的命令来执行安装操作：")]),e._v(" "),e._m(8),a("p",[e._v("接下来我们使用 Angular CLI 来构建项目，在构建的时候，需要添加相关参数，具体如下：")]),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),a("p",[e._v("以上命令成功运行后，控制台会输出以下信息：")]),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("建议感兴趣的同学，都自己动手实践一下。在 angular6-example-app 项目中，也为我们提供了相应的 npm script，具体如下：")]),e._v(" "),e._m(15),a("p",[e._v("要运行该命令，只需在项目根目录下执行：")]),e._v(" "),e._m(16),e._m(17),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/danvk/source-map-explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("source-map-explorer"),a("OutboundLink")],1),e._v(" 是一个工具，它使用 bundle 生成的 source map 文件来分析 bundle 的组成及各部分的大小。与 "),a("strong",[e._v("webpack bundle analyzer")]),e._v(" 类似，它也提供了可视化的方案来查看分析的结果。")]),e._v(" "),a("p",[e._v("首先我们先来在当前项目中安装 source-map-explorer：")]),e._v(" "),e._m(18),a("p",[e._v("然后在重新进行项目构建：")]),e._v(" "),e._m(19),a("p",[e._v("构建完成后，在根目录下的 dist 文件夹下会生成 main bundle 文件，这时我们可以在命令行执行下列命令来查看结果：")]),e._v(" "),e._m(20),a("p",[e._v("成功执行上述命令后，在浏览器中你将会看到以下内容：")]),e._v(" "),e._m(21),e._v(" "),a("p",[e._v("为了方便操作，我们也可以定义一个 npm script 任务来处理上述的工作：")]),e._v(" "),e._m(22),a("p",[e._v("其实除了本文介绍的两个插件之外，还有其它的第三方工具，也提供了分析 bundle 包大小的功能，比如 "),a("a",{attrs:{href:"https://chrisbateman.github.io/webpack-visualizer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-visualizer"),a("OutboundLink")],1),e._v(" 和 "),a("a",{attrs:{href:"https://webpack.github.io/analyse/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack Analyzer"),a("OutboundLink")],1),e._v("，有兴趣的同学也可以了解一下。")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"初始化-angular6-example-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-angular6-example-app","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化 angular6-example-app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("克隆 angular6-example-app")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ git clone https://github.com/Ismaestro/angular6-example-app.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("安装 angular6-example-app 依赖")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm install\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("启动开发服务器")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm start\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"webpack-bundle-analyzer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-bundle-analyzer","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack-bundle-analyzer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm i webpack-bundle-analyzer --save-dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ ng build --prod --stats-json\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("当项目构建完成后，在根目录下的 "),t("code",[this._v("dist")]),this._v(" 文件夹下会生成一个 "),t("code",[this._v("stats.json")]),this._v(" 文件，然后我们可以通过以下的命令来查看 webpack 打包文件大小信息：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ ./node_modules/.bin/webpack-bundle-analyzer dist/stats.json\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Webpack Bundle Analyzer is started at http://127.0.0.1:8888\nUse Ctrl+C to close it\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("当访问 "),t("code",[this._v("http://127.0.0.1:8888")]),this._v(" 这个地址时，你会看到以下内容：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"http://cdn.semlinker.com/webpack-bundle-analyzer.jpg",alt:"webpack-bundle-analyzer"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('"bundle-report": "ng build --prod --stats-json && webpack-bundle-analyzer dist/stats.json"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm run bundle-report\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"source-map-explorer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-map-explorer","aria-hidden":"true"}},[this._v("#")]),this._v(" source-map-explorer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm i source-map-explorer --save-dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ ng build --prod --source-map\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ node_modules/.bin/source-map-explorer dist/main.d72e9d91fd17f9fe7b8c.js\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"http://cdn.semlinker.com/source-map-explorer.jpg",alt:"source-map-explorer"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('"map-explorer": "ng build --prod --source-map && source-map-explorer \n   dist/main.d72e9d91fd17f9fe7b8c.js"\n')])])])}],!1,null,null,null);s.options.__file="ng-bundle-analyzer.md";t.default=s.exports}}]);