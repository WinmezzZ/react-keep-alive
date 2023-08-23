# React Keep Alive

Support for caching removed router page when switching between page(支持在路由之间进行切换时缓存被移除的路由页面)

## Usage
```diff layout.tsx
- import { Outlet } from 'react-router-dom';
+ import { KeepAlive } from 'react-keep-alive';

  export default function Layout() {
    return (
      <div>
        <h1>App Header</h1>
-       <Outlet />
+       <KeepAlive />
      </div>
    );
  }
```