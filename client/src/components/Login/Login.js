import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, authenticate } from '../../utils/authUser';

const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    userName: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);
  const { userName, password } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      alert('Please fill in both fields');
      return;
    }

    login({ userName, password })
      .then((data) =>
        authenticate(data, () => {
          setFormData({ ...formData });
        })
      )

      .then(() => navigate('./../dashboard'));
  };

  const handleTextInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">User name:</label>
      <input
        name="userName"
        type="text"
        value={formData.userName || ''}
        onChange={handleTextInput}></input>

      <label htmlFor="password">Password:</label>
      <input
        name="password"
        type="password"
        value={formData.password || ''}
        onChange={handleTextInput}></input>

      <button
        type="submit"
        disabled={
          (formData.userName && formData.userName.trim() === '') ||
          (formData.password && formData.password.trim() === '')
        }>
        Go
      </button>
    </form>
  );
};

export default Login;
