import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
function Products() {

    const[products,setProducts] = useState([]);
    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
  .then(response =>setProducts(response.data))

    },[])
   return (
  
      <div className="container mt-4">
          <h1>Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className=" card-img-top  p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                <h6 className="card-title text-truncate">{product.title}</h6>
                  <p className="card-text fw-bold">₹{product.price}</p>
                  <a href="#" className="btn btn-primary btn-sm">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Products 