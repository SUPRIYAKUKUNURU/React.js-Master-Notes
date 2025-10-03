import React from 'react'
import data from './data.js'
function Products() {
  return (
    <div className='row' >
        {data.map((item,index)=><div className='col-4'style={{backgroundColor:"lightblue"}}>
            <img src={item.image} alt="" className='w-100'/>
            Category:<h5> {item.category}</h5>
            <h3>{item.productName}</h3>
            <h5>Stock:{item.stockAvailability}</h5>
            {item.stock ?<button className='bg-success'>Add to cart</button>:<button className='bg-danger'>Out of stock</button>}
            {item.stock<=5 && item.stockAvailability>0 && <p className='text-danger'>left {item.stockAvailability} only</p>}
        </div>)}
    </div>
  )
}

export default Products