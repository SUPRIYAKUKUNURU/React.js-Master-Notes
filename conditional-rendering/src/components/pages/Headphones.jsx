import react from "react";

function Headphones({data}){
    const headphones = data.filter(item=>item.productName == "Headphones")
    console.log("filtered",headphones)
    return(
        <>
        <h2 className="text-center bg-primary m-2 rounded">Headphones</h2>
        <div className="row g-4 p-4 text-center"> 
       {headphones.map((item, index) => (
        
        <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="card h-100 shadow-md  rounded-4 border-0 product-card">
            <img className="rounded" src={item.image}/>
          <h3>{item.productName}</h3>
          <h4>Price: {item.price}</h4>
          <h5>Stock: {item.stockAvailability}</h5>
         {item.stock?<button className="w-100  rounded bg-success" >Add to cart</button>:<button className="w-100 rounded bg-danger">Out of Stack</button >}
        </div>
        </div>
        
      ))}
       </div>
        </>
    )
}
export default Headphones;