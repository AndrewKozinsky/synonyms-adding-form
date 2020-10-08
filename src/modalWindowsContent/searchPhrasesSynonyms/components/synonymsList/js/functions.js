import {
    deleteSynonym as deleteSynonymAction,
    editSynonym as editSynonymAction
} from "../../../../../store/actions"


export function editSynonym(dispatch, synonymObj) {
    // Поставить в Хранилище информацию, что приступили к редактированию синонима
    dispatch(editSynonymAction(synonymObj))
}

export function deleteSynonym(dispatch, synonymObj) {
    // Удалить синоним из Хранилища
    dispatch(deleteSynonymAction(synonymObj))
}
