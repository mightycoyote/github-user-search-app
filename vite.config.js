// from https://stackoverflow.com/questions/73095592/octokit-js-not-working-with-vite-module-externalized-and-cannot-be-accessed-in/73095593#73095593

export default {
    resolve: {
      alias: {
        'node-fetch': 'isomorphic-fetch',
      },
    },
    build: {
      outDir: './docs/'
    },
    // put in the repo name, ex:
    base: '/github-user-search-app/',
  };
