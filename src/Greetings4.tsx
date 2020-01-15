import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
};

function Greetings ({name, mark, optional}: GreetingsProps) {
    return(
        <div>
            Hello, {name} {mark}
            {optional && <a><br/>{optional}</a>}
        </div>

    )
};

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;