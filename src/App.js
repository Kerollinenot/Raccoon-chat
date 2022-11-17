import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from './Components/Navbar/Navbar'
import AppRouter from './Components/AppRouter';
import Loader from './Components/Loader/Loader';

function App() {
	const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)

	if (loading) {
		return <Loader/>
	}

	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
