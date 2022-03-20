export class Page {
    element;

    redisplay() {
        console.log("redisplay ? ");
    }

    mount(element) {
        this.element = element;
    }
}
