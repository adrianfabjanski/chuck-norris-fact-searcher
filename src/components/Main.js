import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './Search'
import chuck_img from '../img/chuck-cartoon.png'
import { Results } from './Results'
import Pagination from './Pagination'

const Main = () => {
    const [results, setResults] = useState([])
    const [fact, setFact] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)



    const handleRandomFact = () => {
        axios.get('https://api.chucknorris.io/jokes/random').then(res => setFact(res.data.value))
    }

    const handleSearch = (e) => {
        e.preventDefault()
        axios.get(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`).then(res => {
            setResults(res.data.result)
            console.log(res.data.result)
        })

    }


    const indexOfLastResult = currentPage * 10;
    const indexOfFirstResult = indexOfLastResult - 10;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

    const paginate = (num) => setCurrentPage(num)

    return (
        <div>
        <a href='/'>
        <div className='header-cnt'>
            <h2>Chuck Norris</h2>
            <img src={chuck_img} height='120px' alt=''/> 
          </div>
        </a>
          <div className='desc-cnt'>
          <h4>FACT SEARCHER</h4>
          <p>Type in a phrase and find out the craziest facts about <b>Chuck Norris</b> himself!</p>
          </div>
          <div className='search-cnt'>
            <Search handleSearch={handleSearch} setSearchQuery={setSearchQuery}/>
          </div>
         <Results results={currentResults}/>
         <Pagination totalResults={results.length} paginate={paginate}/>
        </div>
    )
}

export default Main