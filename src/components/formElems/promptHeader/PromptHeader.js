import React from 'react'
import './css/PromptHeader.scss'

export default function PromptHeader(props) {

    const {header} = props

    return <div className='prompt-header'>
        <p className='prompt-header__text'>{header}</p>
        <button className='prompt-header__question-btn' />
    </div>
}