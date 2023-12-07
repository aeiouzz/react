
# 🎀 JSX 문법
https://ko.legacy.reactjs.org/docs/introducing-jsx.html


- 컴포넌트의 return()에서는 반드시 하나의 태그로 싸여있어야 한다.
- 태그 대신 <> </> fragment를 사용할 수 있다.
- class명을 className="class명"으로 써야 한다.
- javaScript 코드를 JSX 문법 안에서 사용해야 할 때는 {javaScript 코드}로 써야 한다.

  
![image](https://github.com/aeiouzz/react/assets/145514483/a9f25aaa-eb38-4a07-b9ec-5a1596d790a5)
![image](https://github.com/aeiouzz/react/assets/145514483/e46b724b-3045-48fb-9ed8-f8fc7583835a)



- {}을 사용하지 않으면 변수가 문자 그대로 출력된다.


![image](https://github.com/aeiouzz/react/assets/145514483/a5290c6d-b9ff-4af5-b74c-41170049d91b)
![image](https://github.com/aeiouzz/react/assets/145514483/cb8f0515-65f3-48c9-84ef-35b36d8b7cfa)


- 인라인 스타일로 css를 작성할 때 => {{}} / 밖의 {}는 자바스크립트를 사용한다는 의미로 해석, 안의 {}는 객체라고 해석 
- <div style={{width:"300px",height:"200px"}}>추가하기</div>


```

function App() {
  const name = "강아지";
  return (
    <>
    <div className="App">
    <p> {`${name} 시작하기`} </p>
    </div>
    <div style={{width:"300px",height:"200px"}}>추가하기</div>
    </>
  );
}

```


```
function App() {
  const name = "봉달이";
  return (
    <>
    <h1 className='dog'>{name} 안녕 </h1>
    <h1 className='dog'>{`${name} 안녕!!`}</h1>
    </>
  );
}

출력 ->
봉달이 안녕
봉달이 안녕!!
```


```
function App() {
  const name = "봉달이";
  const list = ["기침", "감기", "약"]
  return (
    <>
    <h1 className='dog'>{name} 안녕 </h1>
    <h1 className='dog'>{`${name} 안녕!!`}</h1>
    <ul>
      <li>
        기침
      </li>
      <li>
        감기
      </li>
      <li>
        약
      </li>
    </ul>
    <ul>
{/* {list.map((item)=>{
return <li>{item}</li>;
})} */}
{list.map((item)=> (<li>{item}</li>))}
    </ul>
    <img style={{width:"500px",height:"500px"}}
    src='https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/qkurl8m3/b6d36c937b384522bfce27d8902d5600.jpg' alt='img'></img>
    </>
  );
}

출력 =>

```
![image](https://github.com/aeiouzz/react/assets/145514483/9fdfd486-cd54-423e-8103-8d85b9169cba)





