import React from 'react';
import './Card.css';

const Card = ({ name, stastics}) => { 

    return (
        <div className="card">
            <h2>
                {name}
            </h2>
            <h1>
                {stastics}
            </h1>
        </div>
    );
}

export default Card;