import { Router } from "./Router";

export default class PrototypeSearchBar {

    constructor() { }

    render() {
        const form = document.createElement("form");
        
        form.innerHTML = `<form class="searchbarForm">
                                <input type="text">
                                <button type="submit">Chercher</button>
                            </form>`

        const searchInputText = form.querySelector("input[type=text]");

        form.addEventListener("submit", event => {
            event.preventDefault();
            if(searchInputText.value.length === 0) {
                
            } else {
                Router.navigate(`/search?q=${searchInputText.value}`);
            }
        })

        return form;
    }
}