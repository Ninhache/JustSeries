import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";
import { favIsEmpty } from "../FavoriteHandler";
import {Sorter} from "../Sorter";

export class FavoriPage extends Page{

    result = [];

    render() {
        return "<span class='wait'>Wait a moment plz </span>";
    }

    mount(element) {
        super.mount(element);

        const local = localStorage.getItem("favs_id") || JSON.stringify([]);
        const myFav = JSON.parse(local);

        const request = new TvMazeRequester();
        let index = 0;
        const lengthMax = myFav.length -1;
        
        const promiseArray = [];

        if (myFav.length > 0) {
            const favToFetch = [];

            // this is for fetch only new favs
            myFav.forEach( id => {
                // only if result does not contain this id
                if(!this.result.some( item => item.id === id)) favToFetch.push(id);
            });

            // this is to remove deleted favs
            this.result.forEach( (item, index) => {
                // only if favs IDs does not contain one item, so we remove him
                if(!myFav.some( id => id === item.id)) {
                    this.result.splice(index, 1); // remove deleted fav
                }
            });

            favToFetch.forEach(id =>
                promiseArray.push(request.getById(id).then(response => response.json()))
            );
            
            Promise.allSettled(promiseArray).then((values) => {
                values.forEach(item => {
                    this.result.push(item.value);
                })
            }).then(() => {
                let data = Sorter.sort_array(this.result); // sort data
                element.innerHTML = "";
                data.forEach(item => {element.appendChild(new PrototypeCard(item).render())}) // show data

                element.querySelector(".wait")?.classList.remove("wait");
            })
        } else {
            element.innerHTML = "<h3>Click on the heart near a serie to add it in favorites</h3>"
        }
    }

    redisplay(element) {
        super.redisplay();

        this.result = Sorter.sort_array(this.result);
        element.innerHTML = "";

        this.result.forEach( (item) => {
            element.appendChild(new PrototypeCard(item).render());
        })

    }

}