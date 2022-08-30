import './style.css'
// I used octokit/rest because I saw a comment suggesting it would be more compatible with Vite than other
// forms of octokit, but I'm not sure it made any difference.
// Most solutioons to using octokit with Vite involve using a fetch other than 'node-fetch'
import { Octokit } from "@octokit/rest";

const searchBox = document.querySelector("#searchBox");
const submitSearch = document.querySelector("#searchButton");
const result = document.querySelector("output");

submitSearch.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    let query = e.target.form.searchBox.value;
    console.log(query);
    e.target.form.reset();
}

// error if response is 404
const sampleResponse = {
    status: 200,
    data: {
        avatar_url: "./assets/Octocat.png",
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        blog: "https://github.blog",
        // not sure how this next one would be formatted, need to check. Probably just "github"
        company: "@github",
        created_at: "2020-07-08T13:46:57Z",
        followers: 3938,
        following: 9,
        html_url: "https://github.com/octocat",
        location: "San Francisco",
        // note there's no @ preceding
        login: "octocat",
        name: "The Octocat",
        public_repos: 8,
        twitter_username: null,
    }
}

// const octokit = new Octokit({
//     // this is where you would add auth, but it's not necessary to retrieve this public info
//     // 'userAgent' is still required
//     userAgent: 'github-user-search-app',
//   })
  
// const response = await octokit.rest.users.getByUsername({
//     username: 'mightycoyote',
//   });

// console.log(response);