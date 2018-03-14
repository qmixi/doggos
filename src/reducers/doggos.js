import {LOAD_DOGGO, REMOVE_DOGGO} from "../actions/types";

export default function (state = [], action = {}) {
		switch (action.type) {
				case LOAD_DOGGO:
						return [action.payload, ...state];

				case REMOVE_DOGGO:
						const newState = [...state];
						newState.splice(action.payload, 1);
						return newState;

				default:
						return state;
		}
}