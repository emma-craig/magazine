import React, { useContext } from 'react';
import {
  Button,
  Paper,
  Stack,
  Typography,
  IconButton,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
} from '@mui/material';
import { logout } from '../../utils/authUser';
import { useNavigate } from 'react-router-dom';
import { AddSharp, DeleteSharp } from '@mui/icons-material';
import ArticlesContext from './../../contexts/ArticlesContext';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
const Dashboard = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate('./../login');
  };
  const handleDeleteArticle = (id) => {

    fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => alert('Article deleted successfully'))
      .then(() => navigate('./../dashboard'));
    alert('article deleted');
  };

  const handleEditArticle = (id) => {
    console.log('article opened and ready to edit');
  };
  const data = useContext(ArticlesContext);

  return (
    <Paper
      square
      sx={{ p: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Stack gap={0.75}>
          {/* <Typography
            variant="overline"
            sx={{ color: 'text.secondary' }}>
            Articles Dashboard
          </Typography> */}
          <Button
            variant="outlined"
            endIcon={<AddSharp />}
            onClick={() => navigate('./../create')}>
            UPLOAD NEW ARTICLE
          </Button>
        </Stack>

        <Button
          variant="outlined"
          endIcon={<LogoutIcon />}
          onClick={onLogout}>
          LOGOUT
        </Button>
      </Stack>
      <TableContainer sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date Added</TableCell>
              <TableCell></TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {!data.length && (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography
                    align="center"
                    sx={{ m: 3, color: 'text.secondary' }}>
                    No articles to display
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}>
                <TableCell>{item.title}</TableCell> <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>
                  <IconButton
                    aria-label="edit article button"
                    onClick={() => {
                      handleEditArticle(1);
                    }}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="remove article button"
                    onClick={() => {
                      handleDeleteArticle(item._id);
                    }}>
                    <DeleteSharp />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default Dashboard;
