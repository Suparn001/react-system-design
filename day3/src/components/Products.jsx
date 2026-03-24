import React, { useState } from 'react';
import { useEffect } from 'react';
import { productList } from '../services/productServices';
import ErrorToast from './ErrorToast';

function Products() {
  
const [message,setMessage] =useState("");

const [displayError,setDisplayError] = useState(false)

  useEffect(()=>{
    getProductList();
  },[])

  const getProductList=async()=>{
    try{
      let products=await(productList());
      console.log(products)
    }catch(e){
      console.log(e.message)
      setMessage(e.message);
      setDisplayError(true)
    }
  }
  
  const handleCloseToast=()=>{
    setMessage("")
    setDisplayError(false)
  }

  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        style={{
          background: "black",
          color: "white", // optional, for visibility
          padding: "10px"
        }}
      >
        Product List
      </h1>
      {displayError && 
        <ErrorToast message={message} onClose={handleCloseToast} />
      }
    </>

  );
}

export default Products;