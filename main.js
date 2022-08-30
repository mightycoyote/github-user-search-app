import './style.css'
// import { Octokit } from "@octokit/rest";

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

// const octokit = new Octokit({
//     // auth: 'YOUR-TOKEN'
//   })
  
// const response = await octokit.request('GET /users/{mightycoyote}', {
//     // username: 'USERNAME'
//   })

// console.log(response);