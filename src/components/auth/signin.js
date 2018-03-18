import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class Signin extends Component {

		handleFormSubmit({ email, password }) {
				// play with email and password
		}

		render() {
				const { handleSubmit } = this.props;

				return (
						<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
								<div className="form__group">
										<label>Email:</label>
										<Field name="email" component="input" type="email" className="form__input"/>
								</div>
								<div className="form__group">
										<label>Password:</label>
										<Field name="password" component="input" type="password" className="form__input"/>
								</div>
								<button action="submit" className="btn btn--primary">Sign in</button>
						</form>
				)
		}
}

export default reduxForm({
		form: 'signin'
})(Signin);