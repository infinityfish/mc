// components/pages/tweets/index.tsx

import { Box, Grid, Stack } from "@chakra-ui/react";
import Tweet from "./tweet";
import React from "react";
import ITweet from "types/tweet";
import AddNewTweetForm from "./add-new-tweet-form";

const TweetsPageComponent = ({ tweets }) => {
  return (
    <Stack spacing={8}>
      <Box>
        <AddNewTweetForm />
      </Box>
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {tweets?.map((tweet: ITweet) => {
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

export default TweetsPageComponent;