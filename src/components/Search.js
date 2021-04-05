import React from 'react'

const Search = ({handleSearch, setSearchQuery}) => {
    return (
        <div>
            <form onSubmit={handleSearch}>
            <input id='search-input' type='text' placeholder='Search..' onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type='submit' id='submit-btn'>Search!</button>
            </form>
        </div>
    )
}

export default Search



