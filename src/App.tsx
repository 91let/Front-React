import React from 'react';
import './App.css';
import Greetings from './Day1/Greetings';
import Greetings2 from './Day1/Greetings2';
import Greetings3 from './Day1/Greetings3';
import Greetings4 from './Day1/Greetings4';
import Greetings5 from './Day1/Greetings5';
import Counter from './Day2/Counter';
import Counter2 from './Day2/Counter2';
import MyForm from './Day2/MyForm';
import Counter3 from './Day2/Counter3';
import ReducerSample from './Day2/ReducerSample';
import MyForm2 from './Day3/MyForm2';
import TodoForm from './Day4/TodoForm';
import TodoList from './Day4/TodoList';

const App: React.FC = function() {
  const onClick = (name: string) => {
    console.log(name + ' says hello');
  }

  const onSubmit = (form: { name: string; description: string }) =>{
    console.log(form);
  };

  return (
    <div className="App-div-days">

      <h1>React Study</h1>

      <div className="App-div-day">
        <h1>Day 1</h1>
        <Greetings name = "1st" />
        <Greetings2 name = "2nd" />
        <Greetings3 name = "3rd" />
        <Greetings4 name = "4th" />
        <Greetings4 name = "4th" optional = "check" />
        <Greetings5 name = "5th" onClick = {onClick} />
      </div>

      <div className="App-div-day">
        <h1>Day2</h1>
        <Counter />
        <Counter2 />
        <MyForm onSubmit={onSubmit}/>
        <Counter3 />
        <ReducerSample />
      </div>

      <div className="App-div-day">
        <h1>Day3</h1>
        <MyForm2 onSubmit={onSubmit}/>
      </div>

      <div className="App-div-day">
        <h1>Day4</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  );
};

export default App;
