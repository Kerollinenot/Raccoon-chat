import classNames from 'classnames'
import React from 'react'
import './Button.css'

export default function Button({
    onClick,
    color = 'none',
    children,
    size = 's',
    borderRadius
}) {
    
    const btnClass = classNames({
        'btn': true,

        'btn--not--color': color === 'none',
        'btn--green': color === 'green',
        'btn--red': color === 'red',
        'btn--grey': color === 'grey',
        'btn--lightblue': color === 'lightblue',

        'btn--small': size === 's',
        'btn--medium': size === 'm',
        'btn--large': size === 'l',

        'not-border-radius': borderRadius === false
    })

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}
