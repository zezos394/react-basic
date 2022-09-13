import React, { Component } from 'react';
import { Person } from './person';

class MyForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: '1', title: 'Dev', salary: '500$'},
            {id: '2', title: 'Tester', salary: '550$'},
            {id: '3', title: 'Unknown', salary: 'tbd'},
        ],
        isHuman: true
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    } 
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleCheckboxChange = (event) =>{
        this.setState({
            isHuman : event.target.checked
        })
    } 
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log('>>> check data input: ',this.state.firstName + this.state.lastName + this.state.isHuman)
    }
    render() { 
        //console.log('>>> call render: ', this.state)
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text"  value={this.state.firstName} 
                        onChange={(event)=> this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text"  value={this.state.lastName}
                        onChange={(event)=> this.handleChangeLastName(event)}
                    />
                    <br/><br/>
                    <label>I am not a robot</label>
                    <input
                        type="checkbox" 
                        onChange={(event)=> this.handleCheckboxChange(event)}
                    />
                    <br/>
                    <input 
                        type="submit" value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form> 
                <Person 
                    firstName={this.state.firstName} 
                    lastName={this.state.lastName} 
                    job={this.state.arrJobs}
                />
            </>
        );
    }
}

export default MyForm;

