import React, { Component } from 'react';
import { getAll, search, update } from '../../BooksAPI.js';



class SearchResult extends Component {
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
            
                </ol>
            </div>
        );
    }
}

export default SearchResult;