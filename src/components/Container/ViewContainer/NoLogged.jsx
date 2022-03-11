import React from 'react';
import Box from '@mui/material/Box';
import Navigation from 'Component/Container/ViewContainer/Navigation';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function NoLogged({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navigation logged={false} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          backgroundColor: (theme) => theme.palette.bgView.main,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            paddingX: '5px !important', height: '100vh', display: 'flex',
          }}
        >
          <Grid
            container
            maxWidth="lg"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={6} xs={12}>
              { children }
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default NoLogged;
