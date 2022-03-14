export default class PrototypePopup {
    constructor({name,summary,rating,premiered,genres,language,image}){
        // prévoir si un attribut est undefined ..
        
        this.name=name;
        this.summary = summary;
        this.rating = rating?.average;
        this.premiered = premiered;
        this.genres = genres;
        this.language = language;
        if(language == undefined){language="unknown"}
        this.image = image?.original;
        if(this.image == undefined) {
            this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png"
        }
        console.log(this.name);
        console.log(this.rating);
        console.log(this.premiered);
        console.log(this.genres);
        console.log(this.language);
        console.log(this.image);
    }

    render() { // changer class

        const div = document.createElement("div");
        div.className="popup";

       
        div.innerHTML = `<img src=${this.image} width="150" height="150">
        <h3>${this.name}</h3>
        <p>${this.summary}</p>
        <p>${this.rating}</p>
        <p>${this.premiered}</p>
        <p>${this.genres}</p>
        <p>${this.language}</p>
        `
        
        const closeButton = document.createElement("button");
        closeButton.innerHTML="close";
        closeButton.addEventListener("click",event =>{
                event.preventDefault();
                document.querySelector(".popup_container").hidden = true;

        })
        div.appendChild(closeButton);
        
        return div;
    }
}