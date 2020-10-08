import React from 'react'
import CloseButton from "../formElems/buttons/closeButton"
import './css/Modal.scss'


export default function Modal({children, headerName}) {
    return (
        <div className='modal__bg'>
            <article className='modal__modal'>
                <header className='modal__header-section'>
                    <h3 className='modal__header-text'>{headerName}</h3>
                    <div className='modal__header-right-side'>
                        <CloseButton onClickHandler />
                    </div>
                </header>
                <ModalContent content={children} />
            </article>
        </div>
    )
}


function ModalContent({content}) {

    if(Array.isArray(content)) {
        return (
            <>
                <section className='modal__content-section'>
                    {content[0]}
                </section>
                <footer className='modal__content-footer'>
                    {content[1]}
                </footer>
            </>
        )
    }
    else {
        return (
            <section className='modal__content-section'>
                {content}
            </section>
        )
    }
}