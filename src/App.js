import './App.css';
import BodyCam from './components/BodyCam';
import { Container } from '@mui/material';
function App() {
	return (
		<Container maxWidth={false} style={{ height: '90vh', paddingLeft: 0, paddingRight: 0 }}>
			<BodyCam />
		</Container>
	);
}

export default App;
