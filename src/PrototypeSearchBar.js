export default class PrototypeSearchBar {

    constructor() { }

    render() {
        const form = document.createElement("form");
        
        form.innerHTML = `<form class="searchbarForm">
                                <input type="text">
                                <button type="submit">Chercher</button>
                            </form>`

        const searchInputText = form.querySelector("input[type=text]");
        const searchButton = form.querySelector("button");

        form.addEventListener("submit", event => {
            event.preventDefault();
            if(searchInputText.value.length === 0) {
                
            } else {
                console.log("UTILISER LE ROOTER");
                console.log(event);
            }
        })

        return form;
    }
}