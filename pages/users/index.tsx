// pages/users/index.tsx

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Page from "../../components/pages/users";
import queryClient from "../../lib/clients/react-query";
import fetchUsers from "../../lib/queries/fetch-users";

const MyAccountPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("users", fetchUsers);
  const [session] = useSession();

  if (!session) {
    return <div>Not authenticated.</div>;
  }

  return (
    <>
      <Head>
        <title>All users</title>
      </Head>
      <Page users={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  await queryClient.prefetchQuery("users", fetchUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyAccountPage;