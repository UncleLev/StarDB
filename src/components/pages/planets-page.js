import React, { Component } from "react";
import Row from "../../services/row";
import { PlanetDetails, PlanetList } from "../sw-component";
import "./pages.css";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return (
            <div className="page-wrap">
                <h2 className="page-title">Planet</h2>
                <p className="page-inf">
                    Here you can chose planet from list and read information
                    about it
                </p>
                <Row
                    left={<PlanetDetails itemId={this.state.selectedItem} />}
                    rigth={<PlanetList onItemSelected={this.onItemSelected} />}
                />
            </div>
        );
    }
}
