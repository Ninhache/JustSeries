import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";

export class HomePage extends Page {

    mount(element) {
        super.mount(element);

        const request = new TvMazeRequester();
        request.getPage(0)
            .then(data => data.json())
            .then(data => {
                element.innerHTML = ""
                data.forEach(element => {
                    this.element.appendChild(new PrototypeCard(element).render());
                });

            });

    }

    render() {
        return "we trying to build the page";
    }
}