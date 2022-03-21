export class Router {
    static titleElement;
    static contentElement;
    static routes;

    static #menuElement;
    static set menuElement(element) {
        this.#menuElement = element;

        element.querySelectorAll('a')
            .forEach(link => {
                const path = link.getAttribute('href');
                link.addEventListener('click', (event) => {
                event.preventDefault();
                Router.navigate(path);
            })
        });
    }


    static navigate(path, pushState = true) {
        const route = this.routes.find(val => val.path.startsWith(path.split("?")[0]));
        if (route) {
            if (pushState) window.history.pushState(null, null, path);
            document.title = route.windowTitle;
            this.titleElement.innerHTML = `${route.title}`;
            this.contentElement.innerHTML = route.page?.render();
            this.contentElement.className = route.path.substring(1); // change conteElement class for each page
            route.page?.mount(this.contentElement);
        } else {
            Router.navigate("/404")
        }
    }

    static redisplay() {
        const currentPage = this.routes.find( route => route.path === window.location.pathname);
        // todo : do something if page is undefined
        currentPage.page?.redisplay(this.contentElement);
    }

}