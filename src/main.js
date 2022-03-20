import { Router } from "./Router";
import { HomePage } from "./pages/HomePage";
import { FavoriPage } from "./pages/FavoriPage";
import { TeamPage } from "./pages/TeamPage";
import { ResultPage } from "./pages/ResultPage";

import PrototypeSearchBar from './PrototypeSearchBar';
import {Sorter} from "./Sorter";

const homePage = new HomePage();
const favPage = new FavoriPage();
const teamPage = new TeamPage();
const Results = new ResultPage();

if (!localStorage.favs_id) {
	localStorage.setItem("favs_id", JSON.stringify([]));
}


Router.menuElement = document.querySelector('.menu');
Router.titleElement = document.querySelector(".root > header > #title");
Router.contentElement = document.querySelector(".root > #content");

Router.routes = [ // set all pages
	{path: '/', page: homePage, title: "JustSeries", windowTitle: "JustSeries"},
	{path: '/favoris', page: favPage, title: "Series you liked", windowTitle: "Favorites"},
	{path: '/equipe', page: teamPage, title: "Our team", windowTitle: "Project's members"},
	{path: '/search', page: Results, title: "Searching Page" , windowTitle: "Search-Page"}
];






/*
* FIND A BETTER WAY MAYBE .......
* */
// Display search bar
const formContainer = document.querySelector(".formContent").appendChild(new PrototypeSearchBar().render());


/**
 * POPUP
 */
document.querySelector(".popup_container").hidden=true;

// navigate when all is load
Router.navigate(document.location.pathname + document.location.search); // get full url and move to

window.onpopstate = () => {
	Router.navigate(document.location.pathname, false);
};