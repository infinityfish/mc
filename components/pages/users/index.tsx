// components/pages/users/index.tsx

import { Box, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import User from "./user";

const UsersPageComponent = ({ users }) => {
  return (
    <Stack spacing={8}>
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {users?.map((user) => {
          return (
            <Box key={user.id}>
              <User user={user} />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default UsersPageComponent;