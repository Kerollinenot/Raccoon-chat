import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, signOut } from 'firebase/auth'
import { ImExit } from 'react-icons/im'

import Button from '../Button/Button'

import './Navbar.css'

export default function Navbar() {
    const auth = getAuth()
    const [user] = useAuthState(auth)

    return (
        <div className='navbar'>
            <span className="logo">Raccoon Chat</span>

            {user ?
                <Button
                    color='none'
                    size='m'
                    onClick={() => { signOut(auth) }}
                >
                    <ImExit />
                </Button>
                :
                null
            }
        </div>
    )
}
