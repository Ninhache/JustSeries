export default class Card {
    element;
    id;
    image;
    name;
    premiered;
    summary;
    rating;

    constructor(element) {
        this.element = element;
        this.id = element.id;
        this.name = element.name;
        this.image = element.image?.medium;
        if(this.image === undefined) { this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png" }
        this.premiered = element.premiered;
        this.summary = element.summary;
        this.rating = element.rating?.average;
        if(this.rating === undefined) { this.rating = "-1" }
    }

    render() {
        const div = document.createElement("div");
        div.id = this.id;

        div.style.cursor = "pointer"; // todo : move to css
        div.addEventListener("click", event => {
            console.log(this.element);
        })

        div.innerHTML = /*html*/ `
        <div class="card" id="${this.id}">
            <h2>${this.name}</h2>
            <img src=${this.image} alt="image of ${this.name}">
            <span class="firtDifution">Premiere diffution : ${this.premiered}</span>
            ${this.summary}
            <span class="rating">note : ${this.rating}/10</span>
        </div>`;

        return div;
    }
}