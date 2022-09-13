import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'duc',
            age: '20'
        }
    }
    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        alert('You clicked!')
    }
    render() { 
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                    onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className='second'>
                    <button onClick={()=> this.handleClickButton()}>Click me</button>
                </div>
            </>
        );
    }
}
 
export default Test;