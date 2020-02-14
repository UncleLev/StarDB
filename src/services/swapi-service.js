export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imgBase = 'http://starwars-visualguide.com/assets/img';
    async getResourse(url) {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} ,  received ${res.status}`);
        }
        return await res.json();
    }

    getAllPeople  = async () => {
        const res = await this.getResourse(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets= async () => {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet= async (id) => {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }

    getAllStarShips= async () => {
        const res = await this.getResourse(`/starships/`);
        return res.results.map(this._transformStarsship);
    }

    getStarShip = async (id) => {
        const starships = await this.getResourse(`/starships/${id}/`);
        return this._transformStarsship(starships);
    }

    getPersonImg = ({id})  => {
        return `${this._imgBase}/characters/${id}.jpg`;
    }

    getStarShipImg = ({id})  => {
        return `${this._imgBase}/starships/${id}.jpg`;
    }

    getPlanetImg = ({id})  => {
        return `${this._imgBase}/planets/${id}.jpg`;
    }
    


    _extractId(item) {
        const idRE = /\/([0-9]*)\/$/;
        return item.match(idRE)[1];
    }

    _transformPlanet = (planet) => {
        return ({
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        })
    }

    _transformStarsship = (starships) => {
        
        return ({
            id: this._extractId(starships.url),
            name: starships.name,
            model: starships.model,
            manufacturer: starships.manufacturer,
            costInCredits: starships.cost_in_credits,
            length: starships.length,
            maxAtmospheringSpeed: starships.max_atmosphering_speed,
            crew: starships.crew,
            passengers: starships.passengers,
            cargoCapacity: starships.cargoCapacity,
            consumables: starships.consumables,
            hyperdriveRating: starships.hyperdrive_rating,
            MGLT: starships.MGLT,
            starshipClass: starships.starship_class,
        })
    }

    _transformPerson = (person) => {
        
        return ({
            id: this._extractId(person.url),
            name: person.name,
            height: person.height,
            mass: person.mass,
            hairColor: person.hair_color,
            skinColor: person.skin_color,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        })
    }
}