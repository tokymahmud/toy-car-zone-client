import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/authProviders';
import AllToysTable from './AllToysTable';


const AllToys = () => {
    const {user} =useContext(AuthContext);
    const [toys, settoys] = useState([]);

    const url = `https://toy-car-zone-server-eosin.vercel.app/added?limit=20`;
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>settoys(data))

   },[url]);

    return (
        <div>
            <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
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
<button className="btn btn-wide">Show More</button>
        </div>
    );
};

export default AllToys;