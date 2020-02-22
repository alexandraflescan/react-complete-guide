import React, {Component} from 'react';
import Person from '../Persons/Person/Person'

const Persons = (props) =>{


 console.log('[Persons.js] rendering...');
//  shouldComponentUpdate(nextProps, nextState) {
//      console.log('[Persons.js] should component update')
//     // if(
//     //     nextProps.persons !== this.props.persons ||
//     //     nextProps.chnaged !== this.props.changed ||
//     //     nextProps.clicked !== this.props.clicked
//     // )
//  }
 return props.persons.map((person, index) => {
       
        return  <Person 
        key={person.id}
        name={person.name} 
        age={person.age} 
        click = {() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}/>
    }
    
);
};
export default Persons;