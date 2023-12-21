import React, { useEffect, useState } from 'react'

const Product = () => {
  const [products,setProducts]=useState([])
  console.log(products)

useEffect(()=>{
  console.log("실행")
  fetch(`data/products.json`)
  .then(res=>res.json())
  .then(data=>{
    setProducts(data)
    console.log(products)
  })
},[])
// useEffect의 실행이 종료되고 데이터가 변경된다.
console.log(products)

  /* fetch(`data/products.json`)
  .then(res=>res.json())
  .then(data=>{
    setProducts(data)
    console.log(products)
  }) */

  return (
    <div>
    {products.map((product)=>
    <li>
     <h3>{product.name}</h3>
     <p>{product.price}</p>
    </li>
)}
    </div>
  )
}
export default Product