import { useState } from "react"

export default function BookCreate({ onCreate, books }) {
    const [title, setTitle] = useState('')

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handlesubmit(e) {
        e.preventDefault()
        onCreate(title)
        setTitle('');
    }

    return (
       <div className="book-create">
       <h3>Create a new book</h3>
        <form onSubmit={handlesubmit}>
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