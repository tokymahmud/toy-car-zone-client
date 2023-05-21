import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({st}) => {
    const {_id,name,sellerName,subCategory,price,quantity} =st;

    return (
        <div>
        <tr>




<td>{name}</td>
<td>{sellerName}</td>
<td>{subCategory}</td>
<td>${price}</td>

<td>{quantity}</td>
<th>
<Link to={`/added/${_id}`}>

<button onClick={()=>viewDetails(_id)} className="btn btn-active btn-secondary">View Details</button>
</Link>



</th>
</tr>
</div>
    );
};

export default AllToysTable;