import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';

function Navigation({ logged = true }) {
  return (
    <>
      <Header logged={logged} />
      {logged && <Menu /> }
    </>
  );
}

export default Navigation;
