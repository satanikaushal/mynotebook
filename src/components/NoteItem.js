import React from "react";
import { useState } from "react";
import noteContext from '../context/Notes/noteContext';
import { useContext } from "react";

export const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deletenote} = context;
  const [bool, setbool] = useState(false);
  const show = () => {
    setbool(true);
  };
  const hide = () => {
    setbool(false);
  };
  return (
    <div
      onMouseOver={show}
      onMouseOut={hide}
      className="my-5 p-4 border-2 rounded-lg flex justify-between items-center hover:scale-[1.01] hover:shadow-lg transform transition-all duration-100"
    >
      <div className="flex flex-col space-y-2 break-words max-w-[80%] sm:max-w-[85%]">
        <h3 className="font-semibold text-xl text text-[#3d9f90]">
          {props.title}
        </h3>
        <p className="text-lg"><u>Description</u> - {props.description}</p>
        <p>Tag - <b className="font-normal bg-[#3d9f90] px-1 rounded-lg text-white">{props.tag}</b></p>
        <p> Date - {props.date.slice(0,10)}</p>
      </div>
      <div
        className={`text-center space-y-2 transform transition-all duration-100 ${
          bool ? " " : "opacity-0"
        }`}
      >
        <div className="p-1 rounded-lg bg-yellow-400 hover:scale-[1.1] hover:shadow-lg cursor-pointer" onClick={()=>{props.updateNote(props.id,props.title, props.description, props.tag)}}>Edit</div>
        <div className="p-1 rounded-lg bg-red-500 hover:scale-[1.1] hover:shadow-lg cursor-pointer" onClick={()=>{deletenote(props.id);props.showAlert("Note deleted succesfully","text-green-500  bg-white py-3 border-2 fixed top-15")}}>Delete</div>
      </div>
    </div>
  );
};
