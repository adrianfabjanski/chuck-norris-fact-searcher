import React from 'react'

const Pagination = ({currentPage, setCurrentPage, totalResults}) => {
    const totalPages = [];


    for(let i = 1; i <= Math.ceil(totalResults / 10); i++) {
        totalPages.push(i)
    } // Push to pages array depending on results length

    const previousPage = () => {
        if(currentPage === 1) {
            return
        }//Prevent from going below 1

        setCurrentPage(currentPage - 1)
    } 

    const nextPage = () => {
        if(currentPage === totalPages.length) {
            return
        } //Prevent from going beyond total pages

        setCurrentPage(currentPage + 1)
    }

    return (
        <div className='page-btn-cnt'>
            <button onClick={previousPage} className='page-btn'>Previous</button>
            <button onClick={nextPage} className='page-btn'>Next</button>
            <p id='page-counter'>page {currentPage} of {totalPages.length}</p>
        </div>
    )
}

export default Pagination
