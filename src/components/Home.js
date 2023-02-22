import React, { useEffect,useState } from "react";
import { Addnote } from "./Addnote";
import { Note } from "./Note";
import { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import { useNavigate } from "react-router-dom";
export const Home = (props) => {
  let history = useNavigate();
  const context = useContext(noteContext);
  const { fetchallnotes,editnote} = context;
  const [note, setNote] = useState({etitle:'',edescription:'',etag:'',eid:''});
  useEffect(() => {
    props.myProgress(40)
    if(localStorage.getItem('token')){
    fetchallnotes();
    props.myProgress(100);
  }
  else{
    history('/login');
  }
   // eslint-disable-next-line
  }, []);
  const handleClick =(e)=>{
    props.myProgress(20);
      e.preventDefault();
      document.getElementById('authentication-modal').classList.toggle('hidden');
      editnote(note.eid,note.etitle, note.edescription, note.etag);
    props.showAlert("Note updated successfully","text-green-500 bg-white py-3 border-2 fixed top-15"); 
    props.myProgress(100); 
  }
  const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value});
  }
  const updateNote = (id, title, description, tag) => {
    props.myProgress(10);
    document.getElementById('authentication-modal').classList.toggle('hidden');
    setNote({eid:id,etitle:title,edescription: description, etag:tag});
    props.myProgress(100);
  };
  return (
    <div className="sm:w-[40vw] mx-auto rounded-lg my-1 sm:my-4 p-4 ">
      <Addnote myProgress={props.myProgress} showAlert={props.showAlert} />

      {/* <!-- Main modal --> */}
      <div id="authentication-modal"
        className="fixed top-0 z-50 w-[90%] hidden sm:w-auto md:inset-0 h-modal md:h-full transform transition-all duration-300 ease-in-out"
      >
        <div className="py-20 mx-auto w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={updateNote}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Update your note
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="etitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New title
                  </label>
                  <input
                    type="title"
                    name="etitle"
                    id="etitle"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter new title here" value={note.etitle} onChange={onChange} required
                  />
                </div>
                <div>
                  <label
                    htmlFor="edescription"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New description
                  </label>
                  <input
                    type="text"
                    name="edescription"
                    id="edescription"
                    placeholder="Enter new description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={note.edescription} onChange={onChange} required
                  />
                </div>
                <div>
                  <label
                    htmlFor="etag"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New tag
                  </label>
                  <input
                    type="text"
                    name="etag"
                    id="etag"
                    placeholder="Enter new tag"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={note.etag} onChange={onChange} required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleClick}
                >
                  Update Note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className=" text-2xl font-semibold">Your Notes : </h2>
        <Note myProgress={props.myProgress} updateNote={updateNote} showAlert={props.showAlert}/>
      </div>
    </div>
  );
};
