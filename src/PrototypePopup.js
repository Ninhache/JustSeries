import TvMazeRequester from "./api/TvMazeRequester";
import PrototypeCard from "./PrototypeCard";
import PrototypeEpisode from "./PrototypeEpisode";

export default class PrototypePopup {
    constructor({id,name,summary,rating,premiered,genres,language,image}){
        // prévoir si un attribut est undefined ..
        this.id=id;
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
        
        function closeOnClick(event){
            event.preventDefault();
            document.querySelector(".popup_container").hidden = true;
            document.querySelector("body").style.overflow="auto";
        }

        const closeButton = document.createElement("button");
        closeButton.innerHTML="close";
        closeButton.id="close";

        closeButton.addEventListener("click",event =>{
            closeOnClick(event);
        })

        div.appendChild(closeButton);
      
        document.querySelector(".popup_container").addEventListener("click",event =>{
            if(event.target.attributes.class.value !== 'popup') {
                closeOnClick(event);
            }
            
        })
        new TvMazeRequester().getEpisodesById(this.id)
            .then(data => data.json())
            .then(data => {
                if(data.length === 0)  {
                    throw new Error("L'id recherché n'est pas existant");
                } else {
                    for(let i=1;i<6;i++){
                        let item = data[data.length-i]
                        console.log(item)
                        div.appendChild(new PrototypeEpisode(item).render());
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

        return div;

    }
}
