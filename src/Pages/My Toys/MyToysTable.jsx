import React from 'react';

const MyToysTable = ({st}) => {
    const {pictureUrl,name,sellerName,sellerEmail,subCategory,price,rating,quantity,description} = st;
    return (
        <div>
                <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-12 h-12">
                <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>

      
        <td>{name}</td>
        <td>{sellerName}</td>
        <td>{sellerEmail}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>
          {description}
          
        </td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <th>
        <button className="btn btn-active btn-accent">UPDATE</button>

          <br></br>
          <button className="btn btn-active btn-secondary">DELETE</button>

        </th>
      </tr>
        </div>
    );
};

export default MyToysTable;