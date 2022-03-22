import { Router } from "./Router";
import { HomePage, FavoriPage, TeamPage, ResultPage, ErrorPage } from "./pages/allExports";

import PrototypeSearchBar from './Component/PrototypeSearchBar';

const Homepage = new HomePage();
const Favpage = new FavoriPage();
const Teampage = new TeamPage();
const Resultpage = new ResultPage();
const Errorpage = new ErrorPage();

if (!localStorage.favs_id) {
	localStorage.setItem("favs_id", JSON.stringify([]));
}

Router.menuElement = document.querySelector('.menu');
Router.titleElement = document.querySelector(".root > header > #title");
Router.contentElement = document.querySelector(".root > #content");

Router.routes = [ // set all pages
	{path: '/', page: Homepage, title: "JustSeries", windowTitle: "JustSeries"},
	{path: '/favoris', page: Favpage, title: "Series you liked", windowTitle: "Favorites"},
	{path: '/equipe', page: Teampage, title: "Our team", windowTitle: "Project's members"},
	{path: '/search', page: Resultpage, title: "Searching Page" , windowTitle: "Search-Page"},
	{path: '/404', page: Errorpage, title: "404 Not found !" , windowTitle: "404 Not found"}
];

// Display search bar
document.querySelector(".formContent").appendChild(new PrototypeSearchBar().render());

document.querySelector(".userInfo").addEventListener("click", () => Router.navigate("/") );

// hide pupup
document.querySelector(".popup_container").hidden=true;

// navigate when all is load
Router.navigate(document.location.pathname + document.location.search); // get full url and move to

window.onpopstate = () => {
	Router.navigate(document.location.pathname, false);
};