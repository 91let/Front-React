import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;