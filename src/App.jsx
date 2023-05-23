import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/modal/:id" element={<Modal />} />
			</Routes>
		</>
	);
}

export default App;
