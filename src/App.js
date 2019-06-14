import React from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';
import PizzaDetailsContainer from './components/PizzaDetailsContainer';
import AddPizzaFormContainer from './components/AddPizzaFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <main>
        <PizzaListContainer />
        <PizzaDetailsContainer />
        <AddPizzaFormContainer />
      </main>
    </div>
  );
}

export default App;
