import Counter from './components/Counter.jsx'
import Header from './components/Header.jsx'
import Auth from './components/Auth.jsx'
import { useSelector } from 'react-redux'
function App() {
	const isLogged = useSelector(state => state.auth.isAuthenticated)
	return (
		<>
			<Header />
			{!isLogged && <Auth />}
			<Counter />
		</>
	)
}

export default App
