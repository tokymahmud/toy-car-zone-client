import React from 'react';

const Banner = () => {
    return (
        <div className='max-h-2.5 p-8 rounded max-h-sm:1 '>
            <div className="carousel w-full max-h-80		">
  <div id="slide1" className="carousel-item relative w-full max-h-80">
    <img src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=996&t=st=1684347425~exp=1684348025~hmac=eacaeb7047d8ac561c346be8da4605f39d4244fa33dfb133061aecd41c2703fe" className="w-full max-h-80		" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full max-h-80	">
    <img src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=996&t=st=1684347483~exp=1684348083~hmac=7600faea974f3ba2fe7d0e178e583b8424cba4636edcab1b0f303181546365e0" className="w-full max-h-80	" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full max-h-80">
    <img src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=996&t=st=1684347522~exp=1684348122~hmac=6ad297e2cbf08a1a7a79cca71c7c9cb9f29d5373242eefd8c9f7fcca3c11c41f" className="w-full max-h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full max-h-80">
    <img src="https://img.freepik.com/free-vector/boy-driving-mini-car-toy-white-background_1308-76150.jpg?w=740&t=st=1684347562~exp=1684348162~hmac=02a487c2900bd312680515a87d81740fdd77def4e9c89a463c4597c0fec969aa" className="w-full max-h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;