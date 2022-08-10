import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
	const [notes, setNotes] = useState([
		{ id: nanoid(), text: "This is note one!", date: "15/04/2022" },
		{ id: nanoid(), text: "This is note two!", date: "11/04/2022" },
		{ id: nanoid(), text: "This is my third note one!", date: "13/04/2022" },
		{ id: nanoid(), text: "This is note number four!", date: "15/04/2022" },
		{ id: nanoid(), text: "This is note ya tano!", date: "15/04/2022" },
	]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id :nanoid(),
			text: text,
			date: date.toLocaleDateString()
		}
		const newNotes = [...notes, newNote];
		setNotes(newNotes)
	}
	return (
		<div className="container">
			<NotesList notes={notes} handleAddNote={addNote} />
		</div>
	);
};

export default App;
