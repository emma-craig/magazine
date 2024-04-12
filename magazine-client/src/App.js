import React from 'react';
import Layout from './components/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import useFetchArticles from './hooks/useFetchArticles';
import ArticlesContext from './context/ArticlesContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/MUITheme';

const App = () => {
  const { data } = useFetchArticles();

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          {data && (
            <ArticlesContext.Provider value={data}>
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
            </ArticlesContext.Provider>
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
