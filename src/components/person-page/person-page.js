import React,{Component} from 'react';
import './person-page';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../../services/error-boundry';
import Row from '../../services/row';
import ItemDetails from '../item-details';





export default class PersonPage extends Component {

    swapiService = new SwapiService();


    state = {
        selectedPerson: 6,
    };

    onPersonSelected =  (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if(this.state.hasError) {
            return <p>Upssssssssssssssssss</p>
        }
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i)=>`${i.name} (${i.birthYear})`}
            </ItemList>)
        const personDetails = <ItemDetails personId = {this.state.selectedPerson}/>;
        return(
            <ErrorBoundry>
                <Row left={personDetails} rigth={itemList}/>
            </ErrorBoundry>
        );
    }
};