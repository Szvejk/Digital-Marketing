import React from 'react';
import Header from '../Header/Header';
import Presentation from '../Presentation/Presentation';
import Recognition from '../Recognitions/Recognition';
import NumberWrapper from '../Numbers/NumberWrapper';
import Serviceoffer from '../ServiceOffer/Serviceoffer';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
const Home = () => {
	return (
		<div>
			<Header />
			<Presentation />
			<Recognition />
			<NumberWrapper />
			<Serviceoffer />
			<Team />
			<Footer />
		</div>
	);
};

export default Home;
