import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

/**
 * The BooksProvider component is a wrapper component that will provide
 * the context to all of its children. This means that any component that
 * is a child of BooksProvider will have access to the context.
 * 
 * @param {Object} props
 *
 * @returns {React.JSX.Element}
 */
export function BooksProvider ({ children }) {
    // Property children is a special property that contains all the JSX
    // that is passed between the opening and closing tags of a component.
        // In this case, the children of BooksProvider is the JSX that is
        // passed between the opening and closing tags of BooksProvider in
        // src/index.js.
    const [books, setBooks] = useState([])

    async function fetchBooks() {
        await axios.get('http://localhost:26751/books')
        .then(response => { 
            setBooks(response.data)
        })
    }

    async function editBookById(id, title) {
        const response = await axios.put(`http://localhost:26751/books/${id}`, { title });

        setBooks(prevBooks => prevBooks.map(book =>
            book.id === id ? { ...book, ...response.data } : book
        ));
    }

    async function deleteBookById(id) {
        await axios.delete(`http://localhost:26751/books/${id}`);
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
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

    const sharedContext = {
        books,
        fetchBooks,
        editBookById,
        deleteBookById,
        createBook
    };

    return (
        <BooksContext.Provider value={sharedContext}>
            {children}
        </BooksContext.Provider>
    );
}

export default BooksContext;