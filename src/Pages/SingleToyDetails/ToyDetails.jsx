import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const ToyDetail =useLoaderData();
    const{picture,toyName,sellerName,sellerEmail,price,rating,availableQuantity,description} = ToyDetail;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h1 className="card-title">{toyName}</h1>
    <p>Seller Name:{sellerName}</p>
    <p>Seller Email:{sellerEmail}</p>
    <p>Price:{price}</p>
    <p>Rating:{rating}</p>
    <p>Available quantity:{availableQuantity}</p>

    <p>Description:{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default ToyDetails;