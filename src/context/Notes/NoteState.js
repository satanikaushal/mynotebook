import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const notei = [];
    const [notes, setNotes] = useState(notei)


       //get all note 
       const fetchallnotes= async ()=>{
        //api call
        const response = await fetch(`https://mernappbackend-g13h.onrender.com/api/notes/fetchallnotes`, {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'authtoken': localStorage.getItem('token')
            }
                });
                const json = await response.json();
                setNotes(json)
      }


      //add a note 
      const addnote= async (title,description,tag)=>{
        //api call
        const response = await fetch(`https://mernappbackend-g13h.onrender.com/api/notes/addnote`, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'authtoken':localStorage.getItem('token')
            },
            body: JSON.stringify({title, description,tag})
        });
        const note = await response.json()
        setNotes(notes.concat(note));
      }


      //delete a not
      const deletenote= async (id)=>{
         //api call
         fetch(`https://mernappbackend-g13h.onrender.com/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json',
                'authtoken':localStorage.getItem('token')
            }
        });
        const newNotes = notes.filter((note)=>{
           return note._id!==id})
        setNotes(newNotes);
      }


      //edit a note
      const editnote= async(id, title, description, tag)=>{
        console.log(id, title, description, tag)
        //api call
        const response = await fetch(`https://mernappbackend-g13h.onrender.com/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
                'authtoken':localStorage.getItem('token')
            },
            body: JSON.stringify({title, description,tag})
        })
        const json = await response.json();
        console.log(json);

        let NewNotes = JSON.parse(JSON.stringify(notes))

        //logic to edit client
        for (let index = 0; index<NewNotes.length;index++){
            const element = NewNotes[index];
            if(element._id === id){
                NewNotes[index].title = title;
                NewNotes[index].description = description;
                NewNotes[index].tag = tag;
                break;
            }
        }
        setNotes(NewNotes)
      }


    return (
        <noteContext.Provider value={{notes,addnote, deletenote, editnote,fetchallnotes}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;