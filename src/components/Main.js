import React, {useState} from 'react'
import axios from 'axios'
import Search from './Search'
import { Results } from './Results'
import Pagination from './Pagination'

const Main = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)


    const handleSearch = (e) => {
        e.preventDefault() // Prevent default submit behaviour
        setLoading(true)
        axios.get(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`).then(res => {
            setResults(res.data.result)
            setCurrentPage(1)
            setLoading(false)
        })

    }


    const indexOfLastResult = currentPage * 10;
    const indexOfFirstResult = indexOfLastResult - 10;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);



    return (
        <div>
          <div className='fact-searcher-cnt'>
          <h4>FACT SEARCHER</h4>
          <p>Type in a phrase and find out the craziest facts about <b>Chuck Norris</b> himself!</p>
          </div>
          <div className='search-cnt'>
            <Search handleSearch={handleSearch} setSearchQuery={setSearchQuery} loading={loading}/>
          </div>
          <Results results={currentResults} totalResults={results.length} loading={loading}/>
         {results.length > 0 && results.length > 10 ? <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={results.length}/> : null}
        </div>
    )
}

export default Main