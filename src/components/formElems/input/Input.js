import React from 'react'
import { useField } from 'formik'
import {getRandomStr} from "../../../utils/misc"
import './css/Input.scss'


export default function Input(props) {

    const [field] = useField(props)

    let {
        label,
        value,
        placeholder
    } = props

    placeholder = placeholder ? placeholder : null

    const id = getRandomStr()

    return (
        <>
            <label className='input__label' htmlFor={id}>{label}</label>
            <input className='input' value={value} {...field} placeholder={placeholder} id={id} />
        </>
    )
}
