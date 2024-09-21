import React from 'react'

const Search = ({Search,SetSearch}) => {
  return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()} >
            <label htmlFor='search'>Search</label>
            <input
            id=' search'
            type='text'
            placeholder='Search'
            value={Search}
            onChange={ (e) => SetSearch(e.target.value)}
            
            />
            


        </form>

)
}

export default Search