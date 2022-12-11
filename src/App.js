import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
