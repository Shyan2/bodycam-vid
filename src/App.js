import './App.css';
import Earthbook from './components/Earthbook';
import { Container } from '@mui/material';
function App() {
	return (
		<Container maxWidth={false} style={{ height: '90vh', paddingLeft: 0, paddingRight: 0 }}>
			{/* <Earthbook /> */}
			<iframe
				width="100%"
				height="100%"
				frameBorder="0"
				// style='border:0'
				src="https://earthbook.xyz:8080"
			></iframe>
		</Container>
	);
}

export default App;
