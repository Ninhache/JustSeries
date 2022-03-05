export default class PrototypeCard {
    constructor(element) {
        this.name = element.name;
        this.image = element.image?.medium;
        if(this.image == undefined) {
            this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png"
        }
    }

    render() {
        return `<div class="card">
        <h3>${this.name}</h3>
        <img src=${this.image} width="150" height="150">
        </div>`
    }
}