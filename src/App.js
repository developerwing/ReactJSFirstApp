import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 4 },
        { id: 4, value: 2 },
    ]

}
handleDelete = (idValue) => {
  const counters = this.state.counters.filter(m=>m.id !==idValue);
  this.setState({counters:counters});
};
reset = ()=>{
  const counters = this.state.counters.map(m=>{
      m.value = 0;
      return m;
  });
  this.setState({counters:counters});
};
handleIncrement = (counter) =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({counters:counters});
}
handleDecrement = (counter) =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters:counters});
}
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(m=>m.value>0).length} />
        <main className="container">
          <Counters 
          counters = {this.state.counters}
          onReset = {this.reset}
          onIncrement = {this.handleIncrement}
          onDeletion = {this.handleDelete}
          onDecrement = {this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
