export default class PrototypePopup {
    constructor(element){
        // prévoir si un attribut est undefined ..
        
        this.name = element.name;
        this.description = element.description;
        this.note = element.note;
        this.date = element.date;
        this.genre = element.genre;
        this.langage = element.langage;
        this.image = element.image?.medium;
        if(this.image == undefined) {
            this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png"
        }
    }

    render() { // changer class
        return `<div class="card">
        <h3>${this.name}</h3>
        <img src=${this.image} width="150" height="150">
        <p>${this.description}</p>
        <p>${this.note}\n${this.date}</p>
        </div>`
    }
    
}