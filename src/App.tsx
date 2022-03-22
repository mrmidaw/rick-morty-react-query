import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Characters } from './pages/Characters';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container maxWidth="lg">
          <Box
            sx={{ bgcolor: '#37474f', textAlign: 'center', color: 'white' }}
          >
            <Typography variant="h2" component="h3">
              Rick and Morty
            </Typography>

            <Characters />
          </Box>
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
