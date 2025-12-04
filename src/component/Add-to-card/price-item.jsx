import React from 'react'

function PriceItem({ text, total }) {
  return (
    <div className='flex justify-between my-4'>
      <span>{text}</span>
      <span>৳ {total}</span>
    </div>
  )
}

export default PriceItem
