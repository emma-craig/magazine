import { Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { subscribe } from '../../utils/subscribe';

export default function Subscribe() {
  const initialState = {
    email: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    subscribe(formData.email);
  };
  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Stack sx={{ bgColor: 'red', color: 'white', padding: 2 }}>
      <Typography
        variant="caption"
        marginBottom="6px"
        color="white"
        fontWeight="800">
        NEWSLETTER SIGN UP
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          type="text"
          size="small"
          placeholder="Email"
          value={formData.email}
          onChange={handleInput}
          variant="filled"
          InputProps={{
            style: {
              borderRadius: 0,
            },
          }}
          inputProps={{
            style: {
              padding: 8,
            },
          }}
          sx={{
            '& .MuiFilledInput-root': {
              backgroundColor: 'white',
              padding: 0,
            },
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{ backgroundColor: 'black', color: 'white', borderRadius: 0 }}>
          SUBMIT
        </Button>
      </form>
    </Stack>
  );
}
