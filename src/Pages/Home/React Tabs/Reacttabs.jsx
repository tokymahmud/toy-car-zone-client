import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Reacttabs = () => {
  const [toyInfo, settoyInfo]=useState([]);
  useEffect(()=>{
    fetch("../../../../public/toy.json")
    .then((response)=>response.json())
    .then((data)=>settoyInfo(data));
    
    


  },[]);



  // const [activeTab, setActiveTab] = useState(0);

  // const handleTabSelect = (index) => {
  //   setActiveTab(index);
  // };

  return (
    <div>
        <h1 className='text-2xl text-center	decoration-emerald-500	font-bold'>Shop By <span className='underline '>Catagory</span></h1>
        <div className='flex items-center	'>
        {toyInfo?.categories?.map(category => (
        <Tabs key={category._id}>
          <TabList>
            <Tab>{category.name}</Tab>
          </TabList>
          <TabPanel>
            {category.items.map(item => (
              <div className="card" key={item.toycode}>
                <img src={item.picture} alt={item.toyName} />
                <h2>{item.toyName}</h2>
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating}</p>
                <button  type="button" className="btn btn-primary"><Link >View Details</Link> </button>

              </div>
            ))}
          </TabPanel>
        </Tabs>
      ))}

        </div>
        

    </div>
   
  );
};

export default Reacttabs;
