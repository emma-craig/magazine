import React from 'react';
import SocialUrls from './SocialUrls';
import { Box, Stack } from '@mui/system';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      padding="3rem 10rem 0 10rem"
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: 'black', color: 'white' }}>
      <Stack>
        <Stack flexDirection="row">
          <Box
            width="400px"
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
            width="200px">
            <List>
              <ListItem disablePadding>
                <Typography variant="body2">MENU</Typography>
              </ListItem>
              <Link
                to="./about"
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
                to="./contact"
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
                to="./fashion"
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
                to="./beauty"
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
                to="./health"
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
                to="./life"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: ' 0 1.5rem',
                }}>
                <ListItem disablePadding>
                  <Typography variant="body2">Life</Typography>
                </ListItem>
              </Link>
            </List>
          </Box>
          <Box
            bgcolor="red"
            marginX="1.5rem"
            height="90px"
            width="40%">
            newsletter sign up
          </Box>
        </Stack>
        <hr />
        <SocialUrls />
      </Stack>
    </Box>
  );
};

export default Footer;
