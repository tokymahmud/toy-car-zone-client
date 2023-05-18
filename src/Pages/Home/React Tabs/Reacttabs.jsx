import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Reacttabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
        <h1 className='text-2xl text-center	decoration-emerald-500	font-bold'>Shop By <span className='underline '>Catagory</span></h1>
         <div className="shop-by-category">
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Construction Car</Tab>
          <Tab>Regular car</Tab>
          <Tab>Toy Truck</Tab>
        </TabList>

        <TabPanel>
          <ul className="sub-category-list">
            <li><div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div></li>
            
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="sub-category-list">
            <li><div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details </button>
    </div>
  </div>
</div></li>
           
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="sub-category-list">
            <li><div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details </button>
    </div>
  </div>
</div></li>
           
          </ul>
        </TabPanel>
      </Tabs>
    </div>

    </div>
   
  );
};

export default Reacttabs;
