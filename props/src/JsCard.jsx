import React from 'react'

function JsCard(props) {
   return (
    
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  );
}

export default JsCard