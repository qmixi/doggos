import {LOAD_DOGGO} from "../actions/types";

export default function (state = [], action = {}) {
		switch (action.type) {
				case LOAD_DOGGO:
						return [action.payload, ...state];

				default:
						return state;
		}
}