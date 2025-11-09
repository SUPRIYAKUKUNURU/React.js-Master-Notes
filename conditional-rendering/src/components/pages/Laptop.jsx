import React from "react";

function Laptop({ data }) {
  const laptop = data.filter((item) => item.productName == "Laptop");
  // console.log("filtered",laptop)
  // const containerStyle = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(4,1fr)",
  //   gap: "10px",
  //   padding: "30px",
  // };

  return (
    <>
      <h1 className="text-center bg-primary m-2 p-0 rounded">
        Laptop Products
      </h1>
      <div className="row g-4 p-4">
        {laptop.map((item, index) => (
          <div key={index}
          className="col-12 col-sm-6 col-md-3">
            <div className="card h-100 shadow-md rounded-4 border-0 product-card">
          
              <img
              className="rounded"
                src={item.image}
                alt={item.productName}
               
              />
              <div style={{textAlign:"center"}}>
              <h3>{item.productName}</h3>
              {/* <h4>{item.category}</h4> */}
              <h4>Price: {item.price}</h4>
              <h5>Stock:{item.stockAvailability}</h5>
              {item.stock?<button className="w-100  rounded bg-success" >Add to cart</button>:<button className="w-100 rounded bg-danger">Out of Stack</button >}
            </div>
            </div>
            </div>
  
        ))}
      </div>
    </>
  );
}

export default Laptop;
