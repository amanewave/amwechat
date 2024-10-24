import './App.css';
import { Header } from './pages/header/Header';
import { Main } from './pages/main/Main';
import { Routes, Route, Link } from 'react-router-dom';
import { Register } from './pages/registration/Registration';
import { Profile } from './pages/profile/Profile';
import { useEffect } from 'react';
import {$login, setData} from './components/modal/FormStore'
import { useUnit } from 'effector-react'
import { useNavigate } from 'react-router-dom'

function App() {
	const store = useUnit($login)

	const navigate = useNavigate()

	useEffect(()=>{
		if(store === null) {
			navigate('/register'); 
			return
		}
		if (!Object.keys(store).length) return
		navigate('/profile')
	},[store])
	useEffect(()=>{
		(async()=>{
			try {
				let response = await fetch('http://localhost:5500/user/getMe', {
					method: 'GET',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
				})
				let res = await response.json()
				console.log(res);
		} catch (e) {
			console.log(e)
		}})()
	},[])

  return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Header />
						<Main />
					</>
				}
			/>
			<Route path='/register' element={<Register />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	)
}

export default App;