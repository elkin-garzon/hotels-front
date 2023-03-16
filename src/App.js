import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';
import RoomsPage from './pages/RoomsPage';
import NotFoundPage from "./pages/NotFoundPage";

//components
import Navbar from './components/Navbar';

//styles
import './styles/general.scss'

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/hotels" element={<HotelsPage />} />
				<Route path="/rooms" element={<RoomsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}