import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, title, author }));
        navigate('/show-books', { replace: true });
    };

    return (
        <div className="container">
            <h1 className="p-2 m-2 auto">Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author: </label>
                    <input type="text" className="form-control" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-secondary m-2">
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default EditBook;
