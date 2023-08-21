import { useState, useContext } from "react"
import BooksContext from "../context/books"

export default function BookCreate() {
    const [title, setTitle] = useState('')
    const { createBook } = useContext(BooksContext)

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        createBook(title)
        setTitle('');
    }

    return (
       <div className="book-create">
       <h3>Create a new book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" 
                value={title}
                onChange={handleChange}
            />
            <button type="submit" className="button">Create</button>
        </form>
       </div> 
    )
}