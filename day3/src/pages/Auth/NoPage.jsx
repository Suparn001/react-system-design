import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <h2>Pag not found</h2>
      <button onClick={()=>navigate("/login")}>
        Go to login page
      </button>
    </div>
  )
}

export default NoPage