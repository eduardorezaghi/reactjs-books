import { useEffect, useContext } from 'react'
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";
import BooksContext from "./context/books";

export default function App() {
    const { fetchBooks } = useContext(BooksContext)

    // Fetch books only initial render,
    // by passing an empty array as the second argument.
        // To fetch books on every render, remove the second argument.
        // To fetch books if a specific value changes, pass that value as the second argument.
    useEffect(() => {
        fetchBooks()
    }, []);


    return <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}
