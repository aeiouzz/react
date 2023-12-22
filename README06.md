# src4 폴더

![image](https://github.com/aeiouzz/react/assets/145514483/5f126132-4d0c-4e6b-aa23-998bcebd3d8c)
![image](https://github.com/aeiouzz/react/assets/145514483/3614efcf-39ca-45d4-b290-4b04fc931b5c)
![image](https://github.com/aeiouzz/react/assets/145514483/158b8e17-ca49-4285-a1ae-f113aec95a11)


# useEffect(()=>{},[]) 마지막 [] 배열이 비어있을 경우에는 component가 실행될 때 처음 한번만 실행된다
![image](https://github.com/aeiouzz/react/assets/145514483/c525c1b6-6b46-445a-a8be-f686728559b7)




# component가 실행될 때 처음 한 번만 실행된 후 prooducts의 값이 바뀔 때마다 useEffect가 실행됨
![image](https://github.com/aeiouzz/react/assets/145514483/b4847623-985c-4d08-b821-b0d7fbdafc9c)


# useEffect(()=>{},[products, count]) component가 실행될 때 처음 한 번 실행된 후 products와 count 중 하나라도 값이 바뀌면 useEffect가 다시 실행된다.(2개 다 바뀌어도 한 번만 실행됨)

useEffect가 종료되는 시점에서 데이터가 변경된다.
![image](https://github.com/aeiouzz/react/assets/145514483/fa710ae7-f8ab-4871-9a8d-fcc088ded25c)




```
# setNum((이전 값)=> 이전 값+1)


import { useState } from 'react';
import './App.css';


function App() {
// let num=0;
// const [num, setNum]=useState(3);

// const num=useState(3)[0];
// const setnum=useState(3)[1];

let [num, setNum]=useState(0);

return (
<div className='counter'>
  <span className='number'>{num}</span>
  <button className='button' onClick={()=>{
    // 아래 코드 3줄에서는 값의 변화가 없다.
    // 상태값은 함수가 종료 후 다시 함수가 실행될 때 반영되기 때문이다.
    // num은 모두 0이다.
    //    setNum(num+1)
    //    setNum(num+1)
    //    setNum(num+1)

    // prev는 이전 값을 가지고 있다
    //    setNum(num+1)
    // return prev+1})

    setNum((prev)=> prev+1) // 1
    // setNum((prev)=> prev+1) // 2
    // setNum((prev)=> prev+1) // 3
    // 전 값을 넣을 수 있다
  }}>1씩 증가</button>


  <form action="#">
<input type="text" />
  </form>
    </div>
  );
}

export default App;


```
