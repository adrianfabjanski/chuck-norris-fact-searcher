import React from 'react'

const Pagination = ({totalResults, paginate}) => {
    const pageNumbers = [];


    for(let i = 1; i <=Math.ceil(totalResults / 10); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <p onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
