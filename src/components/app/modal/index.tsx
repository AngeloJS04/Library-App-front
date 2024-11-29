import { ModalI } from '@/interface/components/modal.interface'
import React from 'react'



const Modal = ({ show, setShow, children, title }: ModalI) => {

    return (
        <>
            <div className={`modal  ${show ? 'modal-open' : ''}`}>
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='flex justify-between'>
                        <h3 className="font-bold text-lg">{title}</h3>
                        <div onClick={() => setShow(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="py-4">{children}</div>
                </div>
            </div>
        </>
    )
}

export default Modal