import React from 'react';

const Movie = ({movie: {id, title, overview, poster_path}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{overview}</p>
            <img src={poster_path} alt={title}/>
        </div>
    );
};

export {Movie};