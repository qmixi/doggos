import axios from "axios";

import {AUTH_ERROR, ERROR_DOGGO, LOAD_DOGGO, REMOVE_DOGGO, SIGN_IN, SIGN_OUT} from "./types";
import {apiPath} from "../utils/api-path";
import history from "../utils/history";

export function fetchDoggo() {
		return dispatch => {
				axios.get('https://dog.ceo/api/breeds/image/random')
						.then(response => {
								dispatch(loadDoggo(response.data));
						})
						.catch(error => {
								dispatch(errorDoggo(error));
						});
		}
}

export function loadDoggo(doggo) {
		return {
				type: LOAD_DOGGO,
				payload: doggo
		}
}

export function errorDoggo(error) {
		return {
				type: ERROR_DOGGO,
				payload: error
		}
}

export function removeDoggo(index) {
		return {
				type: REMOVE_DOGGO,
				payload: index
		}
}

export function signIn({email, password}) {
		return dispatch => {
				axios.post(`${apiPath}signin`, {
						email,
						password
				}).then((response) => {
						const token = response.data.token;
						localStorage.setItem('jwt-token', token);
						dispatch({type: SIGN_IN});
						history.push('/gallery');
				}, (error) => dispatch(authError('Please provide correct credentials.')));
		}
}

export function signUp({email, password}) {
		// todo fill up this function
}

export function signOut() {
		localStorage.removeItem('jwt-token');
		return {
				type: SIGN_OUT
		}
}

export function authError(error) {
		console.log('error', error);
		return {
				type: AUTH_ERROR,
				payload: error
		}
}