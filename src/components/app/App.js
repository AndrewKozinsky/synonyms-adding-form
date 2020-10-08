import React from 'react'
import Modal from "../modal"
import SearchPhrasesSynonyms from "../../modalWindowsContent/searchPhrasesSynonyms"
import SearchPhrasesSynonymsBottom
    from "../../modalWindowsContent/searchPhrasesSynonymsBottom/SearchPhrasesSynonymsBottom"
import './css/reset.css'
import './css/general.scss'
import './css/app.scss'


export default function App() {
    return (
        <div className="app">
            <Modal headerName='Редактирование группы синонимов...'>
                <SearchPhrasesSynonyms />
                <SearchPhrasesSynonymsBottom />
            </Modal>
        </div>
    )
}
