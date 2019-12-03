import React from 'react';
import { useGraphQL } from 'graphql-react';

import Layout from '../components/Layout';

const Home = () => {
  const { loading, cacheValue: { data } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      (options.url = process.env.GRAPHQL_API_URL),
        (options.headers = {
          ...options.headers,
          'x-hasura-admin-secret': process.env.GRAPHQL_API_KEY
        });
    },
    operation: {
      query: `
        {
          sneakycrow_blog {
            title
          }
        }
      `
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
  });

  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
};

export default Home;
