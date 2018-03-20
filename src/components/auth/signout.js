import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as actions from '../../actions';

class SignOut extends Component {

		componentWillMount() {
				this.props.signOut();
		}

		render() {
				return (
						<div className="sign-out">
								Thank's for visiting out page
						</div>)
		}
}

export default connect(null, actions)(SignOut)
