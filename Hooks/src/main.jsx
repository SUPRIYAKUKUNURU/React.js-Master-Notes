import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  // </StrictMode>
)
// import React, { useState } from "react";
// import Products from "./Products";
// import Cart from "./Cart";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]); // add product to cart
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Simple Shopping Cart 🛒</h2>
//       <Products addToCart={addToCart} />
//       <Cart cart={cart} />
//     </div>
//   );
// }

// export default App;



// import React from "react";

// function Cart({ cart }) {
//   return (
//     <div className="container mt-5">
//       <h3>Cart Items ({cart.length})</h3>
//       <div className="row">
//         {cart.length === 0 ? (
//           <p>No items added to cart yet.</p>
//         ) : (
//           cart.map((item, index) => (
//             <div className="col-md-3 mb-3" key={index}>
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="card-img-top p-3"
//                   style={{ height: "200px", objectFit: "contain" }}
//                 />
//                 <div className="card-body">
//                   <h6 className="text-truncate">{item.title}</h6>
//                   <p className="fw-bold">₹{item.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;



// import React, { useState, useEffect } from "react";

// import axios from "axios";

// function Products({ addToCart }) {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => setProducts(res.data));
//   }, []);

//   // Filter products by search text
//   const filteredProducts = products.filter((p) =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h3>Products</h3>

//       {/* 🔍 Search Bar */}
//       <div className="mb-3">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="form-control"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="row">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div className="col-md-3 mb-4" key={product.id}>
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="card-img-top p-3"
//                   style={{ height: "200px", objectFit: "contain" }}
//                 />
//                 <div className="card-body">
//                   <h6 className="card-title text-truncate">{product.title}</h6>
//                   <p className="fw-bold">₹{product.price}</p>
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="btn btn-success btn-sm"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center mt-3">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;

