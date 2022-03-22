import { Page } from "./Page";
import {Router} from "../Router";

class ErrorPage extends Page {

    mount(element) {
        element.querySelector(".toHome").addEventListener("click", event => {
            event.preventDefault();
            Router.navigate("/");
        })

    }

    render() {
        return /*html*/ `
            <div class="error_container">
                <i class="fa-solid fa-user-secret" style="font-size: 10em"></i>
                <div>Nothing to see here...</div>
                <div>Please go to <div class="link_box"><a class="toHome">home page</a></div></div>            
            </div>`;
    }

}

export { ErrorPage }