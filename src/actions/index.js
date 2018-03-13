import {ERROR_DOGGOS, LOAD_DOGGOS} from "./types";

export function fetchDoggos() {
		return dispatch => {
				setTimeout(() => {
						dispatch(loadDoggos([{name: 'doggo1'}, {name: 'doggo2'}]));
				}, 1000);
		}
}

export function loadDoggos(doggos) {
		return {
				type: LOAD_DOGGOS,
				payload: doggos
		}
}

export function errorDoggos(error) {
		return {
				type: ERROR_DOGGOS,
				payload: error
		}
}