import React, {useState, useEffect, useRef} from "react";

export default function ({name, ...rest}) {
	const ImportedIconRef = React.useRef(null);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		const importIcon = async () => {
			try {
				const svgRaw = await import(`../img/${name}.svg`);
				console.log(svgRaw);
				ImportedIconRef.current = svgRaw.ReactComponent;
			} catch (err) {
				// Your own error handling logic, throwing error for the sake of
				// simplicity
				throw err;
			} finally {
				setLoading(false);
			}
		};
		importIcon();
	}, [name]);

	console.log(!loading, ImportedIconRef.current);
	if (!loading && ImportedIconRef.current) {
		const {current: ImportedIcon} = ImportedIconRef;
		return <ImportedIcon {...rest} />;
	}

	return null;
}
