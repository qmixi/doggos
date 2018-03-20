import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {

		renderLinks() {
				if (this.props.authenticated) {
						return (<li className="navbar__item"><Link to="/signin">Sign out</Link></li>);

				} else {
						return [
								<li key={1} className="navbar__item"><Link to="/signin">Sign in</Link></li>,
								<li key={2} className="navbar__item"><Link to="/signup">Sign up</Link></li>
						];
				}
		}

		render() {
				return (
						<nav className="navbar">
								<div className="navbar__title">
										<Link to="/">Doggos</Link>
								</div>
								<ul className="navbar__list">
										<li className="navbar__item">

										</li>
										{this.renderLinks()}
								</ul>
						</nav>
				)
		}
}

function mapStateToProps(state) {
		return {
				authenticated: state.auth.authenticated
		}
}

export default connect(mapStateToProps, null)(Header);