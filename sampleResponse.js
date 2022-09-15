import static_octocat from './assets/Octocat.png';

const sampleResponse = {
    status: 200,
    data: {
        avatar_url: static_octocat,
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        // bio: null,
        blog: "https://github.blog",
        company: "Github",
        created_at: "2020-07-08T13:46:57Z",
            // more info
            // "type": "string",
            // "format": "date-time",
        followers: 3938,
        following: 9,
        html_url: "https://github.com/octocat",
        location: "San Francisco",
        // location: null,
        // note there's no @ preceding
        login: "testyoctocat",
        name: "The Testy Octocat",
        public_repos: 8,
        twitter_username: null,
    }
}

// this is from the GitHub docs for "Get a user" in REST API / Users
const alternateSample = {
    "login": "octocat",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "monalisa octocat",
    "company": "GitHub",
    "blog": "https://github.com/blog",
    "location": "San Francisco",
    "email": "octocat@github.com",
    "hireable": false,
    "bio": "There once was...",
    "twitter_username": "monatheoctocat",
    "public_repos": 2,
    "public_gists": 1,
    "followers": 20,
    "following": 0,
    "created_at": "2008-01-14T04:33:35Z",
    "updated_at": "2008-01-14T04:33:35Z"
  }

export {sampleResponse};