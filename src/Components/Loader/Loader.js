import React from 'react'

import './Loader.css'

export default function Loader() {
    return (
        <div className='loader-wrapper'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}
