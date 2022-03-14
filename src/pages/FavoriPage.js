import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import Card from "../Card";
import PrototypeCard from "../PrototypeCard";
import { favIsEmpty } from "../FavoriteHandler";

export class FavoriPage extends Page{

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


            myFav.forEach(id => promiseArray.push(request.getById(id).then(response => response.json())));
            
            Promise.allSettled(promiseArray).then((values) => {
                console.log(values)
                // faut ajouter les elements
                /*
                values.forEach(item => {
                    console.log(item)
                    element.appendChild(new PrototypeCard(item).render());
                });
                element.querySelector(".wait").classList.remove("wait");
                */
            });
            

            //promiseArray.push()
            
            /*
            myFav.forEach( id => {
                request.getById(id)
                    .then( data => data.json())
                    .then( data => {
                        index++;
                        element.appendChild(new PrototypeCard(data).render());    
                    })

                element.querySelector(".wait").classList.remove("wait");
            });*/
            

            /*
                .then( data => data.json())
                .then( data => {
                    index++;
                    element.appendChild(new PrototypeCard(data).render());
                })
            */

            //element.querySelector(".wait").classList.remove("wait");
        } else {
            element.innerHTML = "<h3>Pas de favoris ...</h3>"
        }
        
        

    }

}