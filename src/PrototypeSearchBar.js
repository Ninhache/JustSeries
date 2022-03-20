import { Router } from "./Router";
import {Sorter} from "./Sorter";

export default class PrototypeSearchBar {

    constructor() { }

    render() {
        const formContainer = document.createElement("div");
        formContainer.classList.add("formContainer");

        formContainer.innerHTML = `
                            <form class="searchbarForm">
                                <input type="text">
                                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                            <div class="sorting">
                                <select name="sorting_direction" class="sorting_direction">
                                    <option value="undefined" selected hidden>undefined</option>
                                    <option value="ASC">Ascending</option>
                                    <option value="DESC">Descending</option>
                                </select>
                                <select name="sorting_by" class="sorting_by">
                                    <option value="undefined" selected hidden>undefined</option>
                                    <option value="name">Series name</option>
                                    <option value="premiered">First broadcast</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>`;

        const searchInputText = formContainer.querySelector("input[type=text]");

        formContainer.addEventListener("submit", event => {
            event.preventDefault();
            Router.navigate(`/search?q=${searchInputText.value}`);
        })

        const sorting_direction = formContainer.querySelector(".sorting_direction");
        sorting_direction.addEventListener('change', (event) => {
            Sorter.sorting.direction = event.target.value;
            Router.redisplay();
        });

        const sorting_by = formContainer.querySelector(".sorting_by");
        sorting_by.addEventListener('change', (event) => {
            Sorter.sorting.by = event.target.value;
            Router.redisplay();
        });


        return formContainer;
    }
}