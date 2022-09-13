import React, { Component } from 'react';

const UserGreeting = (props) => {
    return (
        <h2>Welcome back</h2>
    )
}
const GuestGreeting = (props) => {
    return (
        <h2>Please Login first!</h2>
    )
}
const Greeting = (props) =>{
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}
const LoginButton = (props) =>{
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
} 
const LogoutButton = (props) =>{
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
} 

class LoginControl extends Component {
    state = { isLoggedIn : false } 
    handleLoginClick = () =>{
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick = () =>{
        this.setState({isLoggedIn: false})
    }
    render() { 
        const isLoggedIn = this.state.isLoggedIn
        let button 
        if (isLoggedIn) {
            button = <LogoutButton onClick={()=> this.handleLogoutClick()} />
        } else {
            button = <LoginButton onClick={()=> this.handleLoginClick()} />
        }
        return (
            <>
                <Greeting isLoggedIn={isLoggedIn}/>
                <p>You are <b>{isLoggedIn? 'currently':'not'}</b> logged in</p>
                {button}
            </>
        );
    }
}
 
export default LoginControl;