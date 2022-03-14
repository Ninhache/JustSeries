import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";

export class HomePage extends Page {

    randomize(tab) {
        return tab
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    mount(element) {
        super.mount(element);
        let randomPage = Math.floor(Math.random() * 244)+1;

        const request = new TvMazeRequester();
        request.getPage(randomPage)
            .then(data => data.json())
            .then(data => this.randomize(data))
            .then(data => {
                element.innerHTML = ""
                for (let i = 0; i < 16; i++) {
                    this.element.appendChild(new PrototypeCard(data[i]).render());
                }
            });

    }

    render() {
        return "we trying to build the page";
    }
}