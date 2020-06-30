import {UPDATE_DARK_MODE} from "./actions";

const initialState = {
	darkMode:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? true
			: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case UPDATE_DARK_MODE:
			return {
				...state,
				darkMode: action.darkMode
			};
		default:
			return state;
	}
}
