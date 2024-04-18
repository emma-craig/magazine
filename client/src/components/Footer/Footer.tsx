import React from 'react';
import SocialUrls from './SocialUrls';
import './Footer.css'
import { Box } from '@mui/system';


const Footer = () => {
  return (
    <Box className='footer' sx={{backgroundColor: 'primary.main' , marginX: '-3rem'}}>
      <SocialUrls />
    </Box>
  );
};

export default Footer;
