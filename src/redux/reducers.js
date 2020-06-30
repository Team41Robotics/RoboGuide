import {UPDATE_DARK_MODE} from "./actions";

/** True if the UI is dark, false if it is light */
var darkMode;

var localStorage = window.localStorage;
// The == "true" is neccessary since localStorage returns a string
var oldDeviceDefault = localStorage.getItem("deviceDarkMode") == "true";
var currentDeviceDefault =
	window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
		? true
		: false;

if (oldDeviceDefault == null) {
	// If this first time loading the site
	localStorage.setItem("deviceDarkMode", currentDeviceDefault);
	localStorage.setItem("userDarkMode", currentDeviceDefault);
	darkMode = currentDeviceDefault;
} else {
	if (oldDeviceDefault !== currentDeviceDefault) {
		// If the user changed their device default
		localStorage.setItem("deviceDarkMode", currentDeviceDefault);
		localStorage.setItem("userDarkMode", currentDeviceDefault);
		darkMode = currentDeviceDefault;
	} else {
		darkMode = localStorage.getItem("userDarkMode") == "true";
	}
}

const initialState = {
	darkMode: darkMode
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE_DARK_MODE:
			localStorage.setItem("userDarkMode", action.darkMode);
			return {
				...state,
				darkMode: action.darkMode
			};
		default:
			return state;
	}
}
