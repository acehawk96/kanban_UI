import React from 'react'
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import GreenCard from "./GreenCard";

function AddBox() {
    function AddCard() {
        const add =
        console.log("AddBox Button was clicked")

    }

    return (

        <button className="addBox" onClick={AddCard}>
            <AddBoxRoundedIcon style={{ fontSize: 100 }} />
        </button>

    )
}

export default AddBox