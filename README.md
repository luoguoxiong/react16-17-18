# react16-17-18版本的区别

## 16 vs 17
### 1.jsx 转换

React 16原理

babel-loader会预编译JSX为React.createElement(...)

React 17原理

React 17中的 JSX 转换不会将 JSX 转换为 React.createElement，

而是自动从 React 的 package 中引入新的入口函数并调用。

另外此次升级不会改变 JSX 语法，旧的 JSX 转换也将继续工作。

## 17 vs 18
### 1.批量更新

react18之前，仅支持react合成事件会进行批量更新

react18之后，支持异步、原生事件、合成事件批量更新

### 2. Suspense
react17 Suspense fullback必须传

react18 Suspense支持服务端渲染 fullback可以为空

### 3.新增的并发特性
useTransition/useDeferredValue：可以设置然后更新

useId 支持同一个组件在客户端和服务端生成相同的唯一的 ID 避免 hydration 的不兼容