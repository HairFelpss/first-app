import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Felipe', age: 22 },
      { name: 'Plaqtudum', age: 25 },
      { name: 'Biih', age: 20 },
    ]
  }

  switchNameHandler = (newName) => {
    //DON'T DO THIS: this.state.persons[0].name = 'Maximilian' ; 
    this.setState({
      persons: [
        { name: 'felipe', age: 22 },
        { name: '9zao', age: 25 },
        { name: '@binha', age: 20 }
      ]
    })
  }

  nameChangedHandler= (event) =>{
    this.setState({
      persons: [
        { name: 'Truta', age: 22 },
        { name: event.target.value, age: 25 },
        { name: 'Felizin', age: 20 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Patudum</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'Pararatururum')} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangedHandler}>
        My hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
        click={this.switchNameHandler}/>
      </div>
    );
  }
}

export default App;
