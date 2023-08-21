import { useState, useContext } from 'react'
import BooksContext from '../context/books'

export default function BookEdit({ onSubmit, book }) {
    const [title, setTitle] = useState(book.title)
    const { editBookById } = useContext(BooksContext)


    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        onSubmit();
        editBookById(book.id, title);
    }

    return (<form className="book-edit">
        <label htmlFor="title">Title</label>
        <input  className="input" type="text" value={title} onChange={handleChange} />
        <button className="button is-primary" onClick={handleSubmit}>Save</button>
    </form>)
}