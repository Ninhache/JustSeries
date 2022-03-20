import { addToFav, removeFromFav, isInFav } from "./FavoriteHandler";
import PrototypePopup from "./PrototypePopup";

export default class PrototypeCard {

    constructor(element) {
        this.element = element;
        this.id = element.id;
        this.name = element.name;
        this.image = element.image?.medium;
        if(this.image == undefined) {
            this.image = "https://media.discordapp.net/attachments/801526575686221874/955075126259490886/no_image.png";
        }

        this.fav = isInFav(this.id);
    }

    render() {
        
        /* TOP DIV */
        const divTop = document.createElement("div");
        divTop.id = this.id;

        divTop.style.cursor = "pointer"; // todo : move to css
        divTop.addEventListener("click", event => {
            let proto = new PrototypePopup(this.element);
            let popup_container = document.querySelector(".popup_container");

            popup_container.innerHTML="";
            popup_container.appendChild(proto.render());
            popup_container.hidden=false;

            document.querySelector("body").style.overflow="hidden";
            document.getElementById("close").focus();
        })
        divTop.classList.add("cardShow")



        /* BOTTOM DIV */
        const divBottom = document.createElement("div");
            divBottom.classList.add("cardInfo")
        const iHeart = document.createElement("i");
            iHeart.classList.add("fa-solid", "fa-heart");
        const iStar = document.createElement("i");
            iStar.classList.add("fa-solid", "fa-star");
        const starDiv = document.createElement("div");
        const textNote = document.createElement("h6");
            starDiv.appendChild(iStar);
            starDiv.appendChild(textNote);
            textNote.innerText = `${this.element.rating?.average || "?"}/10`;

        if (this.fav) iHeart.classList.add("fav");

        divBottom.appendChild(iHeart);
        divBottom.appendChild(starDiv);

        iHeart.addEventListener("click", event => {
            if(this.fav) {
                iHeart.classList.remove("fav");
                this.fav = !this.fav;
                removeFromFav(this.id);
            } else {
                iHeart.classList.add("fav");
                this.fav = !this.fav;
                addToFav(this.id);
            }
        })

        divTop.innerHTML = /* html */ `
                <div class="headerCard">
                    <h3>${this.name}</h3>  
                    <h4>${this.element.premiered || "Unknown"}</h4>
                </div>
                <img src=${this.image}>`;

        const underCard = document.createElement("div");
        underCard.innerHTML = `<h6 class="underCard">${this.element.summary || "No description"}</h6>`

        divTop.appendChild(underCard)

        const div = document.createElement("div");
        div.appendChild(divTop);
        div.appendChild(divBottom);

        div.classList.add("card");

        return div;
    }
}