import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import GetBreakPoint from 'Hooks/GetBreakpoint';
import Filter from './Filter';

function Content({ content = null, filter = null }) {
  const [measures, setMeasures] = React.useState(filter ? { xs: 12, md: 9 } : { xs: 12, md: 12 });
  const [filterMeasures, setFilterMeasures] = React.useState({ xs: 12, md: 3 });
  const [open, setOpen] = React.useState(filter !== null);
  const size = GetBreakPoint({ measure: 'md' });
  const actualFilter = filter && (
  <Filter
    size={size}
    setOpen={() => setOpen(!open)}
    open={open}
    filterMeasures={filterMeasures}
    content={filter}
  />
  );
  React.useEffect(() => {
    if (filter) {
      if (open) {
        setMeasures({ xs: 12, md: 9 });
        setFilterMeasures({ xs: 12, md: 3 });
      } else {
        setMeasures({ xs: 12, md: 11 });
        setFilterMeasures({ xs: 6, md: 1 });
      }
    }
  }, [open]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: 'auto',
        backgroundColor: (theme) => theme.palette.bgView.main,
      }}
    >
      <Toolbar sx={{ minHeight: '35px !important' }} />
      <Container
        maxWidth="xl"
        sx={{
          mt: 1, mb: 4, minHeight: 150,
        }}
      >
        <Grid container spacing={1}>
          {!size && actualFilter}
          <Grid item {...measures}>
            <Paper
              elevation={3}
              square
              sx={{
                backgroundColor: (theme) => theme.palette.black.second,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 150,

              }}
            >
              { content }
            </Paper>
          </Grid>
          {size && actualFilter}
        </Grid>
      </Container>
    </Box>
  );
}

export default Content;
