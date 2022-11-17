import React from 'react'
import Button from '../../Components/Button/Button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css'
import raccoonImg from '../../Images/RACCOON.png'

export default function Login() {
	const login = async () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();

		await signInWithPopup(auth, provider)
	}

	return (
		<div className='login-wrapper'>
			<img src={raccoonImg} alt='Енот куда-то сбежал...' />
			{/* <div className='login-modal'> */}
				<Button color='grey' size='l' onClick={login}>
					Войти с помощью Google
				</Button>
			{/* <div/> */}
		</div>
	)
}
