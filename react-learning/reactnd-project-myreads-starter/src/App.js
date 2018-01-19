import React from 'react'
import BookList from './components/BookList'
import Search from './components/Search'
import { getAll, search, update } from './BooksAPI.js';


import './App.css'

class BooksApp extends React.Component {


  state = {
    showSearchPage: false,
    booklist: []
  }
  
  componentDidMount() {

  }
  

  render() {
    
  
  
    return (
      
      <div className="app">
        {this.state.showSearchPage 
          ? <Search /> : <BookList booklist= {this.state.booklist}/>
        }
      </div>
    )
  }
}

export default BooksApp
