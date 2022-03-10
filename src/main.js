import { Router } from "./Router";
import { HomePage } from "./page/HomePage";
import { FavoriPage } from "./page/FavoriPage";
import { TeamPage } from "./page/TeamPage";
import { ResultPage } from "./pages/ResultPage";

import PrototypeSearchBar from './PrototypeSearchBar';
import TvMazeRequester from "./api/TvMazeRequester";
import PrototypeCard from "./PrototypeCard";

const homePage = new HomePage();
const favPage = new FavoriPage();
const teamPage = new TeamPage();
const Results = new ResultPage();


Router.menuElement = document.querySelector('.menu');
Router.titleElement = document.querySelector(".root > header > #title");
Router.contentElement = document.querySelector(".root > #content");

Router.routes = [
	{path: '/', page: homePage, title: "Work in progress ..."},
	{path: '/favoris', page: favPage, title: "Series you like, I think..."},
	{path: '/equipe', page: teamPage, title: "Our team"},
	{path: '/search', page: Results, title: "TestTitre" }
];


Router.navigate(document.location.pathname + document.location.search);

window.onpopstate = () => {
	Router.navigate(document.location.pathname, false);
};



/*
* FIND A BETTER WAY MAYBE .......
* */
// Display search bar
document.querySelector(".formContent").appendChild(new PrototypeSearchBar().render());

