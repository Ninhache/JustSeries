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

        return `<h1>En train de chercher pour ... ${this.query} </h1>`;
    }

    mount(element) {
        super.mount(element);
        element.innerHTML = "";

        new TvMazeRequester().getByName(this.query)
            .then(data => data.json())
            .then(data => {
                if(data.length === 0)  {
                    throw new Error("Le nom recherché n'est pas valide");
                } else {
                    console.log(data);
                    data.forEach(item => {
                        element.appendChild(new PrototypeCard(item.show).render());
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export { ResultPage }