export function setSynonyms(state, action) {
    const copyState = {...state}
    const copySynonyms = [...copyState.synonyms]

    // Тут будет или объект или массив объектов
    const synonyms = action.synonyms

    if(Array.isArray(synonyms))  {
        copySynonyms.push(...action.synonyms)
    } else {
        copySynonyms.push(action.synonyms)
    }

    copyState.synonyms = copySynonyms

    return copyState
}

export function updateSynonym(state, action) {
    const copyState = {...state}
    const copySynonyms = [...copyState.synonyms]

    // Найду редактируемый синоним и заменю его текст
    const editableSynonym = copySynonyms.find(syn => syn.id === action.synonym.id)
    if(!editableSynonym) return state


    editableSynonym.synonym = action.synonym.synonym

    copyState.synonyms = copySynonyms

    return copyState
}

export function deleteSynonym(state, action) {
    const copyState = {...state}

    // Сделаю новый массив без удаляемого синонима
    // И поставлю в copyState.synonyms
    copyState.synonyms = copyState.synonyms.filter(synObj => synObj.id !== action.synonym.id)

    return copyState
}

export function editSynonym(state, action) {
    const copyState = {...state}

    copyState.editableSynonym = action.synonym

    return copyState
}

export function clearEditableSynonym(state) {
    const copyState = {...state}

    copyState.editableSynonym = null

    return copyState
}

export function clearSynonyms(state) {
    const copyState = {...state}

    copyState.synonyms = []

    return copyState
}