import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import Card from "../Card";

export class FavoriPage extends Page{

    mount(element) {
        super.mount(element);

        const local = localStorage.getItem("favs_id") || JSON.stringify([]);
        const myFav = JSON.parse(local);

        const request = new TvMazeRequester();

        myFav.forEach( id => {
            request.getById(id)
                .then( data => data.json())
                .then( data => element.appendChild(new Card(data).render()))
                .then( () => element.querySelector(".wait").hidden = true);
        });
    }

    render() {
        return "<span class='wait'>Wait a moment plz </span>";
    }
}