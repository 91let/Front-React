import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
};

function Greetings ({name, mark, optional, onClick}: GreetingsProps) {
    function handleClick(){
        return onClick(name);
    }
    return(
        <div>
            Hello, {name} {mark}
            {optional && <a><br/>{optional}</a>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
};

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;