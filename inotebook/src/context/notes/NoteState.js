import React from "react";


import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
const notesinitial=[
    {
      "_id": "6423ec6f08f2bcb88a57c7bf0",
      "user": "6423e66683a1833c0fac1e6a",
      "title": "Arnab KUmar HAnsda",
      "description": "hansdaarnab*&@gmail.com",
      "tag": "this is my tag for the adding the note",
      "date": "2023-03-29T07:44:47.504Z",
      "__v": 0
    },
    {
      "_id": "6423ec7908ff2bcb88a57c7b2",
      "user": "6423e66683a1833c0fac1e6a",
      "title": "this ifs fghbmy vtsfscitles",
      "description": "thics vbnisvb my descrifptcions",
      "tag": "this is  mvy fxgfg tascg",
      "date": "2023-03-29T07:44:57.935Z",
      "__v": 0
    },
    {
      "_id": "6423eee13298baf372d81e2db",
      "user": "6423e66683a1833c0fac1e6a",
      "title": "Arnab KUxmar HAcnsda",
      "description": "hansdaarnxabc*&@gmail.com",
      "tag": "this is my tag fcoxr the adding the note",
      "date": "2023-03-29T07:55:13.028Z",
      "__v": 0
    },
    {
      "_id": "642418a2bd64f0b82eca5b3bc",
      "user": "6423e66683a1833c0fac1e6a",
      "title": "Arnab KUcxmar HAcnsda",
      "description": "hanscdaarnxabc*&@gmail.com",
      "tag": "this is my tag fccoxr the adding the note",
      "date": "2023-03-29T10:53:22.553Z",
      "__v": 0
    },
    {
      "_id": "6428f594a84a8009e48f06304",
      "user": "6423e66683a1833c0fac1e6a",
      "title": "Arnab KUcxmar HAcvnsda",
      "description": "hanscdaarnxvabc*&@gmail.com",
      "tag": "this is my tag fcvcoxr the adding the note",
      "date": "2023-04-02T03:25:08.858Z",
      "__v": 0
    },
    {
      "_id": "642bd69c30f345e daefb27b79",
      "user": "6423e66683a1833c0fac1e6a",
      "title": "Arnab KUcxmar HxghAcvnsda",
      "description": "hanscdaarncmxvabc*&@gmail.com",
      "tag": "this is my tag fcvcoxr the adding the notecghgjh",
      "date": "2023-04-04T07:49:48.373Z",
      "__v": 0
    }
  ]
   // eslint-disable-next-line

  const [notes,  setNotes]=useState(notesinitial)
// Add a Note

const addnote=(title,description,tag)=>{

  // todo Api Calls  to add note


  console.log("Adding a anew node here ");



  const note= {
  "_id": "642bd69c30f345e daefb27b79",
  "user": "6423e66683a1833c0fac1e6a",
  "title": title,
  "description": description,
  "tag": tag, 
  "date": "2023-04-04T07:49:48.373Z",
  "__v": 0
};
setNotes(notes.concat(note));   

}


// Delete a Note

const deletenote=(id)=>{


  // todo api calls

  console.log("deleting a node with id"+id)
 const newNote=notes.filter((note)=>{return  note._id!==id})
setNotes(newNote)

}
// Edit A notes


const editnote=( id,title,description,tag)=>{



}
    return(

 // eslint-disable-next-line
<NoteContext.Provider  value={{notes,addnote,deletenote,editnote}}>{props.children}</NoteContext.Provider>


    )
}

export default NoteState;