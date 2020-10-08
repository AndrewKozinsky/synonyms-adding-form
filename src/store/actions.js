export function setSynonyms(synonyms) {
    return {
        type: 'SET_SYNONYMS',
        synonyms
    }
}

export function updateSynonym(synonym) {
    return {
        type: 'UPDATE_SYNONYM',
        synonym
    }
}

export function deleteSynonym(synonym) {
    return {
        type: 'DELETE_SYNONYM',
        synonym
    }
}

export function editSynonym(synonym) {
    return {
        type: 'EDIT_SYNONYM',
        synonym
    }
}

export function clearEditableSynonym() {
    return {
        type: 'CLEAR_EDITABLE_SYNONYM'
    }
}

export function clearSynonyms() {
    return {
        type: 'CLEAR_SYNONYMS'
    }
}