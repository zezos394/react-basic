import React, { Component } from 'react';

class Form2 extends Component {
    state = { 
        name: 'Enter your name',
        learning: 'reacjs',
        message: 'Your message',
        isHuman: false
    }
    handleInput = (event) =>{
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
        
    }
    handleSubmit =(event) =>{
        console.log('Name: ' + this.state.name + ', ' +
                    'Learning: ' + this.state.learning +', ' +
                    'Message: ' + this.state.message +', ' +
                    'Human: ' + this.state.isHuman
        )
        event.preventDefault() 
    }
    render() { 
        return (
           <>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <label>My name is</label> <br/>
                <input
                    name='name' type="text" placeholder={this.state.name}
                    onChange={(event)=>this.handleInput(event)}
                />
                <br/>
                <label>I'm learning</label> <br/>
                <select
                    name='learning' value={this.state.learning}
                    onChange={(event)=>this.handleInput(event)}
                >
                    <option value="reactjs">reactjs</option>
                    <option value="html">HTML</option>
                    <option value="javascript">javascript</option>
                   
                </select>
                <br/>
                <label>Message</label> <br/>
                <textarea
                    name='message' type="text" placeholder={this.state.message}
                    onChange={(event)=>this.handleInput(event)}
                />
                <br/>
                <label>I am not a robot</label>
                <input
                    name='isHuman' type="checkbox" 
                    onChange={(event)=> this.handleInput(event)}
                />
                <br/>
                <input type='submit' value="submit"/>
            </form>
           </>
        );
    }
}
 
export default Form2;