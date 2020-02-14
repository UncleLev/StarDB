import React from 'react';
import ItemDetails, {Record} from '../item-details';
import { withSwapiService } from '../hoc-helper';


const PersonDetails = (props) => {
    
    return (
        <ItemDetails {...props}>
            <Record field="height" label="Height" />
            <Record field="mass" label="Mass" />
            <Record field="hairColor" label="Hair color" />
            <Record field="skinColor" label="Skin color" />
            <Record field="eyeColor" label="Eye color" />
            <Record field="birthYear" label="Birth year" />
            <Record field="gender" label="Gender" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    
    return{
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImg
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);