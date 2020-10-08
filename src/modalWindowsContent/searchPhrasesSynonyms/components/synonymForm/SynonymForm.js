import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Formik } from 'formik'
import {
    validationSchema,
    createForm,
    onSubmitHandler
} from "./js/functions"


export default function SynonymForm() {

    const dispatch = useDispatch()

    // Получу все синонимы
    const existingSynonyms = useSelector(store => store.synonyms)

    // Получу редактируемый синоним
    const {editableSynonym} = useSelector(store => store)

    // Начальные значения полей формы
    const initialValues = { synonym: '' }
    if(editableSynonym) initialValues.synonym = editableSynonym.synonym

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, formik) => onSubmitHandler(values, dispatch, existingSynonyms, editableSynonym, formik)}
            >
                { formik => createForm(formik, editableSynonym, dispatch, existingSynonyms) }
            </Formik>
        </div>
    )
}
