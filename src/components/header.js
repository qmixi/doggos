import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {

		render() {
				return (
						<nav className="navbar">
								<ul className="navbar__list">
										<li className="navbar__item">
												<Link to="/signin">Sign in</Link>
										</li>
										<li className="navbar__item"></li>
								</ul>
						</nav>
				)
		}
}

export default Header;