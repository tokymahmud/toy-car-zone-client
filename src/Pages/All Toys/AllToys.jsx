import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/authProviders';
import AllToysTable from './AllToysTable';


const AllToys = () => {
    const {user} =useContext(AuthContext);
    const [toys, settoys] = useState([]);

    const url = `http://localhost:5000/added`;
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>settoys(data))

   },[url]);

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        Name
        </th>
        <th>Seller Name</th>
        <th>Category</th>
        <th>price</th>
        <th>quantity</th>
      </tr>
    </thead>
    <tbody>
      {
        toys.map(st=><AllToysTable key={st._id}
        st={st}
       
        ></AllToysTable>
        )
      
      }
     
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default AllToys;