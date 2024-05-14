// src/utils/API.js
import { gql } from '@apollo/client';
import { client } from './apollo-client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

// Example function to use these queries/mutations
export const fetchMe = async () => {
  try {
    const { data } = await client.query({ query: GET_ME });
    return data.me;
  } catch (err) {
    console.error(err);
  }
};

export const addUser = async (userData) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_USER,
      variables: { ...userData },
    });
    return data.addUser;
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: { ...userData },
    });
    return data.login;
  } catch (err) {
    console.error(err);
  }
};

export const saveBook = async (bookData) => {
  try {
    const { data } = await client.mutate({
      mutation: SAVE_BOOK,
      variables: { input: bookData },
    });
    return data.saveBook;
  } catch (err) {
    console.error(err);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_BOOK,
      variables: { bookId },
    });
    return data.removeBook;
  } catch (err) {
    console.error(err);
  }
};

export const searchGoogleBooks = async (query) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};
