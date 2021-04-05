import React from 'react'

export const Results = ({results}) => {
    return (
        <div className='results-cnt'>
        {results.map(fact => (
            <p key={fact.id}>{fact.value}</p>
        ))}
    </div>
    )
}
