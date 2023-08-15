import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

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