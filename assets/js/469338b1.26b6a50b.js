"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1493],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),o=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=o(a),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return a?l.createElement(k,i(i({ref:t},s),{},{components:a})):l.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var l=a(1163),n=(a(9496),a(9613));const r={title:"Webpack chain \u7528\u6cd5",authors:[],tags:["webpack"]},i=void 0,u={permalink:"/2022/06/28/webpack-chain-usage",source:"@site/blog/2022-06-28/webpack-chain-usage.mdx",title:"Webpack chain \u7528\u6cd5",description:"\u5b98\u65b9\uff1ahttps://github.com/neutrinojs/webpack-chain",date:"2022-06-28T00:00:00.000Z",formattedDate:"2022\u5e746\u670828\u65e5",tags:[{label:"webpack",permalink:"/tags/webpack"}],hasTruncateMarker:!0,authors:[],frontMatter:{title:"Webpack chain \u7528\u6cd5",authors:[],tags:["webpack"]},prevItem:{title:"webpack\u6253\u5305\u4f18\u5316\uff0cjs\u5206\u5305\uff0ccss\u5206\u5305",permalink:"/2022/06/28/webpack-build-better"},nextItem:{title:"UI\u6846\u67b6\u6574\u7406",permalink:"/2022/06/24/5bac9503-08f9-4c29-af48-ff5a57f96a84"}},p={authorsImageUrls:[]},o=[{value:"ChainedSet",id:"chainedset",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"\u5b50\u9009\u9879\u5217\u8868",id:"\u5b50\u9009\u9879\u5217\u8868",level:3},{value:"resolve extensions",id:"resolve-extensions",level:4},{value:"ChainedMap",id:"chainedmap",level:2},{value:"\u5b50\u9879\u5217\u8868",id:"\u5b50\u9879\u5217\u8868",level:3},{value:"devServer",id:"devserver",level:4},{value:"devServer.allowedHosts",id:"devserverallowedhosts",level:4},{value:"module",id:"module",level:4},{value:"module.rules",id:"modulerules",level:4},{value:"output",id:"output",level:4},{value:"resolve",id:"resolve",level:4},{value:"resolve.alias",id:"resolvealias",level:4},{value:"resolve.modules",id:"resolvemodules",level:4},{value:"plugin",id:"plugin",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5408\u5e76",id:"\u5408\u5e76",level:3},{value:"entry",id:"entry",level:3},{value:"output",id:"output-1",level:3},{value:"alias",id:"alias",level:3},{value:"plugins",id:"plugins",level:3},{value:"\u65b0\u589e",id:"\u65b0\u589e",level:4},{value:"\u79fb\u9664",id:"\u79fb\u9664",level:4},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:4}],s={toc:o},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5b98\u65b9\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/neutrinojs/webpack-chain"},"https://github.com/neutrinojs/webpack-chain")),(0,n.kt)("p",null,"\u4e2d\u6587\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans"},"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans")),(0,n.kt)("h2",{id:"chainedset"},"ChainedSet"),(0,n.kt)("h3",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"add(value)")," \u6dfb\u52a0/\u8ffd\u52a0 \u7ed9Set\u672b\u5c3e\u4f4d\u7f6e\u4e00\u4e2a\u503c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prepend(value)")," \u6dfb\u52a0 \u7ed9Set\u5f00\u59cb\u4f4d\u7f6e\u4e00\u4e2a\u503c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clear()")," \u6e05\u9664"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delete(value)")," \u5220\u9664\u67d0\u4e2a\u503c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"has(value)")," \u68c0\u6d4bSet\u4e2d\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u503c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"values(): Array")," \u8fd4\u56deSet\u4e2d\u503c\u7684\u6570\u7ec4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"merge(arr: Array)")," \u8fde\u63a5\u7ed9\u5b9a\u7684\u6570\u7ec4\u5230 Set \u5c3e\u90e8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"batch(handler: (chain: ChainedSet) => void)")," \u5bf9\u5f53\u524d\u914d\u7f6e\u4e0a\u4e0b\u6587\u6267\u884c\u51fd\u6570"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"when(condition: boolean, whenTruthy: chain: ChainedSet => void, whenFalsy: chain: ChainedSet => void)")," \u6761\u4ef6\u6267\u884c\u4e00\u4e2a\u51fd\u6570\u53bb\u7ee7\u7eed\u914d\u7f6e\uff0c\u5f53\u6761\u4ef6\u4e3a\u771f\uff0c\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"whenTruthy"),"\uff0c\u5f53\u6761\u4ef6\u4e3a\u5047\uff0c\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"whenFalsy"))),(0,n.kt)("h3",{id:"\u5b50\u9009\u9879\u5217\u8868"},"\u5b50\u9009\u9879\u5217\u8868"),(0,n.kt)("h4",{id:"resolve-extensions"},"resolve extensions"),(0,n.kt)("h2",{id:"chainedmap"},"ChainedMap"),(0,n.kt)("h3",{id:"\u5b50\u9879\u5217\u8868"},"\u5b50\u9879\u5217\u8868"),(0,n.kt)("h4",{id:"devserver"},"devServer"),(0,n.kt)("p",null,"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728 ChainedMap \u4e0a\u8bbe\u7f6e\u4e00\u4e2a\u503c\u7684 \u901f\u8bb0\u65b9\u6cd5\ndevServer.hot(true);\n\n// \u4e0a\u8ff0\u65b9\u6cd5\u7b49\u6548\u4e8e:\ndevServer.set('hot', true);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"filename"),(0,n.kt)("li",{parentName:"ul"},"headers"),(0,n.kt)("li",{parentName:"ul"},"host"),(0,n.kt)("li",{parentName:"ul"},"hot"),(0,n.kt)("li",{parentName:"ul"},"hotOnly"),(0,n.kt)("li",{parentName:"ul"},"https"),(0,n.kt)("li",{parentName:"ul"},"inline"),(0,n.kt)("li",{parentName:"ul"},"lazy"),(0,n.kt)("li",{parentName:"ul"},"open"),(0,n.kt)("li",{parentName:"ul"},"proxy"),(0,n.kt)("li",{parentName:"ul"},"public"),(0,n.kt)("li",{parentName:"ul"},"publicPath"),(0,n.kt)("li",{parentName:"ul"},"setup"),(0,n.kt)("li",{parentName:"ul"},"watchOptions")),(0,n.kt)("h4",{id:"devserverallowedhosts"},"devServer.allowedHosts"),(0,n.kt)("h4",{id:"module"},"module"),(0,n.kt)("h4",{id:"modulerules"},"module.rules"),(0,n.kt)("h4",{id:"output"},"output"),(0,n.kt)("p",null,"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.output\n  .path('dist')\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"filename"),(0,n.kt)("li",{parentName:"ul"},"jsonpFunction"),(0,n.kt)("li",{parentName:"ul"},"library"),(0,n.kt)("li",{parentName:"ul"},"libraryExport"),(0,n.kt)("li",{parentName:"ul"},"libraryTarget"),(0,n.kt)("li",{parentName:"ul"},"path"),(0,n.kt)("li",{parentName:"ul"},"publicPath")),(0,n.kt)("h4",{id:"resolve"},"resolve"),(0,n.kt)("p",null,"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.resolve\n  .symlinks(true)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cacheWithContext")),(0,n.kt)("h4",{id:"resolvealias"},"resolve.alias"),(0,n.kt)("p",null,"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.resolve.alias\n  .set('@', path.resolve(__dirname, 'src'))\n")),(0,n.kt)("h4",{id:"resolvemodules"},"resolve.modules"),(0,n.kt)("h4",{id:"plugin"},"plugin"),(0,n.kt)("p",null,"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config\n  .plugin('hot')\n  .use(webpack.HotModuleReplacementPlugin)\n")),(0,n.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,n.kt)("h3",{id:"\u5408\u5e76"},"\u5408\u5e76"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.merge({ devtool: 'source-map' })\n")),(0,n.kt)("h3",{id:"entry"},"entry"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.entry('main')\n  .add('./src/main.js') \n")),(0,n.kt)("h3",{id:"output-1"},"output"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.output\n  .path('dist')\n  .libraryTarget('umd')\n")),(0,n.kt)("h3",{id:"alias"},"alias"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.resolve.alias\n  .set('@', path.resolve(__dirname, 'src'))\n")),(0,n.kt)("h3",{id:"plugins"},"plugins"),(0,n.kt)("h4",{id:"\u65b0\u589e"},"\u65b0\u589e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.plugin('HtmlWebpackPlugin')\n.use(HtmlWebpackPlugin, [\n  {\n    template: path.resolve(__dirname, './src/index.html'),\n    minify: {\n      collapseWhitespace: true,\n      minifyJS: true,\n      minifyCSS: true,\n      removeComments: true,\n      removeEmptyAttributes: true,\n      removeRedundantAttributes: true,\n      useShortDoctype: true\n    } \n  }\n]);\n")),(0,n.kt)("h4",{id:"\u79fb\u9664"},"\u79fb\u9664"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.plugins.delete('HtmlWebpackPlugin');\n")),(0,n.kt)("h4",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.plugin('HtmlWebpackPlugin').tap((args) => [\n  {\n    ...(args[0] || {}),\n    template: path.resolve(__dirname, './main.html'),\n  }\n]);\n")))}d.isMDXComponent=!0}}]);