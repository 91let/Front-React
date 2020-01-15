import React from 'react';
import Greetings from './Greetings';
import Greetings2 from './Greetings2';
import Greetings3 from './Greetings3';
import Greetings4 from './Greetings4';
import Greetings5 from './Greetings5';

const App: React.FC = function() {
  const onClick = (name: string) => {
    console.log(name + ' says hello');
  }
  return (
    <div>
      <Greetings name = "1st" />
      <Greetings2 name = "2nd" />
      <Greetings3 name = "3rd" />
      <Greetings4 name = "4th" />
      <Greetings4 name = "4th" optional = "check" />
      <Greetings5 name = "5th" onClick = {onClick} />
    </div>
  );
};

export default App;
