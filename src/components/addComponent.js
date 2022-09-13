import React, { Component } from 'react';

class AddComponent extends Component {
    state = {  } 
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    } 
    render() { 
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
            </>
        );
    }
}
 
export default AddComponent;