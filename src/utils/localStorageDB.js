class LocalStorageDB {
    getAll() {
        return JSON.parse(localStorage.getItem('synonyms')) || []
    }

    delete(synonym) {
        // Получить все синонимы из LocalStorage
        const synonyms = this.getAll()

        // Создать новый массив без удаляемого синонима
        const newSynonyms = synonyms.filter(synonymObj => synonymObj.id !== synonym.id)

        this.save(newSynonyms)
    }

    save(synonyms) {
        if(synonyms.length === 0) {
            localStorage.removeItem('synonyms')
        }
        else {
            localStorage.setItem('synonyms', JSON.stringify(synonyms))
        }
    }

    clear() {
        localStorage.removeItem('synonyms')
    }
}

export default new LocalStorageDB()