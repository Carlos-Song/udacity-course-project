import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props.book
        }
    }
    render() {
        console.log('000', this.state.book);
        const bk = this.state.book;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book imageLinks={bk.imageLinks} title={bk.title} authors={bk.authors} publisher={bk.publisher} publishedDate={bk.publishedDate}></Book>
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;