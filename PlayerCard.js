import React from 'react';

const PlayerCard = ({player: {country, name, searches, id}}) => {
    return (
        <div className="player card">
            <h3>{name}</h3>
            <p>Rank: {id}</p>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </div>
    );
};

export default PlayerCard;