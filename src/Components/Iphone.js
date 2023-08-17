import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export const Phons = [
  {
    title: "iPhon 12 pro max",
    price: "1200$",
    color: "blue",
    id: "1s",
  },
  {
    title: "iPhon 13 pro max",
    price: "1500$",
    color: "black",
    id: "2s",
  },
  {
    title: "iPhon 14 pro max",
    price: "1800$",
    color: "Deep Purple",
    id: "3s",
  },
]

const Iphone = () => {

  const param = useParams()
  console.log(param);

 

  return (
    <div>
      {
        Phons.map((el)=>{
          return(
            <Link to={el.id}>              
              <h1>{el.title}</h1>
            </Link>
          )
        })
      }

      <Outlet/>
    </div>
  )
}

export default Iphone