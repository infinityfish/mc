// components/pages/users/[id]/tweet.tsx

import { Box, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Tweet: FC = ({ tweet }) => {
  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {tweet.body}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>{bodyNode()}</Stack>
    </Box>
  );
};

export default Tweet;