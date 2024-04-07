import React from 'react'
import { Autocomplete, IconButton, InputAdornment, TextField } from "@mui/material"
import { articles } from './../../mocks/article-list';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Autocomplete
        freeSolo
        id="search-input"
        disableClearable
        options={articles.map((option) => option.title)}
        sx={{width: '200px'}}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
    )
} /> )}
export default SearchBar