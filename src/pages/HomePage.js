import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";
import {Sorter} from "../Sorter";

export class HomePage extends Page {

    result = [];

    render() {
        // reset sorting property at default value
        document.querySelector(".formContainer .sorting .sorting_direction").selectedIndex = null;
        document.querySelector(".formContainer .sorting .sorting_by").selectedIndex = null;

        return "<span class='wait'>Wait a moment plz </span>";
    }

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
                this.result = data; // keep the result for sorting

                element.innerHTML = "";

                for (let i = 0; i < 16; i++) {
                    this.element.appendChild(new PrototypeCard(data[i]).render());
                }
            })

    }

    redisplay(element) {
        super.redisplay();
        this.result = Sorter.sort_array(this.result);
        element.innerHTML = "";

        for (let i = 0; i < 16; i++) {
            this.element.appendChild(new PrototypeCard(this.result[i]).render());
        }
    }

}