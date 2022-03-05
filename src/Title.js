import data from './data.json';
const length = data.title.length;

export default class Title {
	text = '';

	constructor() {
		const random = Math.round(Math.random() * (length - 1));
		this.text = data.title[random];
	}

	render() {
		return this.text;
	}
}
