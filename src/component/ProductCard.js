import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
      <img src={item?.img}/>
      <span className='title'>{item?.title}</span>
      <span className='price'>#{item?.price}</span>
      <div className='info'>
      {item?.new == true ?  <span className='new'>NEW</span> : ""}
      {item?.choice == true?  <span className='best'>BEST</span> :  ""}
      </div>
    </div>
  )
}

export default ProductCard
