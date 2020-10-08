import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setSynonyms} from "../../store/actions"
import PromptHeader from "../../components/formElems/promptHeader"
import SynonymForm from "./components/synonymForm"
import SynonymsList from "./components/synonymsList"
import localStorageDB from "../../utils/localStorageDB"


export default function SearchPhrasesSynonyms() {

    const dispatch = useDispatch()

    // Получу редактируемый синоним
    const {editableSynonym} = useSelector(store => store)

    useEffect(function () {
        // Получу массив с сохранёнными поисковыми фразами
        const synonymsArr = localStorageDB.getAll()

        // Помещу их в Хранилище
        dispatch(setSynonyms(synonymsArr))
    }, [])


    let synonymForm = <SynonymForm />
    // Если нахожусь в режиме редактирования синонима, то не показывать форму дабавления нового
    if(editableSynonym) synonymForm = null

    return (
        <div>
            <PromptHeader header='Синонимы' />
            {synonymForm}
            <SynonymsList />
        </div>
    )
}