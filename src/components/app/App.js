import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage, HomePage } from "../pages";

// import PersonDetails from '../person-details'
// import ItemList from '../item-list';
// import PersonPage from '../person-page/person-page';
// import Row from '../../services/row';

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-contexts";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className="container">
                        <Header />
                        <RandomPlanet />
                        <Route path="/" exact component={HomePage} />
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path="/planets/" component={PlanetsPage} />
                        <Route
                            path="/starships/:id?"
                            component={StarshipsPage}
                        />
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
}
