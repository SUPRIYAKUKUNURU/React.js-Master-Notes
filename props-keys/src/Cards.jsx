import React from "react";

function Cards({ Emogies }) {
  return (
    <>
    <div className="row">
      {Emogies.map((item, index) => (
        <div className="card col-3 " style={{ width: "18rem" }} key={index}>
          <img
            src={item.image}
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
           
          </div>
        </div>
        
    
      ))}
      ; </div>
    </>
  );
}

export default Cards;
