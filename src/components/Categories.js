import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Categories = () => {
    const [categories,setCategories] = useState([])
    const [randomFact, setRandomFact] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentCategory, setCurrentCategory] = useState()

    
    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(res => {
            setCategories(res.data)
        })
    }, []) //Get categories on component mount


    const getFactFromCategory = () => {
        setLoading(true)
        axios.get(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`).then(res => {
            setRandomFact(res.data.value)
            setLoading(false)
        })
    } 

    return (
        <div className='categories'>
                <h4>Choose category:</h4>
            <div className='categories-cnt'>
                {categories.map(category => <h5 key={category} className='categories-item' onClick={() => {
                    setCurrentCategory(category)
                }}>{category}</h5>
                )}
            </div>
            <div className='random-cnt'>
            {currentCategory ? (<button className='categories-btn' onClick={getFactFromCategory}>{loading ? (<div className="lds-dual-ring"></div>) : `Get random fact from ${currentCategory} category`}</button>) : null}
            </div>
            {randomFact ? (<div className='random-fact'>
                <h2>{randomFact}</h2>
            </div>) : null}
        </div>
    )
}

export default Categories
