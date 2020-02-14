import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helper";

const StarshipDetails = (props) => {
    console.log(props);

    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="costInCredits" label="Cost" />
            <Record field="length" label="Length" />
            <Record
                field="maxAtmospheringSpeed"
                label="max atmosphering speed"
            />
            <Record field="crew" label="Crew" />
            <Record field="passengers" label="Passengers" />
            <Record field="consumables" label="Consumables" />
            <Record field="hyperdriveRating" label="Hyperdrive rating" />
            <Record field="MGLT" label="MGLT" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarShip,
        getImgUrl: swapiService.getStarShipImg
    };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
