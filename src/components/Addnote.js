import {useContext, useState} from 'react';
import noteContext from '../context/Notes/noteContext';

export const Addnote = (props) => {
    const context = useContext(noteContext);
    const {addnote} = context;
    const [note, setNote] = useState({title:'',description:'',tag:'General'});
    const handleClick =(e)=>{
      props.myProgress(30);
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setNote({title:'',description:'',tag:''});
        props.showAlert("Note added successfully","text-green-500 bg-white py-3 border-2 fixed top-15")
        props.myProgress(100);
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <form>
        <fieldset className='border-2 p-3 rounded-lg'>
          <legend className='text-lg px-2 font-semibold'>Add a note</legend>
          <label htmlFor='title'>Title</label><br/>
          <input id='title' name='title' type="text" value={note.title} placeholder='Enter a title' className='bg-[#f9faff] w-full border-2 rounded-lg p-1 my-1 focus:outline-[#73c0b4]' minLength={3} required onChange={onChange}/>
          <label htmlFor='description'>Description</label><br/>
          <input id='description' name='description' type="text" value={note.description} placeholder='Enter description' className='w-full bg-[#f9faff] border-2 rounded-lg p-1 my-1 focus:outline-[#73c0b4]' minLength={5} required onChange={onChange}/>
          <label htmlFor='tag'>Tag</label><br/>
          <input id='tag' name='tag' type="text" value={note.tag} placeholder='Enter a tag' className='w-full bg-[#f9faff] border-2 rounded-lg p-1 my-1 focus:outline-[#73c0b4]' minLength={3} required onChange={onChange}/>
          <button disabled={note.title.length<3 || note.description.length < 5 || note.tag.length ===0} type='submit' className='w-[30%] block mx-auto mt-4 text-lg rounded-lg text-[#4e576b] bg-[#73c0b4]' onClick={handleClick}>Add Note</button>
        </fieldset>
      </form>
  )
}
