import React,{Component} from 'react';
import './item-details.css'
import SwapiService from '../../services/swapi-service';

const Record = ({ item, field,label}) => {
    return(
        <li className="details-list-item list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    );
}

export {
    Record
};

export default class ItemDetails  extends Component {

    swapiService = new SwapiService();


    state = {
        item: null,
        image: null
    };

    componentDidUpdate (prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
        
    }
    
    componentDidMount(){
        this.updatePerson();
    }

    updatePerson() {
        const {itemId,getData,getImgUrl} = this.props;
        
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item)=>{
                this.setState({
                    item,
                    image: getImgUrl(item)
                });
            })
    }

    render(){
        if(!this.state.item) {
            return <span>Select person from list</span>
        }

        const {item: {name},image} = this.state;
        const {item} = this.state;
        

        return (
            <div className="person-details bg-dark">
                <img src={image} alt="" className="img" />

                <div className="details-wrap">
                    <h2>{name}</h2>
                    <ul className="details-list list-group">
                        {
                            React.Children.map(this.props.children,(child)=>{
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
};