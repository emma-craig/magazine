import { Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { subscribe } from '../../utils/subscribe';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Subscribe() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => subscribe(values.email),
  });

  return (
    <Stack sx={{ bgColor: 'red', color: 'white', padding: 2 }}>
      <Typography
        variant="caption"
        marginBottom="6px"
        color="white"
        fontWeight="800">
        NEWSLETTER SIGN UP
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          size="small"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
            input: { background: 'white' },
            '& .MuiFilledInput-root': {
              backgroundColor: 'white',
              padding: 0,
            },
          }}
        />

        <Button
          variant="outlined"
          type="submit"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: 0,
          }}>
          SUBMIT
        </Button>
        {formik.touched.email && formik.errors.email ? (
          <Typography>{formik.errors.email}</Typography>
        ) : null}
      </form>
    </Stack>
  );
}
