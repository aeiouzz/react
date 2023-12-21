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




