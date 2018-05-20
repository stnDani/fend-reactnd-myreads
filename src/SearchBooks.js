import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import _ from 'lodash';

class SearchBooks extends Component {

    state = {
        books: [],
        query: ''
    };

updateQuery = (query) => {

    const apiCall = _.debounce((query) => {
        BooksAPI.search(query).then((books) => {
            if (typeof books === 'undefined' || (!Array.isArray(books) && books.hasOwnProperty('error'))) {
                return;
            } else {
                books.map((book) => {
                    if(!book.imageLinks) {
                        book.imageLinks = {
                            thumbnail: ''
                        };
                    }
                    book.shelf = "none";
                });
                this.setState({books});
                console.log(books);
            }
        });
    }, 500);

    this.setState({
        query: query.trim()
    });

    const newSearch = this.state.query;

    if(!newSearch || newSearch === '') {
        this.setState({
            books : []
        })
    } else {
        apiCall(newSearch);
    }
};

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to={"/"}
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks books={this.state.books} shelf={"none"}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks