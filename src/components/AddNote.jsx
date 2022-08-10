import React, { useState } from "react";

function AddNote({handleAddNote}) {
	const [noteText, setNoteText] = useState("");

    const handleChange = (event)=>{
        setNoteText(event.target.value)
    };

    const handleSaveClick = ()=>{
        if (noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('');
        }
        else{
            alert("Note cannot be empty!")
        }
    }

	return (
		<div className="note new">
			<textarea
				rows="8"
				cols="10"
                value={noteText}
				placeholder="Type to add a note...."
                onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small>200 remaining</small>
				<button className="save"  onClick={handleSaveClick} >Save</button>
			</div>
		</div>
	);
}

export default AddNote;
