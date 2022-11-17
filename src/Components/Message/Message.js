import React from 'react'

import './Message.css'

export default function Message({ text, displayName, photoUrl, isThisUser }) {
	

	const classes = isThisUser ? 'message end' : 'message start';

	return (
		<div className={classes}>
			<div className='user-info'>
				<img className='user-avatar' src={photoUrl} alt={'../../Images/RACCOON.png'} />
				<span className='user-name'>{displayName}</span>
			</div>
			<span className='text'>{text}</span>
		</div>
	)
}
