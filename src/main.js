import Title from './Title';
import TvMazeRequester from "./api/TvMazeRequester"
import PrototypeCard from "./PrototypeCard"

// Initialise and input default value to the page
const request = new TvMazeRequester();
const content = []
let str = "";
document.getElementById('title').innerText = new Title().render();
request.getPage(0).then(data => data.json())
    .then(data => {
        data.forEach(element => {
            content.push(new PrototypeCard(element));
        });
    }).then(() => {
        content.forEach(item => str += item.render())
    }).then(() => {
        document.getElementById("content").innerHTML = str;
        str = "";
    });



// handle search bar

const searchForm = document.querySelector("body > header > form");
const searchInputText = document.querySelector("body > header > form > input[type=text]");
const searchButton = document.querySelector("body > header > form > button");

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event)
})


searchInputText.addEventListener("keyup", event => {
    content.length = 0;
    request.getByName(searchInputText.value).then(data => data.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.show)
            content.push(new PrototypeCard(element.show));
        });
    }).then(() => {
        content.forEach(item => str += item.render())
    }).then(() => {
        document.getElementById("content").innerHTML = str;
        str = "";
    });
})





//fetch("https://api.tvmaze.com/shows?page=0").then(data => data.json()).then(console.log)