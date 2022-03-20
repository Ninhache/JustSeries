import {Page} from "./Page";
import TvMazeRequester from "../api/TvMazeRequester";
import PrototypeCard from "../PrototypeCard";
import { Router } from "../Router";

export class HomePage extends Page {

    render() {
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
                element.innerHTML = "";
                for (let i = 0; i < 16; i++) {
                    this.element.appendChild(new PrototypeCard(data[i]).render());
                }
            });
        
        document.querySelector(".userInfo").addEventListener("click", event => { 
            Router.navigate("/");
        });

    }
}