import './style.css'
import { sampleResponse } from './sampleResponse';
import { displayResponse } from './output';

// I used octokit/rest because I saw a comment suggesting it would be more compatible with Vite than other
// forms of octokit, but I'm not sure it made any difference.
// Most solutions to using octokit with Vite involve using a fetch other than 'node-fetch' in the package
import { Octokit } from "@octokit/rest";

const searchForm = document.querySelector("#search-form");
// const searchBox = document.querySelector("#search-box");
const submitSearch = document.querySelector("#search-button");
const outputBox = document.querySelector("output");
const noResults = document.querySelector(".no-results");
// there are actually two of these, one for each color scheme
const modeToggles = document.querySelectorAll(".mode-container");

const localPref = JSON.parse(localStorage.getItem('darkMode')); // boolean or null
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // boolean
let darkMode = localPref ?? defaultDark; // boolean; if this evaluates to true, darkMode should be turned on


const octokit = new Octokit({
// this is where you would add auth, but it's not necessary to retrieve this public info
// 'userAgent' is still required
    userAgent: 'github-user-search-app Frontendmentor.io exercise',
})

async function fetchResponse(query) {

  // const response = sampleResponse;

    try {
    // Octokit includes default headers, don't need to add unless they need to be changed
    const response = await octokit.rest.users.getByUsername({
        username: `${query}`,
    });

    displayResponse(response.data);

    } catch (error) {
        noResults.style.display = 'block';
        outputBox.innerHTML = '';
        console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.response.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}.`)
    }

}

function handleSubmit(e) {
    let query = searchForm.searchterm.value;
    fetchResponse(query);
    submitSearch.setAttribute("disabled", "");
    e.preventDefault();
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


searchForm.addEventListener('submit', handleSubmit);
searchForm.addEventListener('input', () => { 
    submitSearch.removeAttribute("disabled");
    noResults.style.display = 'none';
});
modeToggles.forEach(toggle => toggle.addEventListener('click', handleMode));

setDarkPref(darkMode);