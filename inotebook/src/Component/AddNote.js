import  { useState } from 'react'
import React, { useContext } from 'react'

import noteContext from '../context/notes/noteContext';


function AddNote() {
    const context=useContext(noteContext);
const{addnote}=context;

const [note,setNote]=useState({title:"",description:"",tag:"default"})

// for onclick const [state,setstate]=useState
const handelupsubmit=(e)=>{
    e.preventDefault();
addnote(note.title,note.description,note.tag);


}



// for onchange function

const handelonchange=(e)=>{
   

setNote({...note,[e.target.name]:e.target.value})


}



  return (
    <>
      

      <div className="container my-5">
      <h2>Add a Note</h2>

      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"   name="title" aria-describedby="emailHelp"  onChange={handelonchange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={handelonchange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handelupsubmit}>Add!!! Note</button>
</form>
</div>

    </>
  )
}

export default AddNote
