import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'

class Search extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div className="search-books">
                <SearchBar />
                <SearchResult />
            </div>
        );
    }
}

export default Search;