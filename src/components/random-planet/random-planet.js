import React, { Component } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service.js";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 15000
    };

    state = {
        planet: {},
        loading: true,
        error: false
    };
    swapiService = new SwapiService();

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    OnError = (err) => {
        this.setState({ error: true, loading: false });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * (19 - 2) + 2);

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.OnError);
    };

    render() {
        const { error, planet, loading } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const planetView = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet bg-dark">
                {errorMessage}
                {spinner}
                {planetView}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { population, name, diameter, rotationPeriod, id } = planet;
    return (
        <React.Fragment>
            <img
                src={`http://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt=""
                className="img"
            />
            <div className="planet-details">
                <h2>{name}</h2>
                <ul className="details-list list-group">
                    <li className="details-list-item list-group-item">
                        <span className="term">Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className="details-list-item list-group-item">
                        <span className="term">Rotation Period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="details-list-item list-group-item">
                        <span className="term">Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
