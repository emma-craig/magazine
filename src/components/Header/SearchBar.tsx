import React, { useContext } from 'react'
import { Autocomplete, IconButton, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ArticlesContext from '../../context/ArticlesContext';

const SearchBar = () => {
    const { articles } = useContext(ArticlesContext);

    return (
        <Autocomplete
        freeSolo
        id="search-input"
        disableClearable
        options={articles.map((option: any) => option.title)}
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