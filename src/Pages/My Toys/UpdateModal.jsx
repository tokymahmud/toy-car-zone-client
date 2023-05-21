import React, { useState } from 'react';

const UpdateModal = ({ isOpen, onClose, toy, handleUpdate }) => {
  const [newPrice, setNewPrice] = useState(toy.price);
  const [newQuantity, setNewQuantity] = useState(toy.quantity);
  const [newDescription, setNewDescription] = useState(toy.description);

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(toy._id, newPrice, newQuantity, newDescription);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Toy Information</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Price:
                <input type="number" value={newPrice} onChange={handlePriceChange} required />
              </label>
              <label>
                Quantity:
                <input type="number" value={newQuantity} onChange={handleQuantityChange} required />
              </label>
              <label>
                Description:
                <textarea value={newDescription} onChange={handleDescriptionChange} required></textarea>
              </label>
              <button type="submit">Update</button>
              <button onClick={onClose}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateModal;
