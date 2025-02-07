import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import GamesSection from './components/GamesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export function App() {
	return (
		<div>
        <Navbar />
        <HomeSection />
        <GamesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
    </div>
	);
}

render(<App />, document.getElementById('app'));
