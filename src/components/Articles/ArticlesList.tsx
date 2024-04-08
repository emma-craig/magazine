import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from '@mui/material';
type Props = {
  articles: any[];
  title: string;
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
    <div>
      <h1>{title}</h1>
      {articles.map((article, index) => (
        <Card
          variant="outlined"
          key={index}
          sx={{ p: 2, my: 3 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={article.urls.image}
          />
          <CardContent>
            <Typography variant="h5">{article.title}</Typography>
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
      ))}
    </div>
  );
};

export default ArticlesList;
