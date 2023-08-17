import "./information.css"
import React from 'react'
import { Phons } from './Iphone'
import { useParams } from "react-router-dom"



const Information = () => {
  
    const param = useParams()
    console.log(param);

    const findPhone = Phons.find((el)=> el.id === param.param)

  return (
    <div className='info'>
        <h1>{findPhone.title}</h1>
        <h1>{findPhone.price}</h1>
        <h1>{findPhone.color}</h1>
     
    </div>
  )
}

export default Information