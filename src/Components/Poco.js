import React from 'react'
import { useNavigate } from 'react-router-dom'

const Poco = () => {
  const navigate = useNavigate()
  return (
    <>
      <img src='https://cdn-files.kimovil.com/default/0008/67/thumb_766870_default_big.jpg'/>
      <button onClick={()=>{navigate("/iphone")}}>HOME</button>
    </>
  )
}

export default Poco