import React from 'react';
import Header from 'Component/Navigation/Header';
import Menu from 'Component/Navigation/Menu/Menu';

function Navigation() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Menu toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} />
    </>
  );
}

export default Navigation;
