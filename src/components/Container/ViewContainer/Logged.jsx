import React from 'react';
import Box from '@mui/material/Box';
import Navigation from 'Component/Container/ViewContainer/Navigation';
import Content from 'Component/Container/ViewContainer/content/Content';

function Logged({ content, filter }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navigation />
      <Content content={content} filter={filter} />
    </Box>
  );
}

export default Logged;
