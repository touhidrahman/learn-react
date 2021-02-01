import React, {useState, useEffect} from 'react'

const reduceTime = (seconds) => {
    if (seconds > 0) {
        return (seconds - 1);
    }
    return 0;
}

function Timer({seconds, styleClasses}) {
    const [timerSeconds, setTimerSeconds] = useState(reduceTime(seconds));

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timerSeconds > 0) {
                setTimerSeconds(reduceTime(timerSeconds));
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <span className={styleClasses}>
            {timerSeconds}
        </span>
    )
}

export default Timer
