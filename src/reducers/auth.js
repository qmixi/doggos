import {AUTH_ERROR, SIGN_IN, SIGN_OUT} from "../actions/types";

export default function (state = {}, action = {}) {
		switch (action.type) {
				case SIGN_IN:
						return { ...state, authenticated: true, error: '' };
				case SIGN_OUT:
						return { ...state, authenticated: true };
				case AUTH_ERROR:
						return { ...state, error: action.payload };
				default:
						return state;
		}
}