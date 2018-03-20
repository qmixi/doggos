import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signin extends Component {

		handleFormSubmit({ email, password }) {
				this.props.signIn({ email, password });
		}

		render() {
				const { handleSubmit } = this.props;

				return (
						<form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
								<div className="form__group">
										<label>Email:</label>
										<Field name="email" component="input" type="email" className="form__input"/>
								</div>
								<div className="form__group">
										<label>Password:</label>
										<Field name="password" component="input" type="password" className="form__input"/>
								</div>
								{ this.props.auth.error && <div className="error">{ this.props.auth.error }</div> }
								<button action="submit" className="btn btn--primary btn--block">Sign in</button>
						</form>
				)
		}
}

function mapStateToProps(state) {
		return {
				auth: state.auth
		}
}

Signin = connect(mapStateToProps, actions)(Signin);

export default reduxForm({
		form: 'signin'
}, null, actions)(Signin);