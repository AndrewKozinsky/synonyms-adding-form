import React from 'react'
import './css/Button.scss'

export default function Button(props) {
    const {
        text,
        disabled,
        role, // accept или reset,
        type = 'button', // тип кнопки: button (по умолчанию) или submit
        onClick = () => {}
    } = props

    if(!text) return null

    // Классы
    let cls = ['button']
    if(role === 'accept') cls.push('button--accept')
    if(role === 'reset') cls.push('button--reset')
    cls = cls.join(' ')

    return (
        <button className={cls} disabled={!!disabled} type={type} onClick={onClick}>
            {text}
        </button>
    )
}
