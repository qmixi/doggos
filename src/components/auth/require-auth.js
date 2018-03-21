import React, {Component} from 'react';

import {connect} from 'react-redux';

import history from '../../utils/history';

export default function (ComposedComponent) {
		class Authentication extends Component {

				componentWillMount() {
						if (!this.props.authenticated) {
								history.push('/signout');
						}
				}

				componentWillUpdate(nextProps) {
						if (!nextProps.authenticated) {
								history.push('/signout');
						}
				}

				render() {
						return (<ComposedComponent {...this.props} />)
				}
		}

		function mapStateToProps(state) {
				return {
						authenticated: state.auth.authenticated
				}
		}

		return connect(mapStateToProps)(Authentication);
}
