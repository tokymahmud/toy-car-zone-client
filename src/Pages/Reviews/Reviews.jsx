import React from 'react';

const Reviews = () => {
    return (
        <div className='mt-9'>
            <div className="flex flex-col w-full">
  <div className="grid  card bg-base-300 rounded-box place-items-center"> <h1>Reviewes</h1><br></br>
  <h2>Md. Shobuj</h2><br></br>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur sunt accusamus, explicabo commodi sapiente aliquid inventore ex iure nemo!</p>
  <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>
  </div> 
  <div className="divider"></div> 
  <div className="grid  card bg-base-300 rounded-box place-items-center"><h1>Page review</h1><br></br>
  <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
  </div>
</div>
        </div>
    );
};

export default Reviews;