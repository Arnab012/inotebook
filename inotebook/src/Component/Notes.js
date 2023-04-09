
import Noteiteam from './Noteiteam';
import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react'
import AddNote from './AddNote';


function Notes() {
    const context=useContext(noteContext);
const{notes}=context;
  return (
    <>
     <AddNote/>
        <div className="row my-5">
      <h2>Your  Note</h2>
      {notes.map((note)=>{
return <Noteiteam  key={note._id} note={note}/>;


      })}
      </div>
      
    </>
  )
}

export default Notes
