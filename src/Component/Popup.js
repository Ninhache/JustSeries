import TvMazeRequester from "../api/TvMazeRequester";
import EpisodeRaw from "./EpisodeRaw";

export default class Popup {
    constructor({id,name,summary,rating,premiered,genres,language,image}){
        // prévoir si un attribut est undefined ..
        this.id=id;
        this.name=name;
        
        this.summary = summary || "No description";
        this.rating = rating?.average;
        if(this.rating==undefined){this.rating="?"}
        this.premiered = premiered || "unknown";
        this.genres = genres;
        if(genres==undefined || genres.length==0){this.genres="unknown"}
        this.language = language || "unknown";
        this.image = image?.original;
        if(this.image == undefined) {
            this.image = "https://media.discordapp.net/attachments/624976021417885707/949465775146688512/unknown.png"
        }
    }

    render() { // changer class
       
        const div = document.createElement("div");
        div.className="popup";

       
        div.innerHTML = `<img class="imgSerie" src=${this.image} width="150" height="150">`


        // détails
        const details = document.createElement("div");
        details.className="details";

        details.innerHTML = `
        <h1>${this.name}</h1>
        </br>
        <p>${this.summary}</p>
        </br>
        <p>Rating : ${this.rating}/10</p>
        <p>Premiered : ${this.premiered}</p>
        <p>Genres : ${this.genres}</p>
        <p>Languages : ${this.language}</p>
        </br>
        `
        
        // Close Popup
        function closeOnClick(event){
            event.preventDefault();
            console.log(event.target.attributes.class.value);
            if(event.target.attributes.class!==undefined){
                if(event.target.attributes.class.value === ('popup_container') || 
                   event.target.attributes.class.value ===('closeButton')){

                    document.querySelector(".popup_container").hidden = true;
                    document.querySelector("body").style.overflow="auto";
                    const url = document.location.search;
                    const tab = url.split('&')
                    let i=0;
                    tab.forEach(element=>{
                        if(element.includes("id")) tab.splice(i,1);
                        i++;
                    })
                    window.history.pushState(null,null,window.location.pathname + tab);
                }
            }
        }
        
        const closeButton = document.createElement("div");
        closeButton.className="closeButton";
        closeButton.id="close";

        closeButton.addEventListener("click",event =>{
            closeOnClick(event);
        })

        div.appendChild(closeButton);
      
        document.querySelector(".popup_container").addEventListener("click",event =>{
            closeOnClick(event);
        })

        // Episodes
        new TvMazeRequester().getEpisodesById(this.id)
            .then(data => data.json())
            .then(data => {
                if(data.length === 0)  {
                    throw new Error("L'id recherché n'est pas existant");
                } else {
                    const titleEpisodes = document.createElement("h3");
                    titleEpisodes.innerHTML=`<p>Five last episodes :</p>`;
                    details.appendChild(titleEpisodes);
                    for(let i=1;i<6;i++){
                        let item = data[data.length-i]
                        details.appendChild(new EpisodeRaw(item).render());
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })


        div.appendChild(details);
        
        let url = window.location.pathname;
        if(window.location.search === "") {
            url += "?";
        } else {
            url += window.location.search;
        }
        url += "&id=" + this.id;
        window.history.pushState(null,null,  url);
            


        return div;

    }
}
