import React, { useState } from "react";
import { Display } from "./Display";


//provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
//there is NO need to specify the type of hit (single, double, etc).
//changes recorded on this component should update the information shown by the Display component.
export const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [hits, setHits] = useState(0)
    const [fouls, setFouls] = useState(0)



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
        if (strikes <= 2 && fouls < 4) {
            setStrikes(strikes +1);
            setFouls(fouls + 1);
            
        };
    };

    //Hit Hanlder
    const Hits = () => {
        if(hits => 0) {
            setHits(hits + 1);
            setStrikes(0);
            setBalls(0);
            setFouls(0)            
        }       
    };

    return (
        <div className="dash-container">
            <h1>Baseball Stadium Dashboard</h1>
            <Display strikes={strikes} balls={balls} hits={hits} fouls={fouls}/>
            <br></br>
            <button onClick={Strikes}>Strikes</button>
            <button onClick={Balls}>Balls</button>
            <button onClick={Fouls}>Fouls</button>
            <button onClick={Hits}>Hits</button>
        </div>
    )

}