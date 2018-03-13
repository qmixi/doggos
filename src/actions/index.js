import axios from 'axios';

import {ERROR_DOGGO, LOAD_DOGGO} from "./types";

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