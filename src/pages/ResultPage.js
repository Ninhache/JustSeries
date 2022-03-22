import { Page } from "./Page";
import {Sorter} from "../Sorter";

import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";
import PrototypePopup from "../PrototypePopup";


class ResultPage extends Page {

    searchQuery;
    idQuery;
    result = [];
    
    render() {

        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get("q") !== undefined) {
            this.searchQuery = urlParams.get("q");
        }

        if(urlParams.get("id") !== undefined) {
            this.idQuery = urlParams.get("id");
        }
        console.log(this.idQuery);

        return "<span class='wait'>Wait a moment plz </span>";
    }

    mount(element) {
        super.mount(element);
        element.innerHTML = "";

        if(this.query === null) {
            element.innerHTML = `<h3>"<u>${this.query}</u>" isn't in <a href="https://www.tvmaze.com/api" target="_blank">TvMaze API</a>, sorry for you.</h3>`
        } else {
            new TvMazeRequester().getByName(this.searchQuery)
                .then(data => data.json())
                .then(data => {
                    data.forEach( (item, idx) => data[idx] = item.show); // get only "show" field
                    this.result = data; // keep the result for sorting

                    element.innerHTML = "";
                    if(data.length === 0)  {
                            element.innerHTML = `<h3>"<u>${this.searchQuery}</u>" isn't in <a href="https://www.tvmaze.com/api" target="_blank">TvMaze API</a>, sorry for you.</h3>`
                    } else {
                        data = Sorter.sort_array(data);

                        data.forEach(item => {
                            element.appendChild(new PrototypeCard(item).render());
                        });
                    }
                    element.querySelector(".wait")?.classList.remove("wait");
                });
    if(this.idQuery!==undefined){
            console.log(this.idQuery);
            new TvMazeRequester().getById(this.idQuery)
                .then(data=> data.json())
                .then(data=> {
                    let proto = new PrototypePopup(data);
                    let popup_container = document.querySelector(".popup_container");
                    popup_container.style.zIndex="7";
                    popup_container.innerHTML="";
                    popup_container.appendChild(proto.render());
                    popup_container.hidden=false;

                    document.querySelector("body").style.overflow="hidden";
                    document.getElementById("close").focus();
                });


            // console.log(popup);

        }
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

export { ResultPage }