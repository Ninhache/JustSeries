import {Router} from "./Router";

import TvMazeRequester from "./api/TvMazeRequester"
import PrototypeCard from "./PrototypeCard"
import PrototypeSearchBar from './PrototypeSearchBar';


let homePage = "we trying to build the page";
let FavPage = "No fav for now, come back later";
let TeamPage = "The best you never see !";


Router.titleElement = document.querySelector(".root > header > #title");
Router.contentElement = document.querySelector(".root > #content");
Router.routes = [
    { path: '/', page: homePage, title: "Work in progress ..." },
    { path: '/favoris', page: FavPage, title: "Series you like, I think..." },
    { path: '/equipe', page: TeamPage, title: "Our team" }
];

Router.menuElement = document.querySelector('.menu');

Router.navigate(document.location.pathname);


window.onpopstate = () => {
    Router.navigate(document.location.pathname, false);
};







// Display search bar 
document.querySelector(".formContent").appendChild(new PrototypeSearchBar().render());


// Display "welcome" page
const request = new TvMazeRequester();


request.getPage(0)
        .then(data => data.json())
        .then(data => {
            document.getElementById("content").innerHTML = ""
            data.forEach(element => {
                document.getElementById("content").appendChild(new PrototypeCard(element).render());
            });

        });