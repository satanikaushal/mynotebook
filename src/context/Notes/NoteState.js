import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const note = [
        {
          "_id": "63f0b5563136b8d52726e806",
          "user": "63ef2cf4269222cc01ade9ad",
          "title": "my title",
          "description": "you are the best",
          "tag": "personal",
          "date": "2023-02-18T11:24:06.516Z",
          "__v": 0
        },
        {
          "_id": "63f0b5713136b8d52726e808",
          "user": "63ef2cf4269222cc01ade9ad",
          "title": "my second title",
          "description": "you are the last of the stars",
          "tag": "personal",
          "date": "2023-02-18T11:24:33.900Z",
          "__v": 0
        },
        {
          "_id": "63f0b5893136b8d52726e80a",
          "user": "63ef2cf4269222cc01ade9ad",
          "title": "my third title",
          "description": "you are the greatest bro",
          "tag": "personal",
          "date": "2023-02-18T11:24:57.864Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(note)
    return (
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;