// src/components/SignupForm.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { addUser as createUser } from '../utils/API';
import { CREATE_USER } from '../utils/API';
import Auth from '../utils/auth';

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [createUser, { error }] = useMutation(CREATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="username"
        onChange={handleInputChange}
        value={userFormData.username}
        placeholder="Your username"
      />
      <input
        type="email"
        name="email"
        onChange={handleInputChange}
        value={userFormData.email}
        placeholder="Your email address"
      />
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
        value={userFormData.password}
        placeholder="Your password"
      />
      <button type="submit">Submit</button>
      {error && <div>Signup failed</div>}
    </form>
  );
};

export default SignupForm;
