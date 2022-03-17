import {Page} from "./Page";
import {TeammateCard} from "../Card/TeammateCard";

import team from "../team.json"

export class TeamPage extends Page{

    render() {
        let res = "";
        team.forEach( teammate => {
            res += new TeammateCard(teammate).render();
        });

        return `<div class="team">${res}</div>`;
    }

}