import React from 'react';
import Layout from './components/Layout';
import CreateArticle from './components/PrivateRoute/CreateArticle';
import EditArticle from './components/PrivateRoute/EditArticle';
import DeleteArticle from './components/PrivateRoute/DeleteArticle';
import Login from './components/Login/Login';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import './App.css';
import useFetchArticles from './hooks/useFetchArticles';
import ArticlesContext from './contexts/ArticlesContext';
import AuthContext from './contexts/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/MUITheme';
import Dashboard from './components/PrivateRoute/Dashboard';
import Header from './components/Header';

const PrivateRoutes = () => {
  const jwt = JSON.parse(localStorage.getItem('jwt'));
  return jwt ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  const jwt = JSON.parse(localStorage.getItem('jwt'));
  let currentUser = jwt?.user?.userName;

  const { data } = useFetchArticles();

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <AuthContext.Provider value={currentUser}>
            {data && (
              <ArticlesContext.Provider value={data}>
                <Header />
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route
                      path="/dashboard"
                      element={<Dashboard />}
                    />
                    <Route
                      path="/create"
                      element={<CreateArticle />}
                    />
                    <Route
                      path="/edit"
                      element={<EditArticle />}
                    />
                    <Route
                      path="/delete"
                      element={<DeleteArticle />}
                    />
                  </Route>
                  <Route
                    exact
                    path="/"
                    element={<Layout category="beauty" />}
                  />
                  <Route
                    path="/login"
                    element={<Login />}
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
          </AuthContext.Provider>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
