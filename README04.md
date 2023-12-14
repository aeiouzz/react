# react에서는 데이터는 변할 수 있는 값이며 변할 때마다 UI를 변경해 달라고(화면을 다시 그려달라고) react한테 알려야 한다. 그럴 때 사용하는 것이 useState()이다. 

```
const [num, setNum]=useState(0)
이 데이터가 변할 수 있는 값 -> num
num을 변하게 하는 함수 -> setNum
함수를 이용하여 num를 변경한다.
useState(0)의 0은 num의 초기값이다.
```

![image](https://github.com/aeiouzz/react/assets/145514483/3bf1e3bd-a6e7-4270-a513-83d22aeb45cd)



!!괄호 조심!!
![image](https://github.com/aeiouzz/react/assets/145514483/39126b2d-8fdb-42e4-88ea-b83ce3186ae4)




# 부분적으로 값 받기
![image](https://github.com/aeiouzz/react/assets/145514483/41a6be89-98a7-46ea-8a1b-e2d427ea934b)


출력 ->
![image](https://github.com/aeiouzz/react/assets/145514483/54a2b132-ebea-4606-9390-180abfe562bf)




# 구조분해
```
import React from 'react';

const Profile = ({img,name,title,isNew}) => {
  // || -> 또는 A || B 둘 중에 하나라도 true이면 true
  // && -> 그리고 A && B 둘 중에 하나라도 false면 false
  // console.log(props)
  // const img=props.img;
  // const name=props.name;
  // const title=props.title; 
  // const isNew=props.isNew; 

  // 구조분해 destructure
  // const {img,name,title,isNew}=props;


  return(
  <div className='profile'>
    <img src={img} alt="avatar"/>
    {/* {props.isNew?<span className="new">신입</span>:""} */}
    {isNew && <span className="new">신입</span>}
    <h2>{name}</h2>
    <p>{title}</p>
  </div>
  );
};
export default Profile
```




#
```
import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';


// useState라는 함수를 통해서 react에게 값이 변했음을 알려주는 방법(useState는 React가 제공하는 React hook(훅)) 
function App() {
  let counter = 0;
// const num = useState(0)[0];
// const setNum=useState(0)[1];

const [num,setNum]=useState(0);
// 0은 매개변수 num의 state의 초기값이 0이다.
// [초기값인 0, 초기값을 변화시키는 함수]
// state를 바꾸면 UI를 다시 랜더링한다.
// 함수가 끝날 때 실행이 되는 것이다.
  const increase = function(){
    counter=counter + 1;
    setNum(num + 1);
  console.log(counter);
  console.log("num : " + num);
  // state는 함수가 끝나면 바뀌기 때문에 아직 바뀌기 전 상태이다.
  };
  return (
  <>
    <div>{`num=${num}`}</div>
    <div>{`counter=${counter}`}</div>
    <button onClick={increase}>클릭</button>
  </>
  )
}
export default App;
```
