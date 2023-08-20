import React from 'react';
import { useGetUsersQuery } from './features/api/apiSlice';
import { Box, Container, Typography } from '@mui/material';

function App() {
  const {
    data
  } = useGetUsersQuery()

  return (
    <Container sx={{
      mt: 4,
      textAlign: "center"
    }}>
      <Typography variant="h4">
        Users
      </Typography>
      <Container sx={{
        display: "flex",
        flexDirection: "row"
      }}>
        {data.map((user: any) =>
          <Box>
            <img src={user.avatar} alt="" />
          </Box>
        )}
      </Container>
    </Container>
  );
}

export default App;
