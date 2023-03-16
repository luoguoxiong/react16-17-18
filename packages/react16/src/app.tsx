import React, { useState } from 'react';

const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const delay = ()=>{
    return new Promise((res)=>{
        setTimeout(() => {
            res(1)
        }, 1000);
    })
  }
  React.useEffect(()=>{
    document.addEventListener("click",()=>{
        // setCount1(count => count + 1);
        // setCount2(count => count + 1);
    })
  },[])
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
    </div>
  );
};

export default App;