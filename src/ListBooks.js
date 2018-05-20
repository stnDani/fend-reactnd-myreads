import React, { Component } from 'react'
import { update } from './BooksAPI';


class ListBooks extends Component {

    changeShelfTo = (book, shelf) => {
        update(book, shelf)
            .then((response) => console.log('updated', response));
        this.forceUpdate();
        this.props.updateBooks();
    };

    render() {
        return (
            <ol className='books-grid'>
                {this.props.books.filter((book) => book.shelf === this.props.shelf || this.props.shelf === 'search').map( (book) => (
                    <li key={book.id} className='book'>
                        <div className="book-top">
                            <div className='book-cover' style={{
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}>
                            </div>
                            <div className="book-shelf-changer">
                                <select onChange={e => {
                                    this.changeShelfTo(book, e.target.value);
                                    book.shelf = e.target.value;
                                    }} value={book.shelf}>
                                    <option value="moveTo" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.join()}</div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks