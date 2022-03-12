import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import Card from "../Card";

export class HomePage extends Page {

    mount(element) {
        super.mount(element);

        const request = new TvMazeRequester();
        request.getPage(0)
            .then(data => data.json())
            .then(data => {
                element.innerHTML = ""
                data.forEach(element => {
                    this.element.appendChild(new Card(element).render());
                });

            });

    }

    render() {
        return "we trying to build the page";
    }
}