import TvMazeRequester from "../api/TvMazeRequester";

export class TeammateCard {

    constructor( {lastname, firstname, surname, favoriteSeries, note} ) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.surname = surname;
        this.favoriteSeries = favoriteSeries;
        this.note = note;
    }

    render() {
        let mateDiv = document.createElement("div");
        mateDiv.classList.add("teammate");

        mateDiv.innerHTML = /* html */ `
            <div class="iddentity">
                <h1 class="surname">${this.surname}</h1>
                A.K.A            
                <div class="fullname"><i>${this.lastname} ${this.firstname}</i></div>
            </div>
            <div class="serieFav">
                <h3 id="${this.favoriteSeries.id}">${this.favoriteSeries.name}</h3>
                <img src="${this.favoriteSeries.img}" alt="${this.favoriteSeries.name} image">
            </div>
            <div class="implication_container">
                <div class="percentage" style="width: ${this.note}%">${this.note} %</divclass>
            </div>`;

        mateDiv.querySelector(".serieFav").addEventListener( "click", (event) => {
            event.preventDefault();
        })

        return mateDiv;
    }

}