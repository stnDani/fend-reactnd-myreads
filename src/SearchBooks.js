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
        if(query === '') {
            this.setState({
                query: '',
                books : []
            });
            return;
        }

        const apiCall = _.debounce((query) => {
            BooksAPI.search(query).then((books) => {
                if (typeof books === 'undefined' || (!Array.isArray(books) && books.hasOwnProperty('error'))) {
                    return;
                } else {
                    books.map((book) => {
                        //prevents rendering errors if books don't have an image link
                        if(!book.imageLinks) {
                            book.imageLinks = {
                                thumbnail: ''
                            };
                        }

                        //prevents rendering errors if books don't have an author
                        if(!book.authors) {
                            book.authors = [];
                        }

                        book.shelf = "none";

                        //mirrors the state in search book results with the shelved books
                        this.props.shelvedBooks.forEach((shelvedBook) => {
                            if (shelvedBook.id === book.id) {
                                book.shelf = shelvedBook.shelf;
                            }
                        });

                    });
                    this.setState({books});
                }
            });
        }, 200);

        this.setState({
            query: query.trim()
        });

        apiCall(query);
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
                    <ListBooks books={this.state.books} shelf={"search"} updateBooks={this.props.updateBooks}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks