import React, { useState } from 'react';
import './test.css';

function App() {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [ans, setAns] = useState(0);
    
    function handleClick(e) {
        e.preventDefault()
        const numbers = {"firstNum": Number(firstNum), "secondNum": Number(secondNum)}
        fetch('http://127.0.0.1:5000/test', {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(numbers)
        })
        .then(res => res.json())
        .then(json => {
            setAns(json.ans)
        })
    }
    
    return (
        <div className='App'>
            <header style={{marginBottom: '25px'}}>Calculator</header> 
            <form>
                <label>
                    First Number
                    <input type="number" placeholder = "first number" value={firstNum} onChange={e => setFirstNum(e.target.value)}/>
                </label>
                <label>
                    Second Number
                    <input type="number" placeholder = "second number" value={secondNum} onChange={e => setSecondNum(e.target.value)}/>
                </label>
                <button onClick={ handleClick }>
                    Send to Backend
                </button>
            </form>

            <label>Answer: {ans}</label>
        </div>
    );
}

export default App;