import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import getCategories from '../utils/getCategories';
import {  useContext } from 'react';
import ArticlesContext from '../contexts/ArticlesContext';
import Stack from '@mui/material/Stack';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';

const Header = () => {
  const data = useContext(ArticlesContext);
  const categories = data && getCategories(data);
  const { pathname } = useLocation();

const selectedCategory = () => {
  if (pathname === '/') return 'Beauty'
  return (
    pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(1).slice(1)
  )
}
  return (
    categories && (
      <Stack flexDirection="column">
        <Tabs
          value={pathname === '/' ? '/beauty' : pathname}
          centered
          sx={{
            '.MuiButtonBase-root': {
              '&.Mui-selected': {
                color: 'red',
              },
            },
            '& .MuiTabs-indicator': { display: 'none' },
          }}
          >
          {categories.map((category: any, index: number) => (
            <Tab
              component={Link}
              to={`/${category}`}
              style={{
                textDecoration: 'none',
                padding: '0.5rem 1.5rem',
              }}
              key={index}
              label={category.toUpperCase()}
              value={`/${category}`}
            />
          ))}
        </Tabs>
        <Box
          sx={{ color: 'white', bgcolor: 'black' }}
          display="flex"
          justifyContent="center"
          py="1rem">
          <Typography variant="h4">{selectedCategory()}</Typography>
        </Box>
      </Stack>
    )
  );
};
export default Header;
