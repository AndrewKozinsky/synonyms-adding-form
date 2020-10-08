import React from 'react'
import './css/CloseButton.scss'

export default function CloseButton(props) {

    let {onClickHandler} = props
    if(typeof onClickHandler !== 'function') {
        onClickHandler = () => {}
    }

    return (
        <button className='close-btn' onClick={onClickHandler} />
    )
}
