import React from 'react';
import Header from './Header';
import Layout from './Layout';

const Main = ({ currUser }) => {
  return (
    <>
      <Header currUser={currUser} />
      <Layout category="beauty" />
    </>
  );
};

export default Main;
