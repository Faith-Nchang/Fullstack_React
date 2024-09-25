import React from 'react';
import './Event.css';

const Event = ({ image, name, country, link, date }) => {
    return (
        <div className="event">
            <img src={image} alt={name} />
            <div className="event-content">
                <h3 className="event-name">{name}</h3>
                <p className="event-country">{country}</p>
                <p>{date}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="event-link">
                <button className="event-button">

                    More Info
                    
                    </button>
                </a>
                
            </div>
        </div>
    );
};

export default Event;