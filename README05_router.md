# 💛 react-router-dom 설치하기 : 페이지를 나누는 역할을 하는 것
```
https://reactrouter.com/en/main
```

# 1. 설치하기
```
npm install react-router-dom
```

```
</BrowserRouter>
import { BrowserRouter } from 'react-router-dom';
```


# <BrowserRouter> : 모든 react UI 전체를 BrowserRouter가 감싸주어야 한다.
![image](https://github.com/aeiouzz/react/assets/145514483/ba70d5ca-3ada-4859-bc31-224dbdef0204)


# page를 만들고 그 페이지의 경로를 router에 등록 -> Routes, Route
![image](https://github.com/aeiouzz/react/assets/145514483/861c03c4-dddc-4b6d-9439-3918aadbd54e)

# RESTFUL (representation state transfer)
# restful routes는 url 패턴을 말한다
* get 데이터 가져올 때 사용하는 패턴
* post : 새로운 데이터 만들 때 사용하는 패턴
* put : 기존 데이터를 수정할 때 사용하는 패턴
* delete : 데이터를 삭제할 때 사용하는 패턴

# 내가 선택한 상품의 상세 페이지로 이동하고자 한다면
/subjects/:id 방법을 사용하자!

이것은 파라미터라는 뜻이다.




![image](https://github.com/aeiouzz/react/assets/145514483/3b5287d4-fce9-4edc-87e2-5ee92331f30a)


![image](https://github.com/aeiouzz/react/assets/145514483/f4f2d9af-073f-4a9f-aacc-e87faf4057eb)



# 링크로 연결해서 페이지로 갈 때
link는 a태그로 변환된다. 라우터 간에 이동할 수 있게 도와주는 링크다.
![image](https://github.com/aeiouzz/react/assets/145514483/dd104309-7b99-45af-9c16-4f83ea0839b3)


클릭하면 about으로 넘어감


![image](https://github.com/aeiouzz/react/assets/145514483/4af9b704-9978-468f-b3d5-b79a24ce8896)


클릭하면 homepage로 넘어감


![image](https://github.com/aeiouzz/react/assets/145514483/520b72f6-8a60-45ee-8643-755bafc202f2)



# 버튼을 클릭하면
![image](https://github.com/aeiouzz/react/assets/145514483/50ca2415-8944-4db8-9b83-2c493405272b)
![image](https://github.com/aeiouzz/react/assets/145514483/c94bbc7b-451c-42f3-8c8f-449eebc0a940)
![image](https://github.com/aeiouzz/react/assets/145514483/43b13657-c30e-4f57-b93c-24d489b32b71)
![image](https://github.com/aeiouzz/react/assets/145514483/c13b0782-ebf6-4d7e-8ebb-99114dba8bec)

