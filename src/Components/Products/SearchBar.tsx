import "./SearchBar.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";


function SearchBar(props) {
    return (
        <div className="component-search-input">
            <div className="input-container" id={'test-div'}>
                <input
                    type="text"
                    id="action-search"
                    placeholder="Search Product"
                    maxLength= {30}
                    minLength= {2}
                    onChange={event => props.handleSearch(event.target.value)}
                />
            </div>
            <button
                type="submit"
                id={'search-button'}
                onClick={() => props.handleSubmit()}
                value="Search">
              <SearchIcon/>
            </button>
        </div>
    )
}

export default SearchBar


