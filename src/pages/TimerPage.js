import React from 'react'
import Timer from '../components/Timer'

const c = {
    container: 'flex items-center justify-center min-h-screen',
    timer: 'text-6xl text-red-500'
}

function TimerPage() {
    const seconds = 10;

    return (
        <div className={c.container}>
            <Timer styleClasses={c.timer} seconds={seconds} />
        </div>
    )
}

export default TimerPage
