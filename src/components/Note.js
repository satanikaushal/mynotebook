import {useContext} from 'react';
import noteContext from '../context/Notes/noteContext';
import { NoteItem } from './NoteItem';

export const Note = (props) => {
    const context = useContext(noteContext);
    const {notes} = context;
  return (
    <div>
      {notes.length === 0? <div className='text-center py-10'>You don't have any notes</div>:''}
        {
            notes.map((note)=>{
                return <NoteItem myProgress={props.myProgress} showAlert={props.showAlert} updateNote={props.updateNote} date={note.date} title={note.title} description={note.description} tag={note.tag} id={note._id} key={note._id}/>            
            })
        }
    </div>
  )
}
