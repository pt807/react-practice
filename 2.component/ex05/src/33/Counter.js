import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);

    
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => {setNum(d => d + 1)}}>+</button>
            <button>-</button>
        </div>
    );
};

export default Counter;
