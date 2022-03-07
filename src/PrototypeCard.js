import PrototypePopup from "./PrototypePopup";

export default class PrototypeCard {

    constructor(element) {
        this.element = element;
        this.id = element.id;
        this.name = element.name;
        this.image = element.image?.medium;
        if(this.image == undefined) {
            this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png"
        }
    }

    render() {
        const div = document.createElement("div");
        div.id = this.id;

        
        div.addEventListener("click", event => {
            console.log(this.id);
            new PrototypePopup(this.element);
        })

        div.innerHTML = `<div class="card" id="${this.id}">
        <h3>${this.name}</h3>
        <img src=${this.image} width="150" height="150">
        <p class="open">Ouvrir</p>
        </div>`

        return div;
    }
}