import React from "react";
import {MdDeleteForever} from 'react-icons/md'

function Notes() {
	return(
         <div className="note">
            <span>Hello , This is the frst note!</span>
            <div className="note-footer">
                <small>12/02/2022</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
         </div>)
}

export default Notes;
