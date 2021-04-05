import React from 'react'

const Search = ({handleSearch, setSearchQuery, loading}) => {
    return (
        <div>
            <form onSubmit={handleSearch}>
            <input id='search-input' type='text' placeholder='Search..' onChange={(e) => setSearchQuery(e.target.value)} autoComplete='off' required/>
            <button type='submit' className='submit-btn'>{loading ? (<div class="lds-dual-ring"></div>): 'Search!'}</button>
            </form>
        </div>
    )
}

export default Search



