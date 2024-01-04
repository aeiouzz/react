# input 값이 바뀌어도 APP JS는 다시 실행되지 않는다 -> 이런 것을 REACT로부터 제어받지 않는다고 해서 uncontroled component라고 한다.
# input안의 내용이 useState의 상태값과 매칭되도록 맞추어 주어야 한다.

# input 태그에서는 onChange={(e)=>{setName(e.target.value)}}
# e 이벤트 받음 상태의 값을 변경하기 위해 setName 함수를 사용하며
# 사용자가 입력한 값을 상태값을 적용하기 위해서 e.target.value를 사용한다ㅎ

![image](https://github.com/aeiouzz/react/assets/145514483/8cce39f3-b373-44bf-9f62-fc8ca3ab7df3)

# <form onSubmit={(e)=>{e.preventDefault()}}
# form은 새로 고침이 일어나는 속성을 가지고 있다. 그래서 이를 막기 위해 e.preventDefault()를 사용함

# input >> onChange
# form >> onSubmit
