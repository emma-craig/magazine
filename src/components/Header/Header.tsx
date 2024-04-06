import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Tab, Tabs } from '@mui/material';
import { categories } from '../../mocks/categories';
import './Header.css';

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
    </div>
  );
};

export default Header;
