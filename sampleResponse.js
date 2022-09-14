import static_octocat from './assets/Octocat.png';

const sampleResponse = {
    status: 200,
    data: {
        avatar_url: static_octocat,
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        blog: "https://github.blog",
        company: "Github",
        created_at: "2020-07-08T13:46:57Z",
        followers: 3938,
        following: 9,
        html_url: "https://github.com/octocat",
        location: "San Francisco",
        // note there's no @ preceding
        login: "testyoctocat",
        name: "The Testy Octocat",
        public_repos: 8,
        twitter_username: null,
    }
}

export {sampleResponse};