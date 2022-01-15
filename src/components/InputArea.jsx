import React, { useState } from "react";
import AddIcon from "@material-ui/icons//Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";



function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div className="inputContainer">
      {isExpanded && (<h2>
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
        ></input>
      </h2>)}
      <p>
        <textarea
          rows={isExpanded ? 3 : 1}
          placeholder="Take a note..."
          type="text"
          name="content"
          value={note.content}
          onChange={handleChange}
          onClick={expand}
        ></textarea>
      </p>
      <Zoom in={isExpanded}>
        <Fab
          className="add"
          onClick={() => {
            props.addItem(note);
            setNote({
              title: "",
              content: "",
            });
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default InputArea;
