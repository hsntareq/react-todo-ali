import React from 'react';
import App from '../App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Post from './pages/Post';
import NoMatch from './pages/NoMatch';

export default function Root() {
	const routes = [
		{path: '/', element: <App />},
		{path: '/about', element: <About />},
		{path: '/contact', element: <Contact />},
		{path: '/blog', element: <Blogs />},
		{path: '/blog/:id', element: <Post />},
		{path: '*', element: <NoMatch />},
	]
  return (
	<Router>
	<div className="App">
		<NavigationBar/>
		<div className="content">
			<Routes>
				{routes.map(({path, element}) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</div>
	</div>
	</Router>
  )
}
