"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[450],{6029:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/1","metadata":{"permalink":"/1","source":"@site/blog/1.mdx","title":"1","description":"o123","date":"2022-06-23T02:22:29.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"1"},"nextItem":{"title":"w2123123123123123123123123","permalink":"/2"}},"content":"## o123\\r\\n\\r\\n### o123\\r\\n\\r\\n### o123\\r\\n\\r\\n## o123\\r\\n\\r\\n### o123\\r\\n\\r\\n## o123"},{"id":"/2","metadata":{"permalink":"/2","source":"@site/blog/2.mdx","title":"w2123123123123123123123123","description":"123123","date":"2022-06-23T02:22:29.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[{"label":"a","permalink":"/tags/a"},{"label":"b","permalink":"/tags/b"}],"truncated":false,"authors":[],"frontMatter":{"title":"w2123123123123123123123123","tags":["a","b"]},"prevItem":{"title":"1","permalink":"/1"},"nextItem":{"title":"design","permalink":"/design"}},"content":"123123"},{"id":"/design","metadata":{"permalink":"/design","source":"@site/blog/design.md","title":"design","description":"\u5207\u56fe","date":"2022-06-23T02:22:29.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[],"truncated":false,"authors":[],"frontMatter":{},"prevItem":{"title":"w2123123123123123123123123","permalink":"/2"},"nextItem":{"title":"log","permalink":"/log"}},"content":"## \u5207\u56fe\\r\\n\\r\\n- \u6709\u900f\u660e\u50cf\u7d20\u6216\u8005\u5f52\u5c5e\u5207\u56fe\u7684\u5bfc\u51fa\u4e3apng\uff0c\u957f\u56fe\uff0c\u6d77\u62a5\u5bfc\u51fa\u4e3ajpg\\r\\n\\r\\n- \\r\\n\\r\\n## \u8bbe\u8ba1\\r\\n\\r\\n- \u5b89\u5168\u533a\\r\\n  - \u5168\u5c4f\u5c55\u793a\u9700\u8981\u8003\u8651\\r\\n\\r\\n- \u5b57\u4f53\\r\\n  - \u901a\u5e38\u7528\u7cfb\u7edf\u5b57\u4f53\\r\\n  - \u7279\u6b8a\u7ed9\u6e90\u6587\u4ef6\u6700\u597d\u662fttf\\r\\n\\r\\n- \u9634\u5f71\\r\\n- \u63cf\u8fb9\\r\\n- \u6e10\u53d8\\r\\n- \u5c3a\u5bf8\\r\\n  - \u79fb\u52a8\u7aef\\r\\n  - PC-WEB\u7aef\\r\\n  - PC-Desktop\\r\\n  - \u7279\u6b8a\\r\\n\\r\\n## \u4ea4\u4e92\\r\\n\\r\\n\\r\\n\\r\\n### \u89c4\u8303\\r\\n\\r\\nPC\u7aef\u6700\u5c0f\u5b57\u4f53 12px\\r\\n\\r\\n\u79fb\u52a8\u7aef\u8bbe\u8ba1\u7a3f750\\r\\n\\r\\n\u79fb\u52a8\u7aef\u5f39\u7a97\u4e3b\u4f53\u6700\u5927\u9ad8\u5ea61116"},{"id":"/log","metadata":{"permalink":"/log","source":"@site/blog/log.md","title":"log","description":"URL\u94fe\u63a5\u53d6\u53c2\u6570\u95ee\u9898","date":"2022-06-23T02:22:29.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[],"truncated":false,"authors":[],"frontMatter":{},"prevItem":{"title":"design","permalink":"/design"},"nextItem":{"title":"ops","permalink":"/ops"}},"content":"URL\u94fe\u63a5\u53d6\u53c2\u6570\u95ee\u9898\\r\\n\\r\\n`http://localhost:8083/?channel_code#/home`\\r\\n\\r\\n\u53d6\u53c2\u6570channel_code \u7684\u7c7b\u578b\u662f `undefined`\\r\\n\\r\\n\u7ecf\u8fc7 `unescape(channel_code)` \u53d8\u6210\u4e86 `string` = `\'undefined\'`\\r\\n\\r\\n`http://localhost:8083/?channel_code=#/home`\\r\\n\\r\\n\u53d6\u53c2\u6570channel_code \u7684\u7c7b\u578b\u662f `\'\'`\\r\\n\\r\\n\\r\\n\\r\\n```js\\r\\nlet { channel_code } = toParams()\\r\\n\\r\\nchannel_code = (channel_code === \'undefined\' || typeof channel_code === \'undefined\') ? 0 : channel_code\\r\\n```"},{"id":"/ops","metadata":{"permalink":"/ops","source":"@site/blog/ops.md","title":"ops","description":"ts","date":"2022-06-23T02:22:29.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[],"truncated":false,"authors":[],"frontMatter":{},"prevItem":{"title":"log","permalink":"/log"},"nextItem":{"title":"vscode-kbd","permalink":"/vscode-kbd"}},"content":"ts\\r\\n\\r\\n\\r\\n\\r\\n```ts\\r\\ninterface IParamGeneric<T, U> {\\r\\n    type: T,\\r\\n    api: U,\\r\\n    options?: ObjectString,\\r\\n    success?: (result: any) => void,\\r\\n    fail?: (result: any) => void\\r\\n}\\r\\n\\r\\ntype TParam = IParamGeneric<\'mixin-sdk\', TApiMixin>\\r\\n  | IParamGeneric<\'main-app-sdk\', TApiMainApp>\\r\\n  | IParamGeneric<\'mixin-payment\', TApiMixinPayment>\\r\\n```"},{"id":"/vscode-kbd","metadata":{"permalink":"/vscode-kbd","source":"@site/blog/vscode-kbd.md","title":"vscode-kbd","description":"vscode \u5e38\u7528\u5feb\u6377\u952e\u901f\u89c8","date":"2022-06-23T02:22:29.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[],"truncated":false,"authors":[],"frontMatter":{},"prevItem":{"title":"ops","permalink":"/ops"},"nextItem":{"title":"\u4ece0\u52301\uff0c\u57fa\u4e8etinypng\u538b\u7f29\u56fe\u7247\u7684CLI\u5de5\u5177","permalink":"/2022/05/20/make-cli-for-img-compress"}},"content":"## vscode \u5e38\u7528\u5feb\u6377\u952e\u901f\u89c8\\r\\n\\r\\n### \u4ee3\u7801\u64cd\u4f5c\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>D</kbd> \u9009\u4e2d\u5f53\u524d\u5355\u8bcd\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>L</kbd> \u9009\u4e2d\u5f53\u524d\u884c\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>G</kbd> \u8df3\u8f6c\u5230\u6307\u5b9a\u884c\\r\\n\\r\\n#### \u63d2\u5165\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd> \u5411\u4e0a\u63d2\u5165\u4e00\u7a7a\u884c\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>Enter</kbd> \u5411\u4e0b\u63d2\u5165\u4e00\u7a7a\u884c\\r\\n\\r\\n#### \u79fb\u52a8\\r\\n\\r\\n<kbd>Alt</kbd>  + <kbd>Up</kbd> \u5411\u4e0a\u79fb\u52a8\\r\\n\\r\\n<kbd>Alt</kbd>  + <kbd>Down</kbd> \u5411\u4e0b\u79fb\u52a8\\r\\n\\r\\n#### \u590d\u5236\\r\\n\\r\\n<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Up</kbd> \u5411\u4e0a\u590d\u5236\u4e00\u884c\\r\\n\\r\\n<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Down</kbd> \u5411\u4e0b\u590d\u5236\u4e00\u884c\\r\\n\\r\\n#### \u5c55\u793a\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>\\\\\\\\</kbd>  \u5206\u5c4f\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>[</kbd>  \u6298\u53e0\u4ee3\u7801\u5757\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>]</kbd>  \u5c55\u5f00\u4ee3\u7801\u5757\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>[</kbd>  \u5411\u5de6\u7f29\u8fdb\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>]</kbd>  \u5411\u53f3\u7f29\u8fdb\\r\\n\\r\\n### \u7f16\u8f91\u5668\\r\\n\\r\\n#### \u5c55\u793a\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>\\\\\\\\</kbd>  \u5206\u5c4f\\r\\n\\r\\n#### \u5149\u6807\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>Home</kbd>  \u79fb\u5230\u6587\u4ef6\u5934\\r\\n\\r\\n<kbd>Ctrl</kbd> + <kbd>Eed</kbd>  \u79fb\u5230\u6587\u4ef6\u5c3e\\r\\n\\r\\n<kbd>F8</kbd> \u8df3\u5230\u4e0b\u4e00\u4e2a `Error` \u6216 `Warning`"},{"id":"/2022/05/20/make-cli-for-img-compress","metadata":{"permalink":"/2022/05/20/make-cli-for-img-compress","source":"@site/blog/2022-05-20-make-cli-for-img-compress.mdx","title":"\u4ece0\u52301\uff0c\u57fa\u4e8etinypng\u538b\u7f29\u56fe\u7247\u7684CLI\u5de5\u5177","description":"\u61d2\u764c\u53d1\u4f5c\uff0c\u5236\u4f5c\u4e00\u4e2a\u538b\u7f29\u56fe\u7247\u7684CLI\u5de5\u5177\u5427\uff01","date":"2022-05-20T00:00:00.000Z","formattedDate":"2022\u5e745\u670820\u65e5","tags":[{"label":"CLI","permalink":"/tags/cli"}],"truncated":false,"authors":[],"frontMatter":{"title":"\u4ece0\u52301\uff0c\u57fa\u4e8etinypng\u538b\u7f29\u56fe\u7247\u7684CLI\u5de5\u5177","tags":["CLI"]},"prevItem":{"title":"vscode-kbd","permalink":"/vscode-kbd"}},"content":"\u61d2\u764c\u53d1\u4f5c\uff0c\u5236\u4f5c\u4e00\u4e2a\u538b\u7f29\u56fe\u7247\u7684CLI\u5de5\u5177\u5427\uff01\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nGitlab \u5730\u5740\uff1ahttps://gitlab.inrice.top/longxiaojian/iojs\\r\\n\\r\\n## \u4f7f\u7528\u65b9\u6cd5\\r\\n\\r\\n\u62c9\u53d6\u6e90\u4ee3\u7801\u5230\u672c\u5730\uff0c\u5e76\u5b89\u88c5\u4f9d\u8d56\uff0c\u901a\u8fc7\u5168\u5c40\u8f6f\u94fe\u63a5\u540e\uff0c\u540e\u9762\u5982\u679c\u6709\u65b0\u4ee3\u7801\u7684\u8bdd\uff0c\u76f4\u63a5\u62c9\u53d6\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u66f4\u65b0\u4f7f\u7528\u3002\u81ea\u5df1\u6709\u65b0\u7684\u60f3\u6cd5\uff0c\u6216\u8005\u5f00\u53d1\u4e00\u9879\u4fbf\u5229\u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u5f00\u53d1\uff0c\u5b9e\u65f6\u66f4\u65b0\u5230\u5168\u5c40\u3002\\r\\n\\r\\n### CLI\u5168\u5c40\u8f6f\u94fe\u63a5\\r\\n\\r\\n```bash\\r\\nnpm link\\r\\n```\\r\\n\\r\\n:::note\\r\\n\\r\\n`npm link` - \u521b\u5efa\u8f6f\u94fe\u63a5\uff0c\u7c7b\u4f3c\u4e8e\u5feb\u6377\u65b9\u5f0f\uff0c\u76f8\u5f53\u4e8e\u5168\u5c40\u5b89\u88c5\uff0c\u6bd4\u5982\\r\\n\\r\\n\u672c\u5730\u5f00\u53d1\u5305 `module`\\r\\n\\r\\n```bash title=\\"module\\"\\r\\nnpm link\\r\\n```\\r\\n\\r\\n\u672c\u5730\u9879\u76ee `project`\\r\\n\\r\\n```bash title=\\"project\\"\\r\\nnpm link module\\r\\n```\\r\\n\\r\\n\u6b64\u65f6\uff0c\u4f9d\u8d56 `module` \u88ab\u5b89\u88c5\u5230 `project` \u9879\u76ee\u4e2d\\r\\n\\r\\n`npm unlink` - \u79fb\u9664\u5f53\u524d\u5305\u5168\u5c40\u8f6f\u94fe\u63a5\\r\\n\\r\\n`npm unlink module` - \u5f53\u524d\u9879\u76ee\u79fb\u9664\u5305\u8f6f\u94fe\u63a5\\r\\n\\r\\n:::\\r\\n\\r\\n### \u53c2\u6570\\r\\n\\r\\n- `-c`\uff0c`--compress` \u6267\u884c\u538b\u7f29\\r\\n\\r\\n- `-i`\uff0c`--init` \u521d\u59cb\u5316\u914d\u7f6e\u6587\u4ef6\uff0c\u5f53\u9879\u76ee\u662f\u4e8c\u6b21\u5f00\u53d1\uff0c\u5176\u4e2d\u7684\u56fe\u7247\u53ef\u80fd\u5df2\u7ecf\u88ab\u538b\u7f29\u8fc7\u4e86\uff0c\u56e0\u6b64\u7528\u8be5\u547d\u4ee4\u6765\u521d\u59cb\u5316\u914d\u7f6e\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u5904\u7406\u3002\u4e0e `-c` \u4e92\u65a5\uff0c\u4f18\u5148\u5904\u7406 `-i`\\r\\n\\r\\n- `-d`\uff0c`--dir` \u6307\u5b9a\u76ee\u5f55\uff0c\u9ed8\u8ba4\u662f\u9879\u76ee**\u6839\u76ee\u5f55**\uff0c\u81ea\u52a8\u5ffd\u7565 `node_modules` \u4e2d\u7684\u56fe\u7247\\r\\n\\r\\n- `-s`\uff0c`--size` \u6307\u5b9a\u5904\u7406\u6587\u4ef6\u5927\u5c0f\u7684\u6700\u5c0f\u8303\u56f4\uff0c\u5355\u4f4d\uff1a**k**\uff0c\u9ed8\u8ba4\u662f**0**\\r\\n\\r\\n### \u793a\u4f8b\\r\\n\\r\\n- \u5bf9\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u56fe\u7247\u538b\u7f29\\r\\n\\r\\n```bash\\r\\nio image -c\\r\\n```\\r\\n\\r\\n- \u538b\u7f29\u6307\u5b9a\u6587\u4ef6\u5939\u7684\u56fe\u7247\\r\\n\\r\\n```bash\\r\\nio image -c -d src/assets\\r\\n```\\r\\n\\r\\n- \u538b\u7f29 `src` \u6587\u4ef6\u5939\u4e0b\u8d85\u8fc7 `20k` \u7684\u56fe\u7247\\r\\n\\r\\n```bash\\r\\nio image -c -d src -s 20\\r\\n```\\r\\n\\r\\n## \u5b9e\u73b0\u8fc7\u7a0b\\r\\n\\r\\n### \u76ee\u5f55\u7ed3\u6784\\r\\n\\r\\n```bash\\r\\niojs\\r\\n\u2502\\r\\n\u251c\u2500bin\\r\\n\u2502  \u2514\u2500io.js\\r\\n\u2502\\r\\n\u251c\u2500scripts\\r\\n\u2502  \u251c\u2500image.js\\r\\n\u2502  \u2514\u2500global.js\\r\\n\u2502\\r\\n\u251c\u2500utils\\r\\n\u2502  \u251c\u2500index.js\\r\\n\u2502  \u251c\u2500shared.js\\r\\n\u2502  \u2514\u2500tinypng.js\\r\\n\u2502\\r\\n\u2514\u2500package.json\\r\\n```\\r\\n\\r\\n### package.json\\r\\n\\r\\n```json title=\\"package.json\\"\\r\\n{\\r\\n  \\"name\\": \\"iojs\\",\\r\\n  \\"version\\": \\"1.0.0\\",\\r\\n  \\"bin\\": {\\r\\n    \\"io\\": \\"./bin/io.js\\"\\r\\n  },\\r\\n  \\"dependencies\\": {\\r\\n    \\"chalk\\": \\"~4.1.2\\",\\r\\n    \\"commander\\": \\"~8.3.0\\",\\r\\n    \\"glob\\": \\"~7.2.0\\",\\r\\n    \\"js-yaml\\": \\"~4.1.0\\",\\r\\n    \\"request\\": \\"~2.88.2\\"\\r\\n  },\\r\\n  \\"devDependencies\\": {\\r\\n    \\"@types/node\\": \\"17.0.6\\"\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n:::note\\r\\n\\r\\n`commander` - \u547d\u4ee4\u5de5\u5177\\r\\n\\r\\n`glob` - \u6587\u4ef6\u8bfb\u53d6\\r\\n\\r\\n`js-yaml` - \u672c\u5730\u6587\u4ef6\u914d\u7f6e\\r\\n\\r\\n:::\\r\\n\\r\\n### \u5b89\u88c5\u4f9d\u8d56\\r\\n\\r\\n```bash\\r\\nnpm i\\r\\n```\\r\\n\\r\\n### \u5c06npm\u5305\u94fe\u63a5\u5230\u5168\u5c40\\r\\n\\r\\n```bash\\r\\nnpm link\\r\\n```\\r\\n\\r\\n### \u5165\u53e3\u6587\u4ef6\\r\\n\\r\\n```js title=\\"bin/io.js\\"\\r\\n#!/usr/bin/env Node\\r\\n\\r\\nconsole.log(\'hi\')\\r\\n```\\r\\n\\r\\n:::note\\r\\n\\r\\n\u8fd9\u91cc\u8981\u6ce8\u610f\u5f00\u5934\u7684 #!/usr/bin/env node\u8fd9\u4e2a\u8bed\u53e5\u5fc5\u987b\u52a0\u4e0a\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u8ba9\u7cfb\u7edf\u770b\u5230\u8fd9\u4e00\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u6cbf\u7740\u8be5\u8def\u5f84\u53bb\u67e5\u627e node \u5e76\u6267\u884c\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u517c\u5bb9 Mac \uff0c\u786e\u4fdd\u53ef\u6267\u884c\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n### \u6d4b\u8bd5CLI\\r\\n\\r\\n\u6253\u5f00\u7ec8\u7aef <kbd>Ctrl</kbd> + <kbd>`</kbd> \uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6309\u4e0b\u56de\u8f66\\r\\n\\r\\n```bash\\r\\nio\\r\\n```\\r\\n\\r\\n\u8f93\u51fa\uff1a\\r\\n\\r\\n```bash\\r\\nhi\\r\\n```\\r\\n\\r\\n## \u7f16\u5199\u6838\u5fc3\u4ee3\u7801\\r\\n\\r\\n### \u5b9e\u73b0\u8fc7\u7a0b\\r\\n\\r\\n1. \u8bfb\u53d6\u56fe\u7247\u8def\u5f84 `filepaths`\\r\\n2. \u8bfb\u53d6\u672c\u5730\u914d\u7f6e `lockfile`\uff0c\u6839\u636e\u6587\u4ef6\u7684\u4fee\u6539\u65f6\u95f4\uff0c\u8fc7\u6ee4\u51fa\u5f85\u538b\u7f29\u7684\u5217\u8868 `paths`\\r\\n3. \u4e0a\u4f20\u56fe\u7247\u5230tinypng\uff0c\u4e0b\u8f7d\u56fe\u7247\u5230\u672c\u5730\\r\\n4. \u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\\r\\n\\r\\n`imagemin-lock.yaml` \u914d\u7f6e\u6587\u4ef6\u4e2d\u5b58\u50a8\u7684\u662f\u56fe\u7247\u4fee\u6539\u65f6\u95f4\u6233\uff0ckey\u4e3a\u6587\u4ef6\u76f8\u5bf9\u4e8e\u9879\u76ee\u7684\u76f8\u5bf9\u8def\u5f84\uff0cvalue\u4e3a\u6587\u4ef6\u4fee\u6539\u65f6\u95f4\u6233\\r\\n\\r\\n\u5229\u7528\u914d\u7f6e\u6765\u6bd4\u5bf9\u672c\u5730\u6587\u4ef6\uff0c\u662f\u4e3a\u4e86\u9632\u6b62\u56fe\u7247\u91cd\u590d\u538b\u7f29\\r\\n\\r\\n### \u76ee\u5f55\u73af\u5883\\r\\n\\r\\n```js title=\\"utils/shared.js\\"\\r\\nconst path = require(\'path\')\\r\\n// \u5f53\u524d\u6267\u884c\u811a\u672c\u7684\u76ee\u5f55\\r\\nconst workspaceDir = process.cwd()\\r\\n// CLI \u5b58\u653e\u7684\u76ee\u5f55\\r\\nconst cliDir = path.join(__dirname, \'../\')\\r\\n\\r\\nmodule.exports = {\\r\\n  cliDir,\\r\\n  workspaceDir\\r\\n}\\r\\n```\\r\\n\\r\\n### \u8f85\u52a9\u65b9\u6cd5\\r\\n\\r\\n```js title=\\"utils/index.js\\"\\r\\nconst path = require(\'path\')\\r\\nconst fs = require(\'fs\')\\r\\nconst { glob } = require(\'glob\')\\r\\nconst { workspaceDir } = require(\'./shared\')\\r\\n\\r\\n/**\\r\\n * \u76f8\u5bf9\u9879\u76ee\u6839\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\\r\\n */\\r\\nexports.rootPathResolve = function (...p) {\\r\\n  return path.join(workspaceDir, ...p)\\r\\n}\\r\\n\\r\\n/**\\r\\n * \u8bfb\u53d6\u672c\u5730\u6587\u4ef6\u8def\u5f84\u5217\u8868\\r\\n */\\r\\nexports.readfile = async function (baseUrl, rule) {\\r\\n  return new Promise((resolve, reject) => {\\r\\n    const p = path.join(baseUrl, `**/*.@(${rule})`)\\r\\n    glob(p, {}, function (err, files) {\\r\\n      err ? reject(new Error(err)) : resolve(files)\\r\\n    })\\r\\n  })\\r\\n}\\r\\n\\r\\n/**\\r\\n * \u5199\u6587\u4ef6\u5230\u672c\u5730\\r\\n */\\r\\nexports.writeBlob = function (path, contents) {\\r\\n  return new Promise((resolve, reject) => {\\r\\n    fs.writeFile(path, contents, \'binary\', (err) => {\\r\\n      err ? reject(err) : resolve()\\r\\n    })\\r\\n  })\\r\\n}\\r\\n```\\r\\n\\r\\n### \u6307\u4ee4\u53c2\u6570\u89e3\u6790\\r\\n\\r\\n```js title=\\"bin/io.js\\"\\r\\n#!/usr/bin/env Node\\r\\n\\r\\nconst commander = require(\'commander\')\\r\\ncommander.version(require(\'../package.json\').version)\\r\\n\\r\\ncommander\\r\\n  .command(\'image\')\\r\\n  .option(\'-c, --compress\', \'\u538b\u7f29\')\\r\\n  .option(\'-d, --dir <char>\', \'\u6307\u5b9a\u76ee\u5f55\')\\r\\n  .action(function (options) {\\r\\n    require(\'../scripts/image\')(options)\\r\\n  })\\r\\n\\r\\ncommander.parse(process.argv)\\r\\n```\\r\\n\\r\\n### \u6307\u4ee4\u6267\u884c\\r\\n\\r\\n```js title=\\"scripts/image.js\\"\\r\\nconst fs = require(\'fs\')\\r\\nconst yaml = require(\'js-yaml\')\\r\\nconst tinypng = require(\'../utils/tinypng\')\\r\\nconst { rootPathResolve, writeBlob, readfile } = require(\'../utils\')\\r\\nconst chalk = require(\'chalk\')\\r\\nconst lockfile = rootPathResolve(\'imagemin-lock.yaml\')\\r\\nconst maxSpread = 10\\r\\nconst spreadPool = []\\r\\n\\r\\nfunction getRelativePath(base, path) {\\r\\n  return path.replace(new RegExp(`^${base}/`), \'\')\\r\\n}\\r\\n\\r\\nmodule.exports = async function (options) {\\r\\n  // \u6839\u76ee\u5f55\u524d\u7f00\\r\\n  const prefix = rootPathResolve(\'\').replace(/\\\\\\\\/g, \'/\')\\r\\n  // \u8f93\u5165\u76ee\u5f55\\r\\n  const inputUri = rootPathResolve(options.dir || \'\')\\r\\n  // \u8bfb\u53d6\u6240\u6709\u56fe\u7247\u8def\u5f84\\r\\n  const filepaths = await readfile(inputUri, \'png|jpg|jpeg|webp\')\\r\\n\\r\\n  // \u4e0d\u5b58\u5728\u5219\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\\r\\n  if (!fs.existsSync(lockfile)) {\\r\\n    fs.writeFileSync(lockfile, \'\')\\r\\n  }\\r\\n\\r\\n  const minCompressSize = Number(options.size)\\r\\n  const content = fs.readFileSync(lockfile)\\r\\n  // \u65e7\u914d\u7f6e\\r\\n  const mtimeOld = yaml.load(content) || {}\\r\\n  // \u6700\u65b0\u914d\u7f6e\\r\\n  const mtimeCur = {}\\r\\n\\r\\n  // \u5f00\u59cb\u6bd4\u8f83\\r\\n  filepaths.forEach(item => {\\r\\n    // \u6587\u4ef6\u4fe1\u606f\\r\\n    const stat = fs.statSync(item)\\r\\n    const path = getRelativePath(prefix, item)\\r\\n    \\r\\n    if (stat.size < minCompressSize * 1024) {\\r\\n      return\\r\\n    }\\r\\n    mtimeCur[path] = stat.mtimeMs\\r\\n  })\\r\\n\\r\\n  // \u6839\u636e\u6bd4\u8f83\u4e4b\u540e\u9700\u8981\u538b\u7f29\u7684\u8def\u5f84\u5217\u8868\\r\\n  const paths = []\\r\\n\\r\\n  // \u83b7\u53d6\u5dee\u5f02\u6587\u4ef6\u8def\u5f84\\r\\n  for (const k in mtimeCur) {\\r\\n    const mtimeMsCurItem = mtimeCur[k]\\r\\n    const mtimeMsOldItem = mtimeOld[k]\\r\\n    if (!mtimeMsOldItem || mtimeMsOldItem !== mtimeMsCurItem) {\\r\\n      paths.push(k)\\r\\n    }\\r\\n  }\\r\\n\\r\\n  let total = 0\\r\\n  let failPath = []\\r\\n  const len = paths.length\\r\\n\\r\\n  const updateLock = () => {\\r\\n    fs.writeFileSync(lockfile, yaml.dump(mtimeOld))\\r\\n    if (total === len) {\\r\\n      if (failPath.length) {\\r\\n        console.log(chalk.red(failPath.join(\'\\\\n\')))\\r\\n        console.log(chalk.red(`Fail: ${failPath.length}.`))\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  const updatePool = (index) => {\\r\\n    if (queue.length <= 0) {\\r\\n      return\\r\\n    }\\r\\n    spreadPool[index] = queue.shift()\\r\\n    spreadPool[index](index)\\r\\n  }\\r\\n\\r\\n  const queue = paths.map((item) => {\\r\\n    return async (index) => {\\r\\n      const path = getRelativePath(prefix, item)\\r\\n      try {\\r\\n        const contents = await tinypng(item)\\r\\n        await writeBlob(item, contents)\\r\\n        mtimeOld[path] = fs.statSync(item).mtimeMs\\r\\n        console.log(`${item}: success ${++total}/${len}`)\\r\\n      } catch (error) {\\r\\n        failPath.push(path)\\r\\n        console.log(chalk.red(error.message || error))\\r\\n        console.log(`${item}: fail ${++total}/${len}`)\\r\\n      }\\r\\n      updateLock()\\r\\n      updatePool(index)\\r\\n    }\\r\\n  })\\r\\n\\r\\n  spreadPool.push(...queue.splice(0, maxSpread))\\r\\n  spreadPool.forEach((item, index) => item(index))\\r\\n}\\r\\n```\\r\\n\\r\\n## \u6ce8\u610f\u4e8b\u9879\\r\\n\\r\\n1. \u4e3a\u4e86\u907f\u514d\u5728\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e3a\u7f51\u7edc\u7b49\u95ee\u9898\uff0c\u8ba9\u914d\u7f6e\u672a\u53ca\u65f6\u66f4\u65b0\uff0c\u6240\u4ee5\u6bcf\u6b21\u5904\u7406\u5b8c\u6210\u4e00\u5f20\u56fe\uff0c\u90fd\u66f4\u65b0\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u3002\u56e0\u4e3a\u5199\u6587\u4ef6\u9891\u7e41\uff0c\u6240\u4ee5\u5728\u6e90\u4ee3\u7801\u4e2d\u7684 `updateLock` \u52a0\u4e86\u9632\u6296\u3002\\r\\n\\r\\n2. \u540c\u65f6\u5e76\u884c\u5904\u7406\u4e0a\u4f20\u591a\u5f20\u56fe\u7247\u65f6\uff0c\u7531\u4e8e\u63a5\u53e3\u7684\u9650\u5236\u4f1a\u62a5 `Too many files uploaded at once.`\uff0c\u56e0\u6b64\u4ee3\u7801\u4e2d\u5229\u7528\u4e86\u5e76\u53d1\u6c60\u6765\u63a7\u5236\u8bf7\u6c42\u91cf\uff0c\u6765\u63d0\u9ad8\u5bb9\u9519\u7387\u3002\\r\\n\\r\\n3. \u5982\u679c\u78b0\u5230\u957f\u65f6\u95f4\u6ca1\u6709\u53cd\u5e94\uff0c\u53ef\u80fd\u8bf7\u6c42\u5d29\u4e86\uff0c\u5f88\u6b63\u5e38\uff0c\u53ef\u4ee5\u76f4\u63a5 <kbd>Ctrl</kbd> + <kbd>C</kbd> \u7ed3\u675f\u8fdb\u7a0b\uff0c\u91cd\u65b0\u8fd0\u884c\u5373\u53ef\u3002\\r\\n\\r\\n4. \u5982\u679c\u78b0\u5230\u591a\u6b21 `ETIMEDOUT` \u53ef\u80fd\u662f `tinypng` \u5d29\u4e86\uff0c\u5f88\u6b63\u5e38\uff0c\u7b49\u5b83\u4e00\u4f1a\u513f\u5427\uff0c\u8fc7\u4f1a\u513f\u91cd\u65b0\u8fd0\u884c\u5373\u53ef\u3002\\r\\n\\r\\n5. \u7531\u4e8e\u53ef\u80fd\u5b58\u5728\u6587\u4ef6\u5220\u9664\u7684\u60c5\u51b5\uff0c\u6240\u4ee5\u914d\u7f6e\u4f1a\u79fb\u9664\u4e0d\u5b58\u5728\u7684\u8def\u5f84\uff0c\u4ee5\u4e0b\u64cd\u4f5c\u9700\u8981\u6ce8\u610f\\r\\n\\r\\n```bash\\r\\nio image -c -d src/assets\\r\\n```\\r\\n\\r\\n\u6b64\u65f6\u914d\u7f6e\u4e2d\u662f `src/assets` \u7684\\r\\n\\r\\n```bash\\r\\nio image -c -d src/assets/img\\r\\n```\\r\\n\\r\\n\u6b64\u65f6\u914d\u7f6e\u4f1a\u8986\u76d6\u662f `src/assets/img`"}]}')}}]);