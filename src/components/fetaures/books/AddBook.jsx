import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: uuidv4() + 1, title, author };
        dispatch(addBook(book));
        navigate('/show-books', { replace: true });
    };
    return (
        <div className="container">
            <h2 className="m-2 p-2">Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" class="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" class="form-control" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="#" className="form-check-lebel">
                        check me out
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn btn-success btn-sm btn-inline-block">
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;
