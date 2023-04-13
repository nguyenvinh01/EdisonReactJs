import React, { useEffect, useState } from 'react'

export default function BT2() {
    const [timer, setTimer] = useState(0);
    const [displayedTimer, setDisplayedTimer] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setDisplayedTimer(timer);
    }, [timer]);
    return (
        <div>
            <h1>Timer:</h1>
            <h2>{displayedTimer}</h2>
        </div>
    )
}
