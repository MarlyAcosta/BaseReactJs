import React from 'react'

const Pagination = ({ prev, next, onAtras, onSiguiente }) => {

    const irAtras = () => {
        onAtras();
    }

    const irSiguiente = () => {
        onSiguiente();
    }


    return (
        <nav className='my-5' >
            <ul className='pagination justify-content-center'>
                {
                    prev ?
                        <li className='page-item'>
                            <button className='page-link' onClick={irAtras}>Anterior</button>
                        </li>
                        : null
                }
                {
                    next ?
                        <li className='page-item'>
                            <button className='page-link' onClick={irSiguiente}>Siguiente</button>
                        </li>
                        : null
                }


            </ul>
        </nav>
    )
}

export default Pagination
