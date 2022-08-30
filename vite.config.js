// from https://stackoverflow.com/questions/73095592/octokit-js-not-working-with-vite-module-externalized-and-cannot-be-accessed-in/73095593#73095593

export default {
    resolve: {
      alias: {
        'node-fetch': 'isomorphic-fetch',
      },
    },
  };
