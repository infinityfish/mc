// components/pages/tweets/add-new-tweet-form.tsx

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Stack,
    Textarea,
  } from "@chakra-ui/react";
  import saveTweet from "../../../lib/mutations/save-tweet";
  import fetchTweets from "../../../lib/queries/fetch-tweets";
  import queryClient from "../../../lib/clients/react-query";
  import { useSession } from "next-auth/client";
  import React, { ChangeEvent, useState } from "react";
  import { useMutation, useQuery } from "react-query";
  
  const AddNewTweetForm = () => {
    const [body, setBody] = useState("");
    const [session] = useSession();
    const { refetch } = useQuery("tweets", fetchTweets);
    const mutation = useMutation(saveTweet, {
      onSuccess: async () => {
        await queryClient.invalidateQueries("tweets");
  
        refetch();
      },
    });
  
    if (!session) {
      return <div>Not authenticated.</div>;
    }
  
    const handleSubmit = () => {
      const data = {
        body,
        author: {
          connect: { email: session.user.email },
        },
      };
  
      mutation.mutate(data);
  
      if (!mutation.error) {
        setBody("");
      }
    };
  
    return (
      <Stack spacing={4}>
        <Box p={4} shadow="lg" rounded="lg">
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="body">What's on your mind?</FormLabel>
              <Textarea
                id="body"
                value={body}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setBody(e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <Button
                loadingText="Posting..."
                onClick={handleSubmit}
                isDisabled={!body.trim()}
              >
                Post
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    );
  };
  
  export default AddNewTweetForm;