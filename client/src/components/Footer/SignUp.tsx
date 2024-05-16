import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail('');
    }
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <Stack sx={{ bgColor: 'red', color: 'white', padding: 2 }}>
      <Typography variant="caption">NEWSLETTER SIGN UP</Typography>

      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Email: </label>
        <input
          name="email"
          type="text"
          value={email || ''}
          onChange={handleInput}></input>
        <Button
          type="submit"
          sx={{ bgColor: 'black' }}>
          SUBMIT
        </Button>
      </form>
    </Stack>
  );
}
