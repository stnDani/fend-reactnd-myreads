import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";


class BooksApp extends React.Component {
    state = {
        books: [
            {
                "id": "1",
                "imageLinks" : {
                    "thumbnail": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                },
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "shelf": "currentlyReading"
            },
            {
                "id": "2",
                "imageLinks" : {
                    "thumbnail": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                },
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "shelf": "wantToRead"
            },
            {
                "id": "3",
                "imageLinks" : {
                    "thumbnail": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                },
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "shelf": "none"
            }
        ]
    };



    render() {
        return (
            <div className="app">
                <Route path="/searchBooks" component={SearchBooks}/>
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
                                                <ListBooks books={this.state.books} shelf={"currentlyReading"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Want to Read</h2>
                                        <div className="bookshelf-books">
                                            <div>
                                                <ListBooks books={this.state.books} shelf={"wantToRead"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Read</h2>
                                        <div className="bookshelf-books">
                                            <div>
                                                <ListBooks books={this.state.books} shelf={"read"}/>
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
