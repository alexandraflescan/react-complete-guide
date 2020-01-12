import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './Exercise2/ValidationComponent';
import CharComponent from './Exercise2/CharComponent';

class App extends Component {

  state = {
    persons: [
      {id:"sdasd", name: 'Max ', age: 28},
      {id:"sfsf", name: 'Manu ', age: 29},
      {id:"fhfh", name: 'Stephanie ', age: 26}
    ],

    username: 'alexandra',
    showPersons: false,
    textLength: 0,
    charComponents: []
  }

  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manuel ', age: 29},
        {name: 'Steph ', age: 26}
      ]
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({  persons: persons })
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  deletePersonHandler = (personIndex) => { 
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //spread operator creates a new array so we don't mutate the original state
    persons.splice(personIndex, 1);
    this.setState({persons})

  }

  deleteLetter = (letter) => {
    const charComponents = [...this.state.charComponents];
    charComponents.splice(letter, 1)
    this.setState({charComponents})
  }

  returnLengthHandler = (event) =>  {
// get input text length
    var textLength = {...this.state.textLength}
    textLength = event.target.value.length;
//get input as array of letters 
    var charComponents = {...this.state.charComponents}
    charComponents = event.target.value.split('');

    this.setState({textLength: textLength, charComponents: charComponents});
  }


  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click = {() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
         </div>
      );
          
        }
      
    let validation;
   if(this.state.textLength < 5){
        validation = <ValidationComponent  textLength={this.state.textLength} validation="too short"/>;
    } else {
        validation = <ValidationComponent  textLength={this.state.textLength} validation="long enough"/>
    }

    let charComponent = (
      <div>
        {this.state.charComponents.map((char, index) => {
          return <CharComponent key={index} character={char} deleteItem={() => this.deleteLetter(index)}/>
        })}
      </div>

    );

    return (
      <div className="App">
      <p> Crazy stuff </p>

      
      <button 
      onClick={this.togglePersonsHandler}>Toggle Persons</button>

    <input onChange={this.returnLengthHandler}></input>
   

    {/* <UserInput username={this.state.username} click={this.handleChange} ></UserInput>
    <UserOutput username={this.state.username} ></UserOutput> */}
    {persons}
    {validation}
    <CharComponent />
    {charComponent}
      </div>

    );
    // return React.createElement('div', null, 'h1', 'I\'m a react app!!!!!!!!');
  }
}

export default App;
