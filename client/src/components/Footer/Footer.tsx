import React from 'react';
import SocialUrls from './SocialUrls';
import { Box, Stack } from '@mui/system';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <Box
      padding="3rem 10rem 0 10rem"
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: 'black', color: 'white' }}>
      <Stack>
        <Stack direction={{ md: 'row', sm: 'column' }} justifyContent='space-around' alignItems={{md: '' , sm: 'center'}}>
          <Box
            width="40%"
            marginX="1.5rem">
            <Typography variant="h6">PEPPER</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit eros dolor.
            </Typography>
          </Box>
          <Box
            marginX="1.5rem"
            width="20%">
            <List>
              <ListItem disablePadding>
                <Typography variant="body2">MENU</Typography>
              </ListItem>
              <Link
                to="/about"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">About Us</Typography>
                </ListItem>
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Contact</Typography>
                </ListItem>
              </Link>
              <Link
                to="/fashion"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Fashion</Typography>
                </ListItem>
              </Link>
              <Link
                to="/beauty"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Beauty</Typography>
                </ListItem>
              </Link>
              <Link
                to="/health"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Health</Typography>
                </ListItem>
              </Link>
              <Link
                to="/life"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Life</Typography>
                </ListItem>
              </Link>
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Log in</Typography>
                </ListItem>
              </Link>
            </List>
          </Box>
          <Box
            bgcolor="red"
            marginX="1.5rem"
            height="120px"
            width="350px">
            <Subscribe />{' '}
          </Box>
        </Stack>
        <hr />
        <SocialUrls />
      </Stack>
    </Box>
  );
};

export default Footer;
