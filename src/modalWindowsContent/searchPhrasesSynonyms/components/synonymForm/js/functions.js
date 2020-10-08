import React from "react"
import * as Yup from "yup"
import {Form} from "formik"
import {clearEditableSynonym, setSynonyms, updateSynonym} from "../../../../../store/actions"
import Input from "../../../../../components/formElems/input/Input"
import Button from "../../../../../components/formElems/buttons/button"
import CloseButton from "../../../../../components/formElems/buttons/closeButton"
import s from '../css/SynonymForm.module.scss'


// Проверка полей формы
export const validationSchema = Yup.object({
    synonym: Yup.string()
        .required('Это поле обязательно для заполнения'),
})

export function createForm(formik, editableSynonym, dispatch, existingSynonyms) {

    let closeBtn = null
    if(editableSynonym)closeBtn = <CloseButton onClickHandler={() => exitEditableMode(dispatch)} />

    return (
        <Form className={s.form}>
            <div className={s.inputWrapper}>
                <Input label='Добавление синонима:' name='synonym' placeholder='Введите название'/>
            </div>
            <div className={s.bottomSection}>
                <div className={s['bottomSection--left']}>
                    <SubmitBtn
                        formik={formik}
                        editableSynonym={editableSynonym}
                        existingSynonyms={existingSynonyms}
                    />
                </div>
                <div className={s['bottomSection--right']}>
                    {closeBtn}
                </div>
            </div>
        </Form>
    )
}


function SubmitBtn({formik, editableSynonym, existingSynonyms}) {

    // Атрибуты кнопки
    const attrs = {
        text: 'Добавить',
        type: 'submit'
    }

    if(editableSynonym) attrs.text = 'Сохранить'

    // Если в форме есть ошибки или
    // форму еще не заполняли или
    // форму уже отправили,
    // то блокировать кнопку отправки
    if(!formik.isValid || !formik.dirty || formik.isSubmitting) {
        attrs.disabled = true
    }

    // Если такой синоним уже есть, то заблокировать кнопку чтобы его было невозможно добавить
    const newSynonymValue = formik.values.synonym
    const isNewSynomymExists = existingSynonyms.find(synObj => synObj.synonym === newSynonymValue)
    if(isNewSynomymExists) {
        attrs.disabled = true
    }

    return <Button {...attrs} />
}


export async function onSubmitHandler(values, dispatch, existingSynonyms, editableSynonym, formik) {

    // Если синоним редактируют, то обновить значение существующего в Хранилище
    if(editableSynonym) {
        let newSynonym = {...editableSynonym}
        newSynonym.synonym = values.synonym

        dispatch(updateSynonym(newSynonym))

        // Выйти из режима редактирования
        exitEditableMode(dispatch)
    }
    // В противном случае добавить новый в Хранилище
    else {
        const newSynonym = {
            synonym: values.synonym,
            id: Date.now()
        }

        // Если синоним уже существует, то завершить функцию
        if(existingSynonyms.find(synObj => synObj.synonym === newSynonym))
            return

        // Синонима не существует, поэтому добавить в Хранилище
        dispatch(setSynonyms(newSynonym))
    }

    // Очистить форму
    formik.resetForm()
}

function exitEditableMode(dispatch) {
    dispatch(clearEditableSynonym())
}