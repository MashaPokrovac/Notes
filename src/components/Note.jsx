import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  return (
    <div className="note">
      <div className="pin"></div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button className="delete" onClick={() => props.delete(props.id)}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
