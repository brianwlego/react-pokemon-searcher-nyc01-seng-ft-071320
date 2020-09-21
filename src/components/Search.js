import React from 'react'

const Search = (props) => {

  const change = (e) => {
    props.searchHandler(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input name="searchValue" value={ props.searchValue} onChange={change} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
