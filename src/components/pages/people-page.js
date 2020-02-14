import React from "react";
import { withRouter } from "react-router-dom";
import "./pages.css";
import Row from "../../services/row";
import { PersonDetails, PersonList } from "../sw-component";

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <div className="page-wrap">
            <h2 className="page-title">People </h2>
            <p className="page-inf">
                Here you can chose person from list and read information about
                him/her/it
            </p>
            <Row
                left={<PersonDetails itemId={id} />}
                rigth={
                    <PersonList
                        onItemSelected={(id) => {
                            history.push(`/people/${id}`);
                        }}
                    />
                }
            />
        </div>
    );
};

export default withRouter(PeoplePage);
