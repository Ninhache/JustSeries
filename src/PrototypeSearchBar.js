export default class PrototypeSearchBar {

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
        const form = document.createElement("form");
        
        form.innerHTML = `<form class="searchbarForm">
                                <input type="text">
                                <button type="submit">Chercher</button>
                            </form>`

        const searchBar = form.querySelector("input");
        

        return div;
    }

}