import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {editSynonym, deleteSynonym} from "./js/functions"
import SynonymForm from "../synonymForm"
import './css/SynonymsList.scss'


export default function SynonymsList() {
    const {synonyms} = useSelector( store => store )

    const rows = synonyms.map( synonymObj => {
        return <Synonym key={synonymObj.id} data={synonymObj} />
    } )

    return <div className='synonyms-cards'>
        {rows}
    </div>
}


function Synonym({data}) {

    const dispatch = useDispatch()

    // Получу редактируемый синоним
    const {editableSynonym} = useSelector(store => store)

    // Если редактирумый синоним равен переданному, то показать форму редактирования синонима
    if(editableSynonym && editableSynonym.id === data.id) {
        return <SynonymForm />
    }

    // Синоним не редактируют, поэтому показать его карточку.
    return <div className='synonym-card'>
        <p className='synonym-card__name'>{data.synonym}</p>
        <div className='synonym-card__right-side'>
            <button
                className='synonym-card__btn synonym-card__btn--edit'
                title='Редактировать синоним'
                onClick={() => {editSynonym(dispatch, data)}}
            />
            <button
                className='synonym-card__btn synonym-card__btn--delete'
                title='Удалить синоним'
                onClick={() => deleteSynonym(dispatch, data)}
            />
        </div>
    </div>
}