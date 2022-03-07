import Title from './Title';
import TvMazeRequester from "./api/TvMazeRequester"
import PrototypeCard from "./PrototypeCard"

import { ExemplePage } from "./pages/ExemplePage"
import { MainPage } from "./pages/MainPage"

// Initialise and input default value to the page

const request = new TvMazeRequester();
const content = [];
const tmpContent = [];
const main = document.querySelector("#content")

let str = "";




//document.getElementById("content").innerHTML = MainPage();



// handle search bar

const searchForm = document.querySelector("body > .root > header > form");
const searchInputText = document.querySelector("body > .root > header > form > input[type=text]");
const searchButton = document.querySelector("body > .root > header > form > button");

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event)
})


searchInputText.addEventListener("keyup", event => {
    //request.stop();
    
    if(searchInputText.value.length === 0) {
        request.getPage(0)
        .then(data => data.json())
        .then(data => {
            document.getElementById("content").innerHTML = ""
            data.forEach(element => {
                document.getElementById("content").appendChild(new PrototypeCard(element).render());
            });

        });
    } else {
        request.getByName(searchInputText.value)
        .then(data => data.json())
        .then(data => {
            document.getElementById("content").innerHTML = ""
            data.forEach(element => {
                document.getElementById("content").appendChild(new PrototypeCard(element.show).render());
            });

        });
    }
})


request.getPage(0)
        .then(data => data.json())
        .then(data => {
            document.getElementById("content").innerHTML = ""
            data.forEach(element => {
                document.getElementById("content").appendChild(new PrototypeCard(element).render());
            });

        });





//fetch("https://api.tvmaze.com/shows?page=0").then(data => data.json()).then(console.log)
