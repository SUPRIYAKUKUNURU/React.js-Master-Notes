import React from 'react'
import data from './data.js'

function Products() {
  return (
    <div className='row g-4 p-4'>
      {data.map((item, index) => 
        <div 
          key={index} 
          className='col-12 col-sm-6 col-md-3' // 4 per row on medium+
        >
          <div 
            className='card h-100 shadow-lg rounded-4 border-0 product-card'
            style={{ backgroundColor: "#e6f2ff", transition: "transform 0.3s ease" }}
          >
            <img 
              src={item.image} 
              alt="" 
              className='card-img-top rounded-top-4' 
              style={{ height: "200px", objectFit: "contain", background: "#fff" }}
            />
            <div className='card-body text-center'>
              <h6 className="text-muted mb-1">Category</h6>
              <h5 className="fw-bold text-primary">{item.category}</h5>
              <h4 className="mb-2">{item.productName}</h4>
              <h6 className="mb-3">Stock: {item.stockAvailability}</h6>

              {item.stock ? 
                <button className='btn btn-success w-100 mb-2 rounded-pill fw-semibold shadow-sm'>
                  Add to cart
                </button> 
                : 
                <button className='btn btn-danger w-100 mb-2 rounded-pill fw-semibold shadow-sm'>
                  Out of stock
                </button>
              }

              {item.stock <= 5 && item.stockAvailability > 0 && 
                <p className='text-danger fw-bold mb-0'>⚠ Only {item.stockAvailability} left!</p>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
