import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'
import useFetchArticles from './hooks/useFetchArticles';
import ArticlesContext from './context/ArticlesContext';

const App = () => {
  const {data} = useFetchArticles()
  return (

  <ArticlesContext.Provider value={data}>
    <Router>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<Layout category="beauty" />}
        />
        <Route
          path="/beauty"
          element={<Layout category="beauty" />}
        />
        <Route
          path="/fashion"
          element={<Layout category="fashion" />}
        />
        <Route
          path="/health"
          element={<Layout category="health" />}
        />
        <Route
          path="/life"
          element={<Layout category="life" />}
        />
      </Routes>
      <Footer />
    </Router>
    </ArticlesContext.Provider>
 
  );
};

export default App;
