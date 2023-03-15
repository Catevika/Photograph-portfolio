import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Sidebar from './components/Sidebar/Sidebar';
import SidebarButton from './components/Sidebar/SidebarButton';
import Album from './components/Album/Album';
import Photo from './components/Photo/Photo';
import ScrollAlbum from './components/ScrollAlbum/ScrollAlbum';

import './css/main.css';

const App = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleSidebar = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<SidebarButton toggleSidebar={toggleSidebar} isOpen={isOpen} />
			<Sidebar isOpen={isOpen} />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/galerie' element={<Gallery />} />
				<Route path='/galerie/:albumId' element={<Album />} />
				<Route path='/galerie/:albumId/aperçu' element={<ScrollAlbum />} />
				<Route path='/galerie/:albumId/:photoId' element={<Photo />} />
				<Route path='/projets' element={Projects} />
				{/* <Route
					exact
					path='/projets/:nom1'
					component={Nom1}
				/>
				<Route
					exact
					path='/projets/:nom2'
					component={Nom2}
				/>
				<Route
					exact
					path='/projets/:nom3'
					component={Nom3}
				/> */}
				<Route exact path='/apropos' component={About} />
				<Route exact path='/contact' component={Contact} />
			</Routes>
		</>
	);
};

export default App;
