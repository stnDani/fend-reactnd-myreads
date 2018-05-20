import React from 'react'
import ListBooks from "./ListBooks"


class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <div>
                        <ListBooks books={this.props.books} shelf={this.props.shelf} updateBooks={this.props.updateBooks}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf