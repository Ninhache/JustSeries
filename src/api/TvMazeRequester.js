import RequestHandler from './RequestHandler';

/**
 * Request handler for the TvMaze's API, all return there should be promise, and need to be handeled
 * @example `new TvMazeRequester().getPage(5).then(data => doSomethingWith);`
 */
export default class TvMazeRequester extends RequestHandler {
	constructor() {
		super('https://api.tvmaze.com');
	}

	/**
	 * Get the index's page asked
	 * @param {Number} index of the asked page
	 * @return {Promise} need to be handeled.
	 */
	getPage(index) {
		return fetch(`${this.baseUrl}/shows?page=${index ? index : 0}`);
	}

    /**
     * Get shows matching the actual name you gave
	 * @param {String} name of the asked show
	 * @return {Promise} need to be handeled.
	 */
	getByName(name) {
		return fetch(`${this.baseUrl}/search/shows?q=${name}`);
	}

    /**
	 * Get actors informations
	 * @param {String} name of the asked actor
	 * @return {Promise} need to be handeled.
	 */
	getByActor(name) {
		return fetch(`${this.baseUrl}/search/people?q=${name}`);
	}

    /**
	 * Get a show
	 * @param {Number} id of the asked show
	 * @return {Promise} need to be handeled.
	 */
	getById(id) {
		return fetch(`${this.baseUrl}/shows/${id}`);
	}

    /**
	 * Get all shows's episodes
	 * @param {Number} id of the asked show
	 * @return {Promise} need to be handeled.
	 */
	getEpisodesById(id) {
		return fetch(`${this.baseUrl}/shows/${id}/episodes`);
	}

    /**
	 * Get an episode
	 * @param {Number} id of the asked show
     * @param {Number} season of the asked episode
     * @param {Number} number of the asked episode
	 * @return {Promise} need to be handeled.
	 */
	getEpisodeByIdSeasonNumber(id, season, number) {
		return fetch(`${this.baseUrl}/shows/${id}/episodebynumber?season=${season}&number=${number}`);
	}

    /**
	 * Get an episode
	 * @param {Number} id of the asked show
     * @param {Date} date of the asked episode
	 * @return {Promise} need to be handeled.
	 */
    getEpisodeByIdDate(id, date) {
        return fetch(`${this.baseUrl}/shows/${id}/episodesbydate?date=${date}`);
    }
    
    getCastingById(id) {
        return fetch(`${this.baseUrl}/shows/${id}/cast`);
    }

    getImagesById(id) {
        return fetch(`${this.baseUrl}/shows/${id}/images`);
    }

    getActors(index) {
        return fetch(`${this.baseUrl}/people?page=${index ? index : 0}`);
    }

    getActorsById(id) {
        return fetch(`${this.baseUrl}/people/${id}`);
    }

}
