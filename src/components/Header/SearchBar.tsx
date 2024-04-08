import React, { useContext } from 'react';
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArticlesContext from '../../context/ArticlesContext';

const SearchBar = () => {
  const data = useContext(ArticlesContext);
  const uniqueOptionsList = data
    .map((option: any) => option.title)
    .filter(
      (value: any, index: number, self: any) => self.indexOf(value) === index
    );
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
              InputProps={{
                ...params.InputProps,
                type: 'search',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
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
