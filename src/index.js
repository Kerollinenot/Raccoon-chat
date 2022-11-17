import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const app = initializeApp({
	apiKey: "AIzaSyBWliR5ky_l_JtT5hRo0mGV5ro5eojeZJQ",
	authDomain: "raccoon-chat-dad5e.firebaseapp.com",
	projectId: "raccoon-chat-dad5e",
	storageBucket: "raccoon-chat-dad5e.appspot.com",
	messagingSenderId: "495640616895",
	appId: "1:495640616895:web:fd381f3dbd5a4bb686cb0a",
	measurementId: "G-YGEVQLK7GC",
});

export const AppContext = createContext(app)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<AppContext.Provider value={app}>
		<App />
	</AppContext.Provider>
);