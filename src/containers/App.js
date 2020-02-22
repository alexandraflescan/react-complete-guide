import React, { Component } from 'react';
import styled from "styled-components"
import classes from  './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../../src/hoc/WithClass'


class App extends Component {
constructor(props){
  super(props);
  console.log('[App.js] constructor')

}
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

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] component did mount')
  }
  
  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        {name: newName, age: 28 },
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
    console.log('[App.js] render()')
    let persons = null;
    let btnClass = '';
    //DISPLAY PERSONS ON CLICK
    if(this.state.showPersons){
      persons =  <Persons 
         persons={this.state.persons} 
         clicked={this.deletePersonHandler} 
         changed={this.nameChangedHandler} />
        }
   
    return (
      <WithClass classes={classes.App}>
        <Cockpit  
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        toggle={this.togglePersonsHandler}/>
         {persons}
      </WithClass>
   


    );
    // return React.createElement('div', null, 'h1', 'I\'m a react app!!!!!!!!');
  }
}

export default App;
