import {useContext} from 'react';
import noteContext from '../context/Notes/noteContext';
import { NoteItem } from './NoteItem';

export const Note = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div>
        {
            notes.map((note)=>{
                return <NoteItem title={note.title} description={note.description} tag={note.tag}/>            })
        }
    </div>
  )
}
