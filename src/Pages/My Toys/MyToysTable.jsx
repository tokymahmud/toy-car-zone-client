import React from 'react';
import UpdateModal from './UpdateModal';

const MyToysTable = ({st, handleDelete,handleUpdate,status}) => {
    const {_id,pictureUrl,name,sellerName,sellerEmail,subCategory,price,rating,quantity,description} =st;

    

   
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
       {
            status === 'CONFIRM' ? <span className='font-bold text-primary'>Confirmed</span>:

       <button onClick={()=>handleUpdate(_id)}  className="btn btn-active btn-accent">UPDATE</button>
    }

          <br></br>
          <button onClick={()=>handleDelete(_id)} className="btn btn-active btn-secondary">DELETE</button>
         




        </th>
      </tr>
        </div>
    );
};

export default MyToysTable;