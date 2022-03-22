export default class PrototypeEpisode {


    constructor({name,number,airdate,image,summary}) {
        this.number=number;
        this.name = name;
        this.date = airdate;
        this.image = image?.medium;
        if(this.image === undefined) { this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png" }
        this.summary = summary || "No description";
    }

    render() {
        const div = document.createElement("div");
        div.className="episode"
        // div.id = this.id; -> donner l'id de l'épisode ??? 

        div.style.cursor = "pointer"; // todo : move to css
        div.addEventListener("click", event => {
            console.log(this.element);
        })

        div.innerHTML =  `
            <h2 class="number">${this.number}</h2>
            <img class="imgEpisode" src=${this.image} alt="image of ${this.name}">
            <div class="description"> 
                <h2>${this.name}</h2>
                <span><b>Diffusion :</b> ${this.date}</span>
                <div class="summary">${this.summary}</div>
            </div>
        `

        return div;
    }
}