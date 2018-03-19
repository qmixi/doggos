import {SIGN_IN, SIGN_OUT} from "../actions/types";

export default function (state = {}, action = {}) {
		switch (action.type) {
				case SIGN_IN:
						return { ...state, authenticated: true };
				case SIGN_OUT:
						return { ...state, authenticated: true };
				default:
						return state;
		}
}