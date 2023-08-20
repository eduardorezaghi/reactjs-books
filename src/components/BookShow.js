import { useContext, useState } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

export default function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const books = useContext(BooksContext);

    const handleClick = () => {
        onDelete(book.id)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    }

    let content = showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : book.title;

    return (
    <div className="book-show">
        <img
            alt='books'
            src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
        {content}
        <div className="actions">
            <button className="edit" onClick={() => setShowEdit(!showEdit)}>
            </button>
            <button className="delete" onClick={() => handleClick(book.id)}>
                Delete
            </button>
        </div>
    </div>
    )
}