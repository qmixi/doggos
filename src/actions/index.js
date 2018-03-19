import axios from 'axios';

import {ERROR_DOGGO, LOAD_DOGGO, REMOVE_DOGGO} from "./types";
import {apiPath} from "../utils/api-path";

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
				});
		}
}