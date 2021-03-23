import React from 'react'
import RedCard from './RedCard';
import GreenCard from './GreenCard';

function Done() {
    return (
        <div className="column">
            <h1>Done</h1>
            <RedCard></RedCard>
            <GreenCard></GreenCard>
        </div>
    )
}

export default Done