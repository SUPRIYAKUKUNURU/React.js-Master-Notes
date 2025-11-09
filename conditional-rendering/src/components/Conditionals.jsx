import React from 'react'

function Conditionals() {

// / if-else:
          // const stock = "true";
          // if(stock)
          // return<button className="bg-success">Stock Available</button>
          // else
          //   return<button className="bg-danger">Stock Unavailable</button>

  // else-if:

          //   const stock =0;
          //   let components=true;
          //   if(stock)
          //     components=<button className="bg-success">Available</button>
          //     else
          //       components=<button className="bg-danger">Out of Stock</button>

          //     return(
          //       <>
          //       {components}
          //       </>
          //     )

//ternary operator
        // const stock = true;
        // return(
        // <>

        // {stock?<button className="bg-success">Available</button>:<button className="bg-danger">Unavailable</button>}
        // </>
        // )
       
        
        //short -circuit operator
        let stockAvailability =3
        return(
                <div>
                       {stockAvailability<=5 && <p className='text-danger'>left  {stockAvailability} only</p>}
                </div>
        )
     } 


export default Conditionals