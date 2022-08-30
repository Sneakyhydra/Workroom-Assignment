// Routing
import { Routes, Route } from 'react-router-dom';

// Pages
import SheetsLibrary from './pages/SheetsLibrary';
import AuthoringModule from './pages/AuthoringModule';

// CSS
import './App.css';

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<SheetsLibrary />} />
			<Route exact path='/author' element={<AuthoringModule />} />
		</Routes>
	);
};

export default App;
