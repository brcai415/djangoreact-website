import React, { useState, useEffect } from 'react';
import './test.css';

function App() {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/test')
            .then(res => res.json())
            .then(data => {setCurrentTime(data.ans)})
        }, []);

    return (
        <div className="App">
        <header className="App-header">
            <p>The current time is { currentTime }.</p>
        </header>
        </div>
    );
}

export default App;