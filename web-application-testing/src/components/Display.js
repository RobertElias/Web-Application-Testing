import React from "react";

//display the count of balls and strikes for the at-bat.
//should be updated when the user records activity on the Dashboard component.

export const Display = props => {
  return (
    <div className="display-container">
      <section className="board">
        <h1>Strikes</h1>
        <div>{props.strikes}</div>

        <h1>Balls</h1>
        <div>{props.balls}</div>
      </section>
    </div>
  );
};
