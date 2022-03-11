import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';

function Navigation({ logged = true }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header open={open} toggleDrawer={toggleDrawer} logged={logged} />
      {logged && <Menu toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} /> }
    </>
  );
}

export default Navigation;
