import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    // const {singIn, singinWithGoogle, singinWithGithub} =useContext(AuthContext);
    const navigate =useNavigate();
  
  
      const handleLogin =event =>{
          event.preventDefault();
          const form =event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password);
  
          singIn(email,password)
          .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            navigate('/')
          })
          .catch(error=>{
            console.log(error)
          })
  
  
      }
     const  handleGoogleSingin =()=>{
      singinWithGoogle()
      .then (result=>{
        const loggedUser =result.user;
        console.log(loggedUser);
      })
      .catch(error=>{
        console.log(error)
      }) }
     
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col md:flex-row-reverse">
<div className="text-center md:text-left">
  <h1 className="text-5xl font-bold"> Please Login now!</h1>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleLogin} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
    <div className='flex space-x-4 '>
    <button onClick={handleGoogleSingin} className="btn btn-primary gap-4 ">Google</button>


    </div>
  </form>
  <Link to='/register'>
  <button className="btn btn-link">Want to buy toys?</button>

  </Link>

  {/* spinner */}

  {/* <div
className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
role="status">
<span
className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
>Loading...</span
>
</div> */}
</div>
</div>
</div>
    </div>
    );
};

export default Login;