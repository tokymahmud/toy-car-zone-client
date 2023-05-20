import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/authProviders';
import MyToysTable from './MyToysTable';

const MyToys = () => {
   const {user} =useContext(AuthContext);
   const [ty, setty] = useState([]);

   const url = `http://localhost:5000/added?sellerEmail=${user?.email}`;
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setty(data))

   },[])

    return (
        <div>
            <h1>poruman:{ty.length}</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        Name
        </th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Category</th>
        <th>price</th>
        <th>description</th>
        <th>rating</th>
        <th>quantity</th>
      </tr>
    </thead>
    <tbody>
      {
        ty.map(st=><MyToysTable key={st._id}
        st={st}
        ></MyToysTable>
        )
      
      }
     
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default MyToys;