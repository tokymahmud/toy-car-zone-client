import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const NavItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    {/* <li>My Toys</li>
    <li>Add A Toy</li> */}
    <li><Link to='/blogs'>Blogs</Link></li>
    <li><Link to='/login'>Login</Link></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {NavItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Toy Car Zone <br>
    </br> <img className="w-10 rounded-full" src='https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?w=900&t=st=1684346003~exp=1684346603~hmac=1963f48a02d3d29341b975c2095688c975609eb02ba3396c6a5bfe62d11a1549'></img></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {NavItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;