import {Router} from "./Router";
import {HomePage} from "./page/HomePage";
import {FavoriPage} from "./page/FavoriPage";
import {TeamPage} from "./page/TeamPage";

let homePage = new HomePage();
let favPage = new FavoriPage();
let teamPage = new TeamPage();

Router.titleElement = document.querySelector(".pageTitle");
Router.contentElement = document.querySelector(".pageContent");
Router.routes = [
    {path: '/', page: homePage, title: "Work in progress ..."},
    {path: '/favoris', page: favPage, title: "Series you like, I think..."},
    {path: '/equipe', page: teamPage, title: "Our team"}
];

Router.menuElement = document.querySelector('.menu');

Router.navigate(document.location.pathname);


window.onpopstate = () => {
    Router.navigate(document.location.pathname, false);
};

document.querySelector(".addFav").addEventListener( 'submit', event => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    console.log(input.value);

    const local = localStorage.getItem("favs_id");
    const myFavs = [input.value];

    JSON.parse(local)?.forEach( element => {
        myFavs.push(element);
    });

    localStorage.setItem("favs_id", JSON.stringify(myFavs));



});