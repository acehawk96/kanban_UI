import React from 'react'
import GreenCard from './GreenCard';
import RedCard from './RedCard';

function ToDo() {
    return (
        <div className="column">
            <h1>To Do</h1>
            <GreenCard></GreenCard>
            <RedCard></RedCard>
        </div>
    )
}

export default ToDo