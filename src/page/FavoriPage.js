import {Page} from "./Page";

export class FavoriPage extends Page{



    render() {
        const myFav = localStorage.getItem("favs_id");

        return "we trying to built it";
    }
}