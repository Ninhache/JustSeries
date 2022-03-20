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
            this.titleElement.innerHTML = `<h1>${route.title}</h1>`;
            this.contentElement.innerHTML = route.page?.render();
            route.page?.mount(this.contentElement);
        } else {
            this.titleElement.innerHTML = `<h1>Error : 404 not found</h1>`;
            this.contentElement.innerHTML = "WTF you doing here ?? go back your home";
        }
    }
}