import React, { useState, useEffect } from "react";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
  const [listOfNotes, setListOfNotes] = useState(() => {
    const saved = localStorage.getItem("lista");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });


  function addNewNote(note) {
    setListOfNotes([...listOfNotes, note]);
  }

  function deleteNote(id) {
    setListOfNotes((prevValue) => {
      return listOfNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(listOfNotes));
  }, [listOfNotes]);

  //setItem prima "key" i "value"
  //useEffect prim f-ju i listu

  return (
    <div>
      <div className="top"></div>
      <InputArea addItem={addNewNote} />
      <div className="notesContainer">
        {listOfNotes.map((note, index) => (
          <Note
            title={note.title}
            content={note.content}
            id={index}
            key={index}
            delete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
