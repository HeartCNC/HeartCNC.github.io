# 连连看

> 算法参考链接：https://blog.csdn.net/qq_41551359/article/details/82983513

## 原始参数配置

```js
const options = {
  el: '#game',
  row: 6, // 棋盘的行数
  col: 6, // 棋盘的列数
  imgs: [ // 棋盘中物体渲染的图片路径
    'assets/block/1.png',
    'assets/block/2.png',
    'assets/block/3.png',
    'assets/block/4.png',
    'assets/block/5.png',
    'assets/block/6.png',
    'assets/block/7.png',
    'assets/block/8.png'
  ]
}
```

## 游戏中转换的状态

```js
export const GameState = {
  options: {
    width: 0,
    height: 0,
    // 棋盘四边加1，为连接线的空间
    // 等于 row + 2
    rows: 0,
    // 等于 col + 2
    cols: 0
  },
  // 棋盘
  chess: {
    // 棋盘的宽度
    get width() {
      return Math.max(GameState.options.width, 300)
    },
    // 棋盘的高度
    get height() {
      return GameState.chess.width * GameState.options.cols / GameState.options.rows
    }
  },
  // 棋子
  chesspiece: {
    // 棋子的宽度
    get width() {
      return GameState.chess.width / GameState.options.rows
    },
    // 棋子的高度
    get height() {
      return GameState.chess.height / GameState.options.cols
    }
  }
}
```

## 获取棋子的乱序矩阵

1. 12

## 棋盘渲染

## 棋子连接路径