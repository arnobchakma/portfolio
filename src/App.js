import React, { useState } from 'react';
import imageLogo from './images/a-logo.png';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import About from './components/Home/Home/About/About';
import Contact from './components/Home/Home/Contact/Contact';
import Project from './components/Home/Home/Project/Project';
import Home from './components/Home/Home/Home';
import Skill from './components/Home/Home/Skills/Skills';
import ScrollToTop from './components/scroll/ScrollToTop';
import SocialIcon from './components/SocialIcon/SocialIcon';

function App() {
	const [isShow, setIsShow] = useState(false);
	const [changeNavbar, setChangeNavbar] = useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}

	// When scrolling the navbar it changes background Color
	const changeBackground = () => {
		if (window.scrollY >= 120) {
			setChangeNavbar(true);
		} else {
			setChangeNavbar(false);
		}
	}

	window.addEventListener('scroll', changeBackground);

	return (
		<>
			<Router>
				<ScrollToTop />
				<div class="">

					{/* Content Wrapper */}
					<nav class={changeNavbar ? 'bg-gray-900 fixed scroll-smooth inset-x-0 top-0 z-50' : 'bg-gray-900'}>
						<div class="max-w-screen-xl mx-auto flex justify-between p-5 items-center text-gray-200">
							<div class="w-10">
								<Link to="/">
									<img class="w-full" src={imageLogo} alt="" />
								</Link>
							</div>

							{/* Main menubar */}
							<div class="hidden md:flex text-sm space-x-14">
								<Link class="hover" to="/"> HOME </Link>
								<Link class="hover" to="/about"> ABOUT </Link>
								<Link class="hover" to="/project">PROJECT</Link>
								<Link class="hover" to="/skill">SKILLS</Link>
								<Link class="hover" to="/contact">CONTACT</Link>
							</div>

							{/* Mobile menu icon part */}
							<div class="md:hidden block">
								<button class="text-gray-200" onClick={() => handleClick()} >
									{isShow ?
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
										: <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
										</svg>
									}
								</button>
							</div>
						</div>

						{/* This Navbar is for mobile menu */}
						<div class={isShow ? 'grid grid-rows-6 text-sm text-center bg-gray-700 text-gray-200 items-center' : 'hidden'} >
							<a class="mobile-nav" href="/" alt="">HOME</a>
							<a class="mobile-nav" href="/about">ABOUT</a>
							<a class="mobile-nav" href="/project">PROJECT</a>
							<a class="mobile-nav" href="/skill">SKILLS</a>
							<a class="mobile-nav" href="/contact">CONTACT</a>
						</div>
					</nav>
				</div>
				<SocialIcon />

				{/* Components */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" done="80" element={<About />} />
					<Route path="/project" element={<Project />} />
					<Route path="/skill" element={<Skill />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router >
		</ >
	);
}

export default App;
