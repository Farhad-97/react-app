import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import BooksView from '../fetaures/books/BooksView';
import AddBook from '../fetaures/books/AddBook';
import Footer from '../layouts/Footer';
import EditBook from '../fetaures/books/EditBook';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-books" element={<BooksView />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/edit-book" element={<EditBook />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;
