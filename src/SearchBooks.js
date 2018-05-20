import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import {debounce} from 'throttle-debounce';
import escapeRegExp from 'escape-string-regexp';
import { Debounce } from 'react-throttle';

class SearchBooks extends Component {

    state = {
        books: [],
        query: ''
    };

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        });

        const newSearch = this.state.query;

        if(!newSearch) {
            this.setState({
                books : []
            })
        } else {
            BooksAPI.search(query).then((books) => {
                console.log(books);
                books.map( (book) => book.shelf = "none");
                this.setState({ books });
            })
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
                        {/*<Debounce time="400" handler="onChange">*/}
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        {/*</Debounce>*/}
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