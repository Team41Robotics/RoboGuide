import React from "react";

import "../css/ToggleSwitch.css";

export default function(props) {
	const value = props.value;
	const setValue = props.setValue;
	return (
		<label className="toggle-switch">
			<input
				type="checkbox"
				checked={value}
				onChange={e => setValue(e.target.checked)}
			/>
			<span className="toggle-slider round"></span>
		</label>
	);
}
