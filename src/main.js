import {Router} from "./Router";

let homePage = "we trying to build the page";
let FavPage = "No fav for now, come back later";
let TeamPage = "The best you never see !";

Router.titleElement = document.querySelector(".pageTitle");
Router.contentElement = document.querySelector(".pageContent");
Router.routes = [
    {path: '/', page: homePage, title: "Work in progress ..."},
    {path: '/favoris', page: FavPage, title: "Series you like, I think..."},
    {path: '/equipe', page: TeamPage, title: "Our team"}
];

Router.menuElement = document.querySelector('.menu');

Router.navigate(document.location.pathname);


window.onpopstate = () => {
    Router.navigate(document.location.pathname, false);
};