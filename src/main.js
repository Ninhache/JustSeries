import {Router} from "./Router";
import {HomePage} from "./page/HomePage";
import {FavoriPage} from "./page/FavoriPage";
import {TeamPage} from "./page/TeamPage";
import { ResultPage } from "./pages/ResultPage";

const homePage = new HomePage();
const favPage = new FavoriPage();
const teamPage = new TeamPage();
const Results = new ResultPage();

Router.menuElement = document.querySelector('.menu');
Router.titleElement = document.querySelector(".pageTitle");
Router.contentElement = document.querySelector(".pageContent");

Router.routes = [
	{path: '/', page: homePage, title: "Work in progress ..."},
	{path: '/favoris', page: favPage, title: "Series you like, I think..."},
	{path: '/equipe', page: teamPage, title: "Our team"},
	{ path: '/search', page: Results, title: "TestTitre" }
];

Router.navigate(document.location.pathname);

window.onpopstate = () => {
	Router.navigate(document.location.pathname, false);
};



/*
* FIND A BETTER WAY MAYBE .......
* */
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