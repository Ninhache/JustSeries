import {Page} from "./Page";
import {TeammateCard} from "../Component/TeammateCard";

import team from "../team.json"

export class TeamPage extends Page{

    selectedIndex = 0;

    rotateCarousel() {
        const angle = this.selectedIndex / 3 * -360;
        this.element.querySelector(".team_carousel").style.transform = 'rotateY(' + angle + 'deg)';
    }

    mount(element) {
        super.mount(element);
        const teamContainer = element.querySelector(".team_carousel");
        teamContainer.innerHTML = "";

        team.forEach( teammate => {
             teamContainer.appendChild(new TeammateCard(teammate).render());
        });

        const turnLeft = element.querySelector(".turnLeft");
        turnLeft.addEventListener( "click", event => {
            event.preventDefault();
            this.selectedIndex--;
            this.rotateCarousel();
        })

        const turnRight = element.querySelector(".turnRight");
        turnRight.addEventListener( "click", event => {
            event.preventDefault();
            this.selectedIndex++;
            this.rotateCarousel();
        })

    }

    render() {
        return `<div class="team_scene">
                    <div class="team_carousel">Nice team here ! ... they coming soon</div>
                    <div class="teamCarouselController">
                        <button class="turnLeft"><i class="fa-solid fa-angle-left"></i></button>
                        <button class="turnRight"><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>`;
    }

}