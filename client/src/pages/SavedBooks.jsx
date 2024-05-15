// src/pages/SavedBooks.jsx
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { fetchMe as getMe, deleteBook } from '../utils/API';
import { GET_ME, DELETE_BOOK } from '../utils/API';
import Auth from '../utils/auth';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook, { error }] = useMutation(DELETE_BOOK);

  const userData = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDeleteBook = async (bookId) => {
    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>
        {userData.username}'s saved books:
      </h2>
      {userData.savedBooks.map((book) => (
        <div key={book.bookId}>
          <h3>{book.title}</h3>
          <button onClick={() => handleDeleteBook(book.bookId)}>Delete</button>
        </div>
      ))}
      {error && <div>Delete book failed</div>}
    </div>
  );
};

export default SavedBooks;
