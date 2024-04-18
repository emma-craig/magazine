import React, { useContext } from 'react';
import Footer from './Footer/Footer';
import ArticlesList from './Articles/ArticlesList';
import ArticlesContext from '../contexts/ArticlesContext';

const Layout = ({ category }: { category: string }) => {
  const data = useContext(ArticlesContext);

  const currArticles =
    data && data.filter((cat: any) => cat.category === category);
  return (
    <>
      {currArticles && <ArticlesList articles={currArticles} />}
      <Footer />
    </>
  );
};

export default Layout;
