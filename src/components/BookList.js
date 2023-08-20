import { useContext } from "react"
import BookShow from "./BookShow"
import BooksContext from "../context/books"

export default function BookList({ books, onDelete, onEdit }) {
    const { count, incrementCount } = useContext(BooksContext);


    const bookList = books.map(book => <BookShow key={book.id} book={book}
        onDelete={onDelete}
        onEdit={onEdit}
    />)

    return (
        <div className="book-list">
            <ul>
                <li>
                    {count}
                    <button onClick={incrementCount}>Increment</button>
                    {bookList}
                </li>
            </ul>
        </div>
    )
}