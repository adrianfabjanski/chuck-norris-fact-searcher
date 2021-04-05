import React from 'react'

export const Results = ({results, totalResults}) => {
    return (
            <div>
                <h4 className='total-results'>{totalResults} results</h4>
                <div className='results-cnt'>
        {results.map(fact => (
            <p key={fact.id} className='results-item'>{fact.value}</p>
        ))}
    </div>
            </div>
    )
}
