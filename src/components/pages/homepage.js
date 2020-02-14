import React from "react";
import "./pages.css";

const HomePage = () => {
    return (
        <div className="page-wrap">
            <h2 className="page-title">Star DB </h2>
            <p className="page-inf">
                Start DB - project where you can found information about
                planets, people, starships from universe of Star Wars. We are
                using open sourse data base{" "}
                <a href="https://swapi.co/" target="_blank">
                    SWAPI
                </a>
            </p>
        </div>
    );
};

export default HomePage;
