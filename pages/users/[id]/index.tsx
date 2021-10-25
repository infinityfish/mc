// components/pages/users/[id]/index.tsx

import { Avatar, Box, Grid, Stack, Text } from "@chakra-ui/react";
import Tweet from "./tweet";
import React, { FC } from "react";

const UsersPageComponent: FC = ({ user }) => {
  const authorNode = () => {
    return (
      <Stack spacing={4} isInline alignItems="center">
        <Avatar name={user?.name} src={user?.image} />
        <Stack>
          <Text fontWeight="bold" fontSize="4xl">
            {user?.name}
          </Text>
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack spacing={8}>
      {authorNode()}
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {user?.tweets.map((tweet) => {
          return (
            <Box key={tweet.id}>
              <Tweet tweet={tweet} />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default UsersPageComponent;