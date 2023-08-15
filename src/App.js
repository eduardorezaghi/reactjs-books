import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";


export default function App() {
    const [books, setBooks] = useState([])

    /* 
    * Update state by using the map function to
    * loop through the array and replace the
    * book with the matching id.
    * 
    * The function will be passed to childre
    * components so they can update the state
    * of the parent component.
    */
    function editBookById(id, title) {
        setBooks(prevBooks => prevBooks.map(book =>
            book.id === id ? { ...book, title } : book
        ));
    }

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
        <h1>Reading List</h1>
        <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
    </div>
}
