import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';
import { Table } from 'react-bootstrap';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    return (
        <div className="container m-3 p-3">
            <h2 className="p-2 m-2">List of Books</h2>
            <table className="table table-hover responsive">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books &&
                        books.map((book) => {
                            const { id, title, author } = book;
                            return (
                                <tr key={id}>
                                    {/* <td>{id}</td> */}
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td className="col-2">
                                        <Link to="/edit-book" state={{ id, title, author }}>
                                            <button className="btn btn-secondary m-1">Edit</button>
                                        </Link>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => {
                                                handleDeleteBook(id);
                                            }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;
