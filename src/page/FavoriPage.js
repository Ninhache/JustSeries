import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";

export class FavoriPage extends Page{

    mount(element) {
        super.mount(element);

        const local = localStorage.getItem("favs_id");
        const myFav = JSON.parse(local);

        const request = new TvMazeRequester();

        myFav.forEach( id => {
            request.getById(id)
                .then( data => data.json())
                .then( data => {
                    element.innerHTML += `- ${data.name} | ${id} <br>`; // todo : new FavCard().render()
                })
                .then(() => element.querySelector(".wait").hidden = true);
        });
    }

    render() {
        return "<span class='wait'>Wait a moment plz </span>";
    }
}