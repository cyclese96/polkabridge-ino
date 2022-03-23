import React, { useEffect, useState } from "react";

function Timer({ endTime }) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <span style={{ paddingLeft: 2 }}>
        <span
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 4,
            paddingRight: 5,
            borderRadius: 7,
            fontSize: 14,
            backgroundColor: "#C80C81",
            color: "white",
            fontWeight: 600,
          }}
        >
          {timeLeft[interval]}
          {interval}
        </span>
      </span>
    );
  });
  return <div>{timerComponents.length && timerComponents}</div>;
}

export default Timer;
