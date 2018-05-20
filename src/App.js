import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import SearchBooks from "./SearchBooks";
import BookShelf from "./BookShelf"

const CURRENTLY_READING = "Currently Reading";
const WANT_TO_READ = "Want to Read";
const READ = "Read";

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
                {/*<Route path="/search" component={SearchBooks}/>*/}
                <Route path="/search" render={() => (
                    <SearchBooks updateBooks={this.updateBooks} shelvedBooks={this.state.books}/>
                )}/>
                <Route exact path="/" render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <BookShelf books={this.state.books} shelf={"currentlyReading"} updateBooks={this.updateBooks} shelfTitle={CURRENTLY_READING}/>
                                    <BookShelf books={this.state.books} shelf={"wantToRead"} updateBooks={this.updateBooks} shelfTitle={WANT_TO_READ}/>
                                    <BookShelf books={this.state.books} shelf={"read"} updateBooks={this.updateBooks} shelfTitle={READ}/>
                                </div>
                            </div>
                            <div className="open-search">
                                <Link
                                    to={"/search"}
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
