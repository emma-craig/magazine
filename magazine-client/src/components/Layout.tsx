import React, { useContext } from 'react';
import Footer from './Footer/Footer';
import ArticlesList from './Articles/ArticlesList';
import ArticlesContext from '../context/ArticlesContext';

const Layout = ({category}: {category: string}) => {
  const  data  = useContext(ArticlesContext);
  const currArticles = data && data.filter((cat: any) => cat.category === category);
  return (
    <>
      {currArticles && (
        <ArticlesList articles={currArticles} />
        // <>
        //   <ArticlesList
        //     articles={currArticles.slice(5, 10)}
        //     title="Recent"
        //   />
        //   <div>
        //     <ArticlesList
        //       articles={currArticles.slice(0, 5)}
        //       title="Featured"
        //     />
        //     <ArticlesList
        //       articles={currArticles.slice(6, 11)}
        //       title="Popular"
        //     />
        //   </div>
        //   <ArticlesList
        //     articles={currArticles.slice(10, 15)}
        //     title="More articles"
        //   />
        // </>
      )}

      <Footer />
    </>
  );
};

export default Layout;
