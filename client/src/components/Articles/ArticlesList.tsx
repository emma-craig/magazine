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
            md={3}
            key={index}
            xl={3}>
            <Card
              sx={{ m: 3 }}
              >
              <CardMedia
                component="img"
                alt={`picture of ${article.title}`}
                height="200"
                image={article.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div">
                  {article.title}
                </Typography>
                <Typography variant="body1">{article.text}</Typography>
              </CardContent>

              <CardActions>
                <Button onClick={handleReadMore}>READ MORE</Button>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArticlesList;
