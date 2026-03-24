import React, { useState } from 'react';
import { useEffect } from 'react';
import { productList } from '../services/productServices';

function Products() {
  
  useEffect(()=>{
    getProductList();
  },[])

  const getProductList=async()=>{
    let products=await(productList(30));
    console.log(products)
  }
  
  
  const [count, setCount] = useState(0);

  return (
    <h1
      style={{
        background: "black",
        color: "white", // optional, for visibility
        padding: "10px"
      }}
    >
      Product List
    </h1>
  );
}

export default Products;