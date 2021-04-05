import React, {useState} from 'react'
import axios from 'axios'

const Random = () => {
    const [randomFact, setRandomFact] = useState('')
    const [loading, setLoading] = useState(false)

        const handleRandomFact = () => {
            setLoading(true)
        axios.get('https://api.chucknorris.io/jokes/random').then(res => {
            setRandomFact(res.data.value)
            setLoading(false)
        })
    }
    return (
        <div className='random-cnt'>
            <button className='random-btn' onClick={handleRandomFact}>{loading ? (<div class="lds-dual-ring"></div>): 'Get random fact!'}</button>
            {randomFact ? (<div className='random-fact'>
            <h2 >{randomFact}</h2>
            </div>) : null}
        </div>
    )
}

export default Random
