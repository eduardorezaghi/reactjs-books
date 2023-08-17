import { useState, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";
import axios from 'axios'

export default function App() {
    const [books, setBooks] = useState([])

    async function fetchBooks() {
        await axios.get('http://localhost:26751/books')
        .then(response => { 
            setBooks(response.data)
        })
    }

    useEffect(() => {
        fetchBooks()
    }, []);

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

    async function createBook(title) {
        const response = await axios.post('http://localhost:26751/books', { title });

        if (!title) return;
        else {
            /* Update state by using the spread operator
             * to copy the existing array and add
             * a new book to the end */
            setBooks([...books, 
                response.data
            ])
        }
    };

    return <div className='app'>
        <h1>Reading List</h1>
        <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
    </div>
}
