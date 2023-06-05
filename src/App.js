import React, { useMemo, useState } from 'react';

function sum(a, b) {
    console.log('Calculating sum...');
    return a + b;
}

function CalculateSum({ a, b }) {
    const result = useMemo(() => {
        return sum(a, b);
    }, [a, b]);
    return <div>{result}</div>;
}

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    function handleNum1Change(event) {
        setNum1(Number(event.target.value));
    }
    function handleNum2Change(event) {
        setNum2(Number(event.target.value));
    }
    return (
        <div>
            <label>
                Number 1 : <br></br>
                <input type="number" value={num1} onChange={handleNum1Change} />
            </label>
            <br></br>
            <label>
                Number 2 : <br></br>
                <input type="number" value={num2} onChange={handleNum2Change} />
            </label>
            <br></br>Sum:<CalculateSum a={num1} b={num2} />
        </div>
    );
}

export default App;