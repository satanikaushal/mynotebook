import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



export const Navbar = () => {
  let location = useLocation();
  return (
    <>
      <div className=" flex justify-between px-10 bg-[#f9faff] py-5">
      <h1 className="text-[#73c0b4] text-2xl font-bold">My NoteBook</h1>
      <ul className=" flex space-x-10 text-lg font-semibold">
        <li>
          <Link to="/"  className={`${location.pathname === '/'?'text-[#699fa7]':'text-[#4e576b]'}`}>Home</Link>
        </li>
        <li>
          <Link to="about" className={`${location.pathname === '/about'?'text-[#699fa7]':'text-[#4e576b]'}`}>About</Link>
        </li>
      </ul>  
      </div>
    </>
  );
};
