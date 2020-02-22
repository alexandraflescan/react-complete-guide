 import React, { Component } from 'react';
 import classes from './Person.css'
 import Aux from '../../../hoc/Auxiliary';
 import PropTypes from 'prop-types';

 
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    render() {

    return (
    <div className={classes.Person}>
        <Aux>
    <p  onClick={this.props.click}> My name is {this.props.name} 
    and I'm {this.props.age} years old</p>
    <p>{this.props.children}</p>
    <input 
    type="text" 
    onChange={this.props.changed}
    value={this.props.name}
    // ref={(inputEl) => {inputEl.focus()}}
    ref={this.inputElementRef}
     />
    </Aux>

    </div>
    
    )
}
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};
export default Person;