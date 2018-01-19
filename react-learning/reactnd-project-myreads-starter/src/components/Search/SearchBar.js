import React, { Component } from 'react';
import { getAll, search, update } from '../../BooksAPI.js';


class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                    
                    <input type="text" placeholder="Search by title or author" />

                </div>
            </div>
        );
    }
}

export default SearchBar;