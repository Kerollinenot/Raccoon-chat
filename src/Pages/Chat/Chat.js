import { AppContext } from '../../index';
import Button from '../../Components/Button/Button';
import Message from '../../Components/Message/Message'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiOutlineSend } from 'react-icons/ai'

import {
	query,
	collection,
	addDoc,
	getFirestore,
	serverTimestamp,
	orderBy
} from "firebase/firestore";

import Loader from '../../Components/Loader/Loader';

import './Chat.css'

export default function Chat() {
	const scrollRef = useRef(null);

	const [value, setValue] = useState('')

	const auth = getAuth()
	const [user] = useAuthState(auth)
	const app = useContext(AppContext);
	const db = getFirestore(app);

	const docRef = collection(db, "messages");

	const queryMessages = query(docRef, orderBy("createdAt"));
	const [messages, loading] = useCollectionData(queryMessages);

	const scrollToRef = () => {
		document.querySelector('#ref').scrollIntoView({
			behavior: "smooth",
		})
	}

	useEffect(() => {
		setTimeout(scrollToRef, 1000)
	}, [])

	if (loading) {
		return <Loader />
	}

	const sendMessage = async () => {
		
		if (value !== '') {
			await addDoc(docRef, {
				uid: user.uid,
				displayName: user.displayName,
				photoUrl: user.photoURL,
				text: value,
				createdAt: serverTimestamp()
			});

			setValue('');

			scrollToRef();
		}
	}

	return (
		<div className='chat'>
			<div className='send-msg'>
				<input
					autoFocus
					placeholder='Введите сообщение'
					value={value}
					type='textarea'
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" ? sendMessage() : null} />
				<Button
					color='lightblue'
					size='m'
					onClick={sendMessage}
					borderRadius={false}
				>
					<AiOutlineSend />
				</Button>
			</div>

			<div className='messages-box'>
				{messages.map((message, index) => <Message
					key={index}
					text={message.text}
					photoUrl={message.photoUrl}
					displayName={message.displayName}
					isThisUser={user.uid === message.uid}
				/>)}
				<div id='ref' ref={scrollRef}></div>
			</div>
		</div>
	)
}
