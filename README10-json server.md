# Json server 사용하기
-> 작은 서버를 만드는 것. api 소통할 때 제일 많이 쓰이는 파일 타입이다.

https://www.npmjs.com/package/json-server
```
1. npm install -g json-server
2. 루트 자리에 확장명이 .json인 파일을 만들어라
3. npx json-server --watch db.json --port 3004
(기본적으로 3000번에서 시작하는데 react가 3000을 사용하기 때문에 다른 포트 번호를 알려줘야 한다)
4. http://localhost:3004/products
(제대로 연결되었는지 확인)
```
![image](https://github.com/aeiouzz/react/assets/145514483/fac3c4d7-592d-4d7a-81cc-d7fc31a02fa0)
