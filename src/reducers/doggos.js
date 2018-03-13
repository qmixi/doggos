import {LOAD_DOGGOS} from "../actions/types";

export default function (state = [], action = {}) {
		switch (action.type) {
				case LOAD_DOGGOS:
						return [...action.payload];

				default:
						return state;
		}
}