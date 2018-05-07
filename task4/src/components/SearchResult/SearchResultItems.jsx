import React, { Component } from 'react'
import SearchResultItem from './SearchResultItem'

export default class SearchResultItems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filmsStub: [
        {id: 1, name: 'Kill bill', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10},
        {id: 2, name: 'Kill bill2', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10},
        {id: 3, name: 'Kill bill3', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10},
        {id: 4, name: 'Kill bill4', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10},
        {id: 5, name: 'Kill bill5', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10},
        {id: 6, name: 'Kill bill6', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10},
        {id: 7, name: 'Kill bill7', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10}
      ]
    }
  }

  render () {
    return (
      <div className='search-result-items row'>
        {
          this.state.filmsStub.map((elm, i) =>
            <SearchResultItem key={i} film={elm} />
          )
        }
      </div>

    )
  }
}
