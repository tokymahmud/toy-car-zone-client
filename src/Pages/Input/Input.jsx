import React from 'react';

const Input = () => {
    return (
        <div>
            <h1 className='text-center	text-5xl	'>Add your email<br></br>
            for getting update about <br></br>
            <span className='text-red-600	font-extrabold	'>Discount!!</span></h1>
            <p className='text-center'>Get upto <span className='text-red-600  text-3xl	font-extrabold	'>30%</span>off</p>
            
            <div>
            <div className="indicator  align-middle items-center	">
  <div className="indicator-item indicator-bottom">
    <button className="btn btn-primary">Add</button>
  </div> 
  <div className="card border">
    <div className="card-body">
    <input type="email" placeholder="email" className="input input-bordered" />
 
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Input;