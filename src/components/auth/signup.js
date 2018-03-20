import React, {Component} from 'react';

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import {authError} from "../../actions/index";

class Signup extends Component {

		handleFormSubmit({email, password, passwordConfirmation}) {
				if (password !== passwordConfirmation) {
						console.log("czoo")
						this.props.authError('Passwords must be the same.');
				} else {
						this.props.signUp({email, password});
				}
				authError('Passwords must be the same.');
		}

		render() {
				const {handleSubmit} = this.props;

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
								<div className="form__group">
										<label>Password confirmation:</label>
										<Field name="passwordConfirmation" component="input" type="password" className="form__input"/>
								</div>
								{this.props.auth.error && <div className="error">{this.props.auth.error}</div>}
								<button action="submit" className="btn btn--primary btn--block">Sign up</button>
						</form>
				)
		}
}

function mapStateToProps(state) {
		return {
				auth: state.auth
		}
}

Signup = connect(mapStateToProps, actions)(Signup);

export default reduxForm({
		form: 'signup'
}, null, actions)(Signup);