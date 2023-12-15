import { useState } from "react";
import "./App.css";
import NoteBox from "./components/NoteBox/NoteBox";
import Pocket from "./components/Pocket/Pocket";

function App() {

	const [selected, setSelected] = useState("");
	const [back, setBack] = useState(true)

	const getSelected = (selected) => {
		setSelected(selected)
	}

	const handleGoBack = (back) => {
		setBack(back)
	}


	return (
		<div className="pocketNotes">
			<Pocket onSubmitApp={getSelected} back = {back} setBack = {handleGoBack}/>
			<NoteBox selected={selected} setBack = {handleGoBack}/>
		</div>
	);
}

export default App;
