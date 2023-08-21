import { useContext } from "react"
import BookShow from "./BookShow"
import BooksContext from "../context/books"

export default function BookList() {
    const { books } = useContext(BooksContext)

    const bookList = books.map(book => <BookShow key={book.id} book={book}/>)

    return (
        <div className="book-list">
            <ul>
                <li>
                    {bookList}
                </li>
            </ul>
        </div>
    )
}