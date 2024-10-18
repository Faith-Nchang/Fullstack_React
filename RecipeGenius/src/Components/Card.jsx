import React from 'react';
import './Card.css';

const Card = ({ stastics}) => { 

    return (
        <div className="card">
            <h1>
                {stastics}
            </h1>
        </div>
    );
}

export default Card;