import React, { useContext, useState } from 'react';
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArticlesContext from '../../context/ArticlesContext';

const SearchBar = () => {
  const  data  = useContext(ArticlesContext);
  const uniqueOptionsList = data && data
    .map((option: any) => option.title)
    .filter(
      (value: any, index: number, self: any) => self.indexOf(value) === index
    );
    const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      {data && (
        <Autocomplete
          freeSolo
          id="search-input"
          disableClearable
          options={uniqueOptionsList}
          sx={{ width: '300px' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log(searchQuery);
              }}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type='submit'>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      )}
    </>
  );
};
export default SearchBar;
