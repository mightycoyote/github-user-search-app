import './style.css'
// I used octokit/rest because I saw a comment suggesting it would be more compatible with Vite than other
// forms of octokit, but I'm not sure it made any difference.
// Most solutioons to using octokit with Vite involve using a fetch other than 'node-fetch'
import { Octokit } from "@octokit/rest";

const searchBox = document.querySelector("#searchBox");
const submitSearch = document.querySelector("#searchButton");
const outputBox = document.querySelector("output");

 const octokit = new Octokit({
    // this is where you would add auth, but it's not necessary to retrieve this public info
    // 'userAgent' is still required
        userAgent: 'github-user-search-app Frontendmentor.io exercise',
    })

// error if response is 404
const sampleResponse = {
    status: 200,
    data: {
        avatar_url: "./assets/Octocat.png",
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        blog: "https://github.blog",
        company: "Github",
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

async function fetchResponse(query) {
  
    // Octokit seems to handle any JSON conversions by itself
    // const response = await octokit.rest.users.getByUsername({
    //     username: `${query}`,
    // });

    const response = sampleResponse;

    if (response.status === 404) {
        displayNotfound();
    }

    if (response.status === 200) {
        displayResponse(response);
    }
}

function displayNotfound() {
    console.log('This will make the red text appear in the box');
}

function displayResponse(response) {
    document.querySelector('#searchForm').reset();
    outputBox.innerHTML = `${response.data.login}`;
}

function handleSubmit(e) {
    e.preventDefault();
    let query = e.target.form.searchBox.value;
    fetchResponse(query);
}

submitSearch.addEventListener('click', handleSubmit);