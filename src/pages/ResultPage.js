import { Page } from "./Page";
import {Sorter} from "../Sorter";

import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";

class ResultPage extends Page {

    query;
    result = [];
    
    render() {

        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get("q") !== undefined) {
            this.query = urlParams.get("q");
        }

        return "<span class='wait'>Wait a moment plz </span>";
    }

    mount(element) {
        super.mount(element);
        element.innerHTML = "";

        new TvMazeRequester().getByName(this.query)
            .then(data => data.json())
            .then(data => {
                data.forEach( (item, idx) => data[idx] = item.show); // get only "show" field
                this.result = data; // keep the result for sorting

                element.innerHTML = "";
                if(data.length === 0)  {
                        element.innerHTML = `<h3>"<u>${this.query}</u>" isn't in <a href="https://www.tvmaze.com/api" target="_blank">TvMaze API</a>, sorry for you.</h3>`
                } else {
                    data = Sorter.sort_array(data);

                    data.forEach(item => {
                        element.appendChild(new PrototypeCard(item).render());
                    });
                }
                element.querySelector(".wait")?.classList.remove("wait");
            });
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