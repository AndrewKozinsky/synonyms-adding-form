import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Button from "../../components/formElems/buttons/button"
import localStorageDB from "../../utils/localStorageDB"
import {clearSynonyms} from "../../store/actions"
import s from './css/SearchPhrasesSynonymsBottom.module.scss'


export default function SearchPhrasesSynonymsBottom() {
    return (
        <div className={s.wrapper}>
            <div>
                <SaveBtn />
            </div>
            <div>
                <ResetBtn />
            </div>
        </div>
    )
}

function SaveBtn() {

    const {synonyms} = useSelector(store => store)

    function saveSynonymsIntoLocalStorage() {
        localStorageDB.save(synonyms)
    }

    let isButtonDisabled = synonyms.length === 0

    return (
        <Button
            text='Сохранить изменения'
            role='accept'
            disabled={isButtonDisabled}
            onClick={saveSynonymsIntoLocalStorage}
        />
    )
}


function ResetBtn() {
    const dispatch = useDispatch()

    function clearSynonymsEverywhere() {
        // Удалить синонимы из localStorage
        localStorageDB.clear()

        // Удалить синонимы из Хранилища
        dispatch(clearSynonyms())
    }

    return (
        <Button
            text='очистить синонимы'
            role='reset'
            onClick={clearSynonymsEverywhere}
        />
    )
}