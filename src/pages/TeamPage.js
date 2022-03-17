import {Page} from "./Page";
import {TeammateCard} from "../Card/TeammateCard";

import team from "../team.json"

export class TeamPage extends Page{

    mount(element) {
        const teamContainer = element.querySelector(".team");
        teamContainer.innerHTML = "";

        team.forEach( teammate => {
             teamContainer.appendChild(new TeammateCard(teammate).render());
        });
    }

    render() {
        return `<div class="team">Nice team here ! ... they coming soon</div>`;
    }

}