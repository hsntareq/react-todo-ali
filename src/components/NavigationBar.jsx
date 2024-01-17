import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
	const NavLinks = [
		{path: '/', name: 'Home', exact: true},
		{path: '/about', name: 'About',  exact: true},
		{path: '/contact', name: 'Contact', exact: true},
		{path: '/blog', name: 'Blog', exact: false},
	]
  return (
	<nav>
		<ul>
			{NavLinks.map(({path, name, exact}) => (
				<li key={path}>
					<NavLink to={path} activeClassName="active" exact={exact}>
						{name}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
  )
}

