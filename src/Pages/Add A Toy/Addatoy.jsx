import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Providers/authProviders';

const Addatoy = () => {
  const { user } = useContext(AuthContext);

  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState(user?.name || '');
  const [sellerEmail, setSellerEmail] = useState(user?.email || '');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const addedtoys= {
        pictureUrl,
        name,
        sellerName,
        sellerEmail,
        subCategory,
        price,
        rating,
        quantity,
        description
      };

      console.log(addedtoys);

      fetch('http://localhost:5000/added',{
        method:'POST',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(addedtoys)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert('added succesfully')
        }
      })

  };

  return (
    <div>
      <h2 className='text-center text-3xl'>Add A Toy</h2>
      <form onSubmit={handleSubmit} >
        <label>
          Picture URL of the toy:
          <input
            type="text"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Seller Name:
          <input
            type="text"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            required
          />
        </label>
        <label>
          Seller Email:
          <input
            type="email"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Construction Car">Construction Car</option>
            <option value="Regular Car">Regular Car</option>
            <option value="Toy Truck">Toy Truck</option>
          </select>
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </label>
        <label>
          Available Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <label>
          Detail Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addatoy;
