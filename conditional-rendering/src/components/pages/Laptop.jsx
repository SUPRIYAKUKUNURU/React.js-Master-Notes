import React from 'react'

function Laptop({data}) {
    const laptop=data.filter(item.productName== "Laptop")
    console.log("filtered",Laptop)
  return (
    <div>Laptop</div>
  )
}

export default Laptop