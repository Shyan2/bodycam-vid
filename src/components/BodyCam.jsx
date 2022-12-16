import React from 'react';
import { useData } from './useData.js';

const BodyCam = () => {
	const data = useData();

	if (!data) {
		return <pre>Loading .... </pre>;
	}

	console.log(data);
	return <div>BodyCam</div>;
};

export default BodyCam;
