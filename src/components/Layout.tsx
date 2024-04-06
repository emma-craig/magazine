import React from 'react';
import Footer from './Footer/Footer';
import ArticlesList from './../Articles/ArticlesList';
import { articles } from './../mocks/article-list';

const Layout = ({category}: {category: string}) => {
  const currArticles = articles.filter((cat) => cat.category === category);
  return (
    <>
      {currArticles && (
        <>
          <ArticlesList
            articles={currArticles.slice(5, 10)}
            title="Recent"
          />
          <div>
            <ArticlesList
              articles={currArticles.slice(0, 5)}
              title="Featured"
            />
            <ArticlesList
              articles={currArticles.slice(6, 11)}
              title="Popular"
            />
          </div>
          <ArticlesList
            articles={currArticles.slice(10, 15)}
            title="More articles"
          />
        </>
      )}

      <Footer />
    </>
  );
};

export default Layout;
