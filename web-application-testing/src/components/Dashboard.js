import React, { useState } from "react";
import { Display } from "./Display";


//provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
//there is NO need to specify the type of hit (single, double, etc).
//changes recorded on this component should update the information shown by the Display component.
export const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);



    //Strikes Handler
    const Strikes = () => {
        if(strikes < 3) {
            setStrikes(strikes + 1)
        };
    };

    //Ball Handler
    const Balls = () => {
        if(balls < 4){
            setBalls(balls + 1)
        };
    };

    //Foul Handler
    const Fouls = () => {
        if (strikes < 2) {
            setStrikes(strikes +1)
        };
    };

    //Hit Hanlder
    const Hits = () => {
        setStrikes(0)
        setBalls(0)
    }

    return (
        <div className="dash-container">
            <h1>Baseball Stadium Dashboard</h1>
            <Display strikes={strikes} balls={balls}/>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    )

}