import React from 'react'
import ListBooks from "./ListBooks"


const BookShelf = (props) => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <div>
                        <ListBooks books={props.books} shelf={props.shelf} updateBooks={props.updateBooks}/>
                    </div>
                </div>
            </div>
        )
};

export default BookShelf