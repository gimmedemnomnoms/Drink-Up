import { useState, useEffect } from 'react';
// import { Typography  } from '@mui/material';


// eslint-disable-next-line react/prop-types
const Timer = ({ interval, onTimerComplete }) => {
    const [timeLeft, setTimeLeft] = useState(interval * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 0) {
                    onTimerComplete();
                    return interval * 60;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [interval, onTimerComplete]);

    useEffect(() => {
        setTimeLeft(interval * 60);
    }, [interval]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    

    return (
        <div>
             <h2>Next reminder in: {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h2>
        </div>
    );
};

export default Timer;