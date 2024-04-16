import React from 'react';
import { Button } from '@mui/material';
import { logout } from '../../utils/authUser';
import {useNavigate} from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    logout();
    navigate('./../login')
  };
  return (
    <div>

<div>here do a table of the articles with an add button at the top and edit / delete on each one.</div>

      <Button onClick = {() => navigate('./../create')}>UPLOAD NEW ARTICLE</Button>
      <Button onClick = {() => navigate('./../edit')}>EDIT AN ARTICLE</Button>
      <Button onClick = {() => navigate('./../delete')}>DELETE ARTICLE</Button>

      <Button onClick={onLogout}>LOGOUT</Button>
    </div>
  );
};
export default Dashboard;
