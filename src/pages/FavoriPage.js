import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";

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

            const arrayElement = [];
            myFav.forEach(id => promiseArray.push(request.getById(id).then(response => response.json())));
            
            Promise.allSettled(promiseArray).then((values) => {
                values.forEach(item => {
                    arrayElement.push(new PrototypeCard(item.value).render());    
                })
            }).then(() => {
                element.innerHTML = "";
                arrayElement.forEach(item => element.appendChild(item));
                element.querySelector(".wait")?.classList.remove("wait");
            })
        } else {
            element.innerHTML = "<h3>Click on the heart near a serie to add it in favorites</h3>"
        }
        
        

    }

}