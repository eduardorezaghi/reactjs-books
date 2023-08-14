import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";


export default function App() {
    const [books, setBooks] = useState([])

    function deleteBookById(id) {
        setBooks(books.filter(book => book.id !== id))
    }

    function createBook(title) {
        if (!title) return;
        else {
            /* Update state by using the spread operator
             * to copy the existing array and add
             * a new book to the end */
            setBooks([...books, { 
                id: crypto.randomUUID(),
                title
            }])
            console.log(books)
        }
    };

    return <div className='app'>
        <BookList books={books}  onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
    </div>
}
