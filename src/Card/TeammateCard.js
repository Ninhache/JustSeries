import PrototypeCard from "../PrototypeCard";

export class TeammateCard {

    constructor( {lastname, firstname, surname, favoriteSeries, note} ) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.surname = surname;
        this.favoriteSeries = favoriteSeries;
        this.note = note;
    }

    render() {
        // todo : faire un element html
        return /* html */ ` 
            <div class="teammate">
                <div>
                    <span class="lastname">${this.lastname}</span>
                    <span class="firstname">${this.firstname}</span>
                </div>
                <div class="surname">${this.surname}</div>
                <div class="serieFav">${new PrototypeCard({"id" : this.favoriteSeries}).render()}</div>
            </div>`;
    }

}