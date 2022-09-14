import './style.css'
// I used octokit/rest because I saw a comment suggesting it would be more compatible with Vite than other
// forms of octokit, but I'm not sure it made any difference.
// Most solutioons to using octokit with Vite involve using a fetch other than 'node-fetch' in the package
import { Octokit } from "@octokit/rest";

const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const submitSearch = document.querySelector("#search-button");
const outputBox = document.querySelector("output");
const noResults = document.querySelector(".no-results");
// there are actually two of these, one for each color scheme
const modeToggles = document.querySelectorAll(".mode-container");

const localPref = JSON.parse(localStorage.getItem('darkMode')); // boolean or null
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // boolean
let darkMode = localPref ?? defaultDark; // boolean; if this evaluates to true, darkMode should be turned on


// console.log(typeof(darkMode));
// console.log(localPref);
// console.log(defaultDark);
// console.log(darkMode);


 const octokit = new Octokit({
    // this is where you would add auth, but it's not necessary to retrieve this public info
    // 'userAgent' is still required
        userAgent: 'github-user-search-app Frontendmentor.io exercise',
    })

// error if response is 404
// if bio is null it should say "This profile has no bio"
// if others (like Twitter) are null it should say "Not Available"
const sampleResponse = {
    status: 404,
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
        displayNotfound(query);
    }

    if (response.status === 200) {
        displayResponse(response);
    }
}

function displayNotfound(query) {
    noResults.style.display = 'block';
    // the button should also be deactivated until the query is edited
}

function displayResponse(response) {
    outputBox.innerHTML = `${response.data.login}`;
}

function handleSubmit(e) {
    e.preventDefault();
    let query = searchForm.searchterm.value;
    fetchResponse(query);
}

// app saves a preference to localstorage only if you click the toggle
function handleMode() {
    if (!darkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', true);
    } else if (darkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', false);
    }
    darkMode = !darkMode;
}

// this sets darkmode without saving it if it's found in the system preferences only
function setDarkPref(darkMode) {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } 
}

submitSearch.addEventListener('click', handleSubmit);
modeToggles.forEach(toggle => toggle.addEventListener('click', handleMode));

setDarkPref(darkMode);