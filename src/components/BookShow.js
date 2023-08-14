import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () => {
        onDelete(book.id)
    }

    let content = showEdit ? <BookEdit book={book} /> : book.title;

    return (
    <div className="book-show">
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