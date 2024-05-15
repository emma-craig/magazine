import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { padding } from '@mui/system';
type Props = {
  articles: any[];
  title?: string;
  variant?: 'default' | 'lists' | 'top';
  className?: string;
};

const ArticlesList = ({ articles, title }: Props) => {
  const [open, setOpen] = useState(false);
  const handleReadMore = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formatDate = (d: string) => {
    var d1 = new Date(d);
    return d1.toDateString();
  };
  return (
    <>
      <h1>{title}</h1>
      <Grid
        container
        spacing={2}>
        {articles.map((article, index) => (
          <Grid
            item
            sm={12}
            md={4}
            key={index}
            xl={3}>
            <Card
              style={{ display: 'flex', flexDirection: 'column' }}
              sx={{ m: 3, position: 'relative', height: '450px' }}
              onClick={handleReadMore}>
              <CardMedia
                component="img"
                alt={`picture of ${article.title}`}
                height="200"
                image={article.image}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  padding: '10px',
                  color: 'black',
                  fontWeight: '600',
                  backgroundColor: 'white',
                }}>
                {article.category}
              </div>
              <CardContent style={{ marginTop: 'auto' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontFamily="Georgia, sans-serif">
                  {article.title}
                </Typography>
                <Typography
                  fontFamily="Georgia, sans-serif"
                  variant="body1"
                  color="grey">
                  by{' '}
                </Typography>
                <Typography
                  paddingBottom={2}
                  variant="body1">
                  {article.author}{' '}
                </Typography>

                <hr />
                <Typography
                  variant="caption"
                  color="grey">
                  {formatDate(article.date)}
                </Typography>
              </CardContent>

              {/* <CardActions>
                <Button onClick={handleReadMore}><Typography variant="caption">Read article</Typography></Button> */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Box
                  sx={{ bgcolor: 'white', padding: 4 }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center">
                  <Stack
                    display="flex"
                    justifyContent="space between">
                    <img
                      src={article.image}
                      alt=" thing"
                      height="200px"
                      width="300px"
                    />
                    <Button onClick={handleClose}>CLOSE</Button>
                  </Stack>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2">
                    {article.title}{' '}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}>
                    {article.text}
                    {article.fulltext}{' '}
                  </Typography>
                </Box>
              </Modal>
              {/* </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArticlesList;
