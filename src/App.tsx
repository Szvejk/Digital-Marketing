import React from 'react';
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Presentation from './Presentation/Presentation';
import Recognition from './Recognitions/Recognition';
import NumberWrapper from './Numbers/NumberWrapper';
import Serviceoffer from './ServiceOffer/Serviceoffer';
import Aside from './Aside/Aside';
import Team from './Team/Team';
import Footer from './Footer/Footer';
import Home from './Home/Home';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Serviceoffer />} />
				<Route path='/team' element={<Team />} />
				<Route path='/society' element={<NumberWrapper />} />
				<Route path='/aside' element={<Aside />} />

				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</Router>
	);
};

export default App;
