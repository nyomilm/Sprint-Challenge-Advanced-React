import React from 'react';
// import './App.css';

function PlayerCard(props) {
    return (
        <div className="player card">
            <h3>{props.player.name}</h3>
            <p>Rank: {id}</p>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </div>
    );
};

export default PlayerCard;