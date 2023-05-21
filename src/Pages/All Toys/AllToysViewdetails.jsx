import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToysViewdetails = () => {
    const details = useLoaderData();
    const {pictureUrl,name,subCategory,price,rating,description}=details;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={pictureUrl} alt="Movie"/></figure>
  <div className="card-body">
    <h1 className="card-title">Name:{name}</h1>
    <p >Category:{subCategory}</p>
    <p >Price:{price}</p>
    <p >rating{rating}</p>
    <p>About:{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default AllToysViewdetails;