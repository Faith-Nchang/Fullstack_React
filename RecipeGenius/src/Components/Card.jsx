import React from 'react';
import './Card.css';

const Card = ({ name, statistics}) => { 

    return (
        <div className="card">
            <h2>
                {name}
            </h2>
            <h1>
                {statistics}
            </h1>
        </div>
    );
}

export default Card;