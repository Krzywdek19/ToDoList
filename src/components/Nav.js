import { NavLink } from "react-router-dom";

import "../styles/Nav.css";

const Nav = () => (
	<nav className="wrapper-nav">
		<NavLink className="wrapper-nav__link" to="/actualTasks">
			<p className="wrapper-nav-link__text">Tasks</p>
		</NavLink>
		<NavLink className="wrapper-nav__link" to="/finishedTasks">
			<p className="wrapper-nav-link__text">Finished Tasks</p>
		</NavLink>
		<NavLink className="wrapper-nav__link" to="/removedTasks">
			<p className="wrapper-nav-link__text">Removed Tasks</p>
		</NavLink>
	</nav>
);

export default Nav;
