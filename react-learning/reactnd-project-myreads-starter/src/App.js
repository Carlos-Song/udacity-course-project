import React from 'react'
import BookList from './components/BookList'
import Search from './components/Search'
import { getAll, search, update } from './BooksAPI.js';


import './App.css'

class BooksApp extends React.Component {


  state = {
    showSearchPage: true,
    booklist: []
  }
  
  componentDidMount() {
    getAll().then(books=> {
      console.log(books);
      this.setState({ booklist: books });
    })
  
  }
  
  search = (search) => {
    getAll({ search }).then((books) => {
      this.setState({ booklist: books });
    });
  }

  showChange(){
    this.setState({showSearchPage:false});
  }

  render() {
    
  
  
    return (
      
      <div className="app">
        <Search onSearch={this.search} />
        <BookList booklist={this.state.booklist} />
      </div>
    )
  }
}

export default BooksApp
