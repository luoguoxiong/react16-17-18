import React, { useState, Suspense, lazy } from 'react';
const Lazy = lazy(()=>import("./lazy"))
const Lazy2 = lazy(()=>import("./lazy2"))
const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const delay = ()=>{
    return new Promise((res)=>{
        setTimeout(() => {
            res(1)
        }, 100);
    })
  }
  console.log('App组件渲染了！');
  return (
    <div
        onClick={async (e) => {
        setTimeout(() => {
            console.log(e) 
        },0);
        setCount1(count => count + 1);
        setCount2(count => count + 1);
      }}
    >
      <div>count1： {count1}</div>
      <div>count2： {count2}</div>
      <Suspense>
        <Lazy2></Lazy2>
        <Suspense fallback="lazy...">
            <Lazy></Lazy>
        </Suspense>
      </Suspense>
    </div>
  );
};

export default App;