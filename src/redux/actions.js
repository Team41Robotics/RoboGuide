export const UPDATE_DARK_MODE = "UPDATE_DARK_MODE";

export function updateDarkMode(dispatch, newValue) {
	dispatch({
		type: UPDATE_DARK_MODE,
		darkMode: newValue
	});
}
