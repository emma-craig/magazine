import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Tab, Tabs} from '@mui/material';


import { categories } from '../../mocks/categories';
import './Header.css';
import SearchBar from './SearchBar';


const Header = () => {
  const pathname = useLocation();
  return (
    <div className="header">
      <Tabs value={pathname}>
        {categories.map((category, index) => {
          return (
            <Tab
              key={index}
              label={category.title}
              value={pathname}
              to={`/${category.slug}`}
              component={Link}
            />
          );
        })}
      </Tabs>
 <SearchBar />
     
    </div>
  );
};

export default Header;
