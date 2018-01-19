import React, { Component } from 'react';
import BookShelf from './BookShelf'



class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booklist: []
        }
    }


    render() {
        let result;
        if (this.state.booklist.length) {
            result = this.state.booklist.map((book) => {
                return (<BookShelf book={book}></BookShelf>);
            });
        }
        console.log('8888', this.state.booklist);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {result}
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.props.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            booklist: nextProps.booklist
        });
    }
}

export default BookList;