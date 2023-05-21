import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/authProviders';
import MyToysTable from './MyToysTable';
import UpdateModal from './UpdateModal';

const MyToys = () => {
   const {user} =useContext(AuthContext);
   const [ty, setty] = useState([]);

   const url = `http://localhost:5000/added?sellerEmail=${user?.email}`;
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setty(data))

   },[url]);
   const handleDelete = id =>{
    const proceed =confirm('Do you want to delete this toy?');
    if(proceed){
        fetch(`http://localhost:5000/added/${id}`, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                
                alert('deleted successfull');
                const remaining = ty.filter(st=>st._id!==id);
                setty(remaining);
            }
        })

    }
}

const handleUpdate =id =>{
    fetch(`http://localhost:5000/added/${id}`, {
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
           const remaining = ty.filter(st=>st._id!==id);
           const updated =ty.find(st=>st._id==id);
           updated.status ='CONFIRM'
           const newupdate =[updated,...remaining];
           setty(newupdate);

        }
    }
    )

}

  

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
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
         

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