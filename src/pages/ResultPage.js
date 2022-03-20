import { Page } from "./Page";

import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";

class ResultPage extends Page {

    query;
    
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
                element.innerHTML = "";
                if(data.length === 0)  {
                        element.innerHTML = `<h3>"<u>${this.query}</u>" isn't in <a href="https://www.tvmaze.com/api" target="_blank">TvMaze API</a>, sorry for you.</h3>`
                } else {
                    data.forEach(item => {
                        element.appendChild(new PrototypeCard(item.show).render());
                    });
                }
                element.querySelector(".wait")?.classList.remove("wait");
            })
    }
}

export { ResultPage }