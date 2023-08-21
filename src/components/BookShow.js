import { useContext, useState } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

export default function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);

    const handleClick = () => {
        deleteBookById(book.id)
    }

    const handleSubmit = () => {
        setShowEdit(false);
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