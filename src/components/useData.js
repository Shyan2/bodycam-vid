import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_ROUTE;

export const useData = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`${SERVER_URL}/api/bodyCam`);
			setData(result.data);
		};
		getData();
	}, []);

	return data;
};
