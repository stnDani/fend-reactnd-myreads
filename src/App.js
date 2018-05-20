import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";


class BooksApp extends React.Component {
    state = {
        books: []
    };

    updateBooks = () => {
        BooksAPI.getAll().then( (books) => {
            this.setState({ books })
        });
    };

    componentDidMount() {
        this.updateBooks();
    };


    render() {
        return (
            <div className="app">
                {/*<Route path="/searchBooks" component={SearchBooks}/>*/}
                <Route path="/searchBooks" render={() => (
                    <SearchBooks updateBooks={this.updateBooks}/>
                )}/>
                <Route exact path="/" render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Currently Reading</h2>
                                        <div className="bookshelf-books">
                                            <div>
                                                <ListBooks books={this.state.books} shelf={"currentlyReading"} updateBooks={this.updateBooks}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Want to Read</h2>
                                        <div className="bookshelf-books">
                                            <div>
                                                <ListBooks books={this.state.books} shelf={"wantToRead"} updateBooks={this.updateBooks}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Read</h2>
                                        <div className="bookshelf-books">
                                            <div>
                                                <ListBooks books={this.state.books} shelf={"read"} updateBooks={this.updateBooks}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="open-search">
                                <Link
                                    to={"/searchBooks"}
                                >Add a book</Link>
                            </div>
                        </div>
                        )
                    }
                />
            </div>
        )
    }
}

export default BooksApp
