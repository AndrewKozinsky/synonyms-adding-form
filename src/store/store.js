import {createStore} from "redux"

import {
    setSynonyms,
    updateSynonym,
    deleteSynonym,
    editSynonym,
    clearEditableSynonym,
    clearSynonyms
} from './reducers'


const initialState = {
    synonyms: [],
    editableSynonym: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SYNONYMS':
            return setSynonyms(state, action)
        case 'UPDATE_SYNONYM':
            return updateSynonym(state, action)
        case 'DELETE_SYNONYM':
            return deleteSynonym(state, action)
        case 'EDIT_SYNONYM':
            return editSynonym(state, action)
        case 'CLEAR_EDITABLE_SYNONYM':
            return clearEditableSynonym(state, action)
        case 'CLEAR_SYNONYMS':
            return clearSynonyms(state, action)
        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())