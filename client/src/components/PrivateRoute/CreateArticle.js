import React, { useState, useContext } from 'react';
import ArticlesContext from '../../contexts/ArticlesContext';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import getCategories from '../../utils/getCategories';
const CreateArticle = () => {
  const data = useContext(ArticlesContext);
  const categories = getCategories(data);
  const navigate = useNavigate();
  const initialState = {
    title: '',
    category: '',
    text: '',
    date: '',
    fulltext: '',
    image: '', //use cloudinary
  };
  const [formData, setFormData] = useState(initialState);
  const handleValidation = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => alert('Article saved successfully'))
      .then(() => navigate('./../dashboard'));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper
        square
        sx={{ padding: 4 }}>
        <Typography>Submit new article</Typography>
        <Stack gap={2}>
          <TextField
            value={formData.title}
            name="title"
            label="title"
            onChange={handleChange}></TextField>
          <TextField
            select
            value={formData.category}
            name="category"
            onChange={handleChange}>
            {categories.map((option, index) => (
              <MenuItem
                key={index}
                value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>{' '}
          <TextField
            value={formData.date}
            label="date"
            name="date"
            onChange={handleChange}></TextField>{' '}
          <TextField
            value={formData.text}
            label="text"
            name="text"
            onChange={handleChange}></TextField>{' '}
          <TextField
            value={formData.fulltext}
            label="full text"
            name="fulltext"
            multiline
            onChange={handleChange}></TextField>{' '}
          <TextField
            value={formData.image}
            label="image"
            name="image"
            onChange={handleChange}></TextField>{' '}
        </Stack>
        <Button
          variant="outlined"
          endIcon={<SaveIcon />}
          onClick={handleSubmit}>
          SAVE
        </Button>
      </Paper>
    </form>
  );
};

export default CreateArticle;
