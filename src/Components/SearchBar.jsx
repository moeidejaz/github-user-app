import React from 'react'
import searchIcon from '../assets/searchIcon.svg'
import styles from '../styles/search.module.css'

const SearchBar = () => {
  return (
    <form>
        {/* <div>_search</div> */}
        <img src={searchIcon} alt="_search" />
        <input type="text" name="input" id="input" placeholder='Search Github username'/>
        <button>Search</button>
    </form>
  )
}

export default SearchBar