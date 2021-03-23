import React from 'react'
import GreenCard from './GreenCard';
import RedCard from './RedCard';
import YellowCard from "./YellowCard";

function Progressing() {
    return (
        <div className="column">
            <h1>Progressing</h1>
            <RedCard></RedCard>
            <YellowCard></YellowCard>
            <GreenCard></GreenCard>
            <GreenCard></GreenCard>
        </div>
    )
}

export default Progressing