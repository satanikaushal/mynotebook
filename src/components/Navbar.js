import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  let history = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    history('/login');
  }  
  let location = useLocation();
  return (
    <>
      <div className=" flex justify-between items-center px-3 sm:px-10 bg-[#f9faff] py-3 sm:py-5 sticky top-0 shadow-md z-50">
      <h1 className="text-[#73c0b4] text-lg sm:text-2xl font-bold">My NoteBook</h1>
      <ul className=" flex space-x-3 sm:space-x-10 text-sm sm:text-lg font-semibold">
        <li>
          <Link to="/"  className={`hover:underline ${location.pathname === '/'?'text-[#699fa7]':'text-[#4e576b]'}`}>Home</Link>
        </li>
        <li>
          <Link to="about" className={`hover:underline ${location.pathname === '/about'?'text-[#699fa7]':'text-[#4e576b]'}`}>About</Link>
        </li>
      {!localStorage.getItem('token')?
      <>
      <li>
      <Link to="signup"  className={`hover:underline ${location.pathname === '/signup'?'text-[#699fa7]':'text-[#4e576b]'}`}>Signup</Link>
      </li>
      <li>
        <Link to="login" className={`hover:underline ${location.pathname === '/login'?'text-[#699fa7]':'text-[#4e576b]'}`}>Login</Link>
      </li></>:<button onClick={handleLogout} className="bg-[#73c0b4] text-white px-2 rounded-lg hover:bg-[#2f9c8b]">Log Out</button>}
        </ul>
      </div>
    </>
  );
};
