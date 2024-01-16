![image](https://github.com/aeiouzz/react/assets/145514483/9a78e5ca-1388-4506-abb5-acf88a090315)


# Navigate 사용법 어떤 페이지로 강제 이동(리다이렉트)
:react-router-dom의 component
![image](https://github.com/aeiouzz/react/assets/145514483/08890afb-94c2-40fb-a6a4-fe81302badf4)

# useParams
# react-router-dom의 hook

```
http://localhost:3000/product/1
```

# url 주소에서 파라미터는 제일 뒤에 있는 1이라는 숫자이다. id값이 들어와 있다.
# 파라미터 값을 읽어와야 할 때 useParams hook 
![image](https://github.com/aeiouzz/react/assets/145514483/9dc3e2c6-6edd-486a-a62e-0d52ae5b627f)

# 문법 -> ?
![image](https://github.com/aeiouzz/react/assets/145514483/af6663b6-73d1-4deb-989c-78ba234e60a8)

product?.img product.img를 출력하라


# 쿼리 스트링
쿼리 스트링은 웹 주소 에 추가적인 매개변수를 전달하는 방법 중 하나입니다.
쿼리스트링은 url은 끝에 "?" 문자로 시작하며, 이후에 이름=값 형태의 매개변수들이 "&" 문자로 구분되어 나열됩니다.

navigate(`/?q=${ketword}`) -> 쿼리스트링(query string) 입력하기
