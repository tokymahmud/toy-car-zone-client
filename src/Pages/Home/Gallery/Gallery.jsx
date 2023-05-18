import React from 'react';

const Gallery = () => {
    return (
        <div>
             <h1 className='text-2xl text-center	'>Picture Gallery</h1>
             <p>You can find various toy car pictures here. There are different varities of toys to chose from. so explore it now!</p>

<div className='flex space-x-4'>
    <div>
        <h1 className='text-2xl italic text-center	'>Lookout Amazing <br></br><span className='text-red-700'>Toys</span> for kids!</h1>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Find One</button>
        
    </div>
    <div>
    <div className="h-96 carousel carousel-vertical rounded-box">
<div className="carousel-item h-full">
<img src="https://img.freepik.com/free-vector/boy-driving-mini-car-toy-white-background_1308-76150.jpg?w=740&t=st=1684347562~exp=1684348162~hmac=02a487c2900bd312680515a87d81740fdd77def4e9c89a463c4597c0fec969aa" />
</div> 
<div className="carousel-item h-full">
<img src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=996&t=st=1684347483~exp=1684348083~hmac=7600faea974f3ba2fe7d0e178e583b8424cba4636edcab1b0f303181546365e0" />
</div> 
<div className="carousel-item h-full">
<img src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=996&t=st=1684347522~exp=1684348122~hmac=6ad297e2cbf08a1a7a79cca71c7c9cb9f29d5373242eefd8c9f7fcca3c11c41f" />
</div> 
<div className="carousel-item h-full">
<img src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=996&t=st=1684347425~exp=1684348025~hmac=eacaeb7047d8ac561c346be8da4605f39d4244fa33dfb133061aecd41c2703fe" />
</div> 

</div>

    </div>

</div>
        </div>
       
    );
};

export default Gallery;