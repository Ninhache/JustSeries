import RequestHandler from './RequestHandler';

/**
 * Request handler for the TvMaze's API, all return there should be promise, and need to be handeled
 * @example `new TvMazeRequester().getPage(5).then(data => doSomethingWith);`
 */
export default class TvMazeRequester extends RequestHandler {

	controller;

	constructor() {
		super('https://api.tvmaze.com');
		this.controller = new AbortController();
	}

	/**
	 * Stop all fetch associated with the current signal
	 */
	stop() {
		this.controller.abort();
	}

	/**
	 * Get the index's page asked
	 * @param {Number} index of the asked page
	 * @return {Promise} need to be handeled.
	 */
	getPage(index) {
		return fetch(`${this.baseUrl}/shows?page=${index ? index : 0}`, {signal: this.controller.signal});
	}

    /**
     * Get shows matching the actual name you gave
	 * @param {String} name of the asked show
	 * @return {Promise} need to be handeled.
	 */
	getByName(name) {
		return fetch(`${this.baseUrl}/search/shows?q=${name}`, {signal: this.controller.signal});
	}

    /**
	 * Get actors informations
	 * @param {String} name of the asked actor
	 * @return {Promise} need to be handeled.
	 */
	getByActor(name) {
		return fetch(`${this.baseUrl}/search/people?q=${name}`, {signal: this.controller.signal});
	}

    /**
	 * Get a show
	 * @param {Number} id of the asked show
	 * @return {Promise} need to be handeled.
	 */
	getById(id) {
		return fetch(`${this.baseUrl}/shows/${id}`, {signal: this.controller.signal});
	}

    /**
	 * Get all shows's episodes
	 * @param {Number} id of the asked show
	 * @return {Promise} need to be handeled.
	 */
	getEpisodesById(id) {
		return fetch(`${this.baseUrl}/shows/${id}/episodes`, {signal: this.controller.signal});
	}

    /**
	 * Get an episode
	 * @param {Number} id of the asked show
     * @param {Number} season of the asked episode
     * @param {Number} number of the asked episode
	 * @return {Promise} need to be handeled.
	 */
	getEpisodeByIdSeasonNumber(id, season, number) {
		return fetch(`${this.baseUrl}/shows/${id}/episodebynumber?season=${season}&number=${number}`, {signal: this.controller.signal});
	}

    /**
	 * Get an episode
	 * @param {Number} id of the asked show
     * @param {Date} date of the asked episode
	 * @return {Promise} need to be handeled.
	 */
    getEpisodeByIdDate(id, date) {
        return fetch(`${this.baseUrl}/shows/${id}/episodesbydate?date=${date}`, {signal: this.controller.signal});
    }

    getCastingById(id) {
        return fetch(`${this.baseUrl}/shows/${id}/cast`, {signal: this.controller.signal});
    }

    getImagesById(id) {
        return fetch(`${this.baseUrl}/shows/${id}/images`, {signal: this.controller.signal});
    }

    getActors(index) {
        return fetch(`${this.baseUrl}/people?page=${index ? index : 0}`, {signal: this.controller.signal});
    }

    getActorsById(id) {
        return fetch(`${this.baseUrl}/people/${id}`, {signal: this.controller.signal});
    }

}
