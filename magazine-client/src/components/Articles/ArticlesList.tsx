import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  Typography,
} from '@mui/material';
type Props = {
  articles: any[];
  title?: string;
  variant?: 'default' | 'lists' | 'top';
  className?: string;
};

const ArticlesList = ({ articles, title }: Props) => {
  const [expandedId, setExpandedId] = useState(-1);
  const [buttonText, setButtonText] = useState('Read more');
  const handleReadMore = (i: number) => {
    setExpandedId(expandedId === i ? -1 : i);
    setButtonText(expandedId === i ? 'read more' : 'read less');
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
              variant="outlined"
              sx={{ p: 2, m: 3 }}>
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
              <Collapse
                in={expandedId === index}
                timeout="auto"
                unmountOnExit>
                <CardContent>
                  <div>{article.fulltext}</div>
                </CardContent>
              </Collapse>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleReadMore(index)}>
                  {buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArticlesList;
