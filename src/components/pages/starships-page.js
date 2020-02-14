import React from "react";
import { StarshipList, StarshipDetails } from "../sw-component";
import { withRouter } from "react-router-dom";
import "./pages.css";
import Row from "../../services/row";

const StarshipsPage = ({ history, match }) => {
    const { id } = match.params;
    console.log(id);

    return (
        <div className="page-wrap">
            <h2 className="page-title">Starships </h2>
            <p className="page-inf">
                Here you can chose starship from list and read information about
                it
            </p>
            <Row
                left={<StarshipDetails itemId={id} />}
                rigth={
                    <StarshipList
                        onItemSelected={(id) => {
                            history.push(`/starships/${id}`);
                        }}
                    />
                }
            />
        </div>
    );
};

export default withRouter(StarshipsPage);
