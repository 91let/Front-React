import React, { useReducer } from 'react';

type Action = { type: 'INCREASE'}|{type: 'DECREASE'};

function reducer(state:number, action: Action) {
    switch (action.type){
        case 'INCREASE': 
            return state + 1;
        case 'DECREASE':
            return state - 1;
        defalt:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'INCREASE'});
    const onDecrease = () => dispatch({ type: 'DECREASE'});

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