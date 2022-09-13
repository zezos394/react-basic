import React, { Component } from 'react';


const Annouce = (props) =>{
    // Lấy các props ra
    const isShown = props.isShown
    const subjects = props.subjects
    if (isShown) {
        return <ShowSubject subjects= {subjects}/>
        // Truyền props của const này vào const khác
    } else {
        return <HideSubject/>
    }
}
const ShowSubject = (props) => {
    return (
    // props.subjects này đc lấy từ props.subjects của Annouce
        <div>
            {props.subjects.map(subject =>(
                <div key={subject.id}>
                    <b>{subject.name} </b>
                    <i>{subject.status}</i>
                </div>
            ))}
        </div>
    )
}
const HideSubject = (props) => {
    return (
        <b>No data<br/></b>
    )
}
const ShowButton = (props)=>{
    return (
        <button onClick ={props.onClick}>
            Show
        </button>
    )
}
const HideButton = (props)=>{
    return (
        <button onClick ={props.onClick}>
            Hide
        </button>
    )
}

class SubjectList2 extends Component {
    state = { 
        subjects : [
            {id: 1, name: 'Math', status: 'pass'},
            {id: 2, name: 'Biology', status: 'failed'},
            {id: 3, name: 'Chemistry', status: 'passed'},
            {id: 4, name: 'Physics', status: 'passed'},
        ],
        isShown: false
    }
    handleHideClick = () =>{
        this.setState({isShown: false})
    }
    handleShowClick = () =>{
        this.setState({isShown: true})
    } 
    handleChangeStatus = () =>{
        let key = 2
        this.setState(prevState =>({
            subjects: prevState.subjects.map(
                subject => subject.id === key ?{
                    ...subject,
                    name: 'Biology',
                    status: 'passed'
                }: subject
            )
        }))
        alert('Changed!')
    }
    render() { 
        const isShown = this.state.isShown
        const subjects = this.state.subjects
        let button
        if (isShown) {
            button = <HideButton onClick={()=>this.handleHideClick()}/>
        } else {
            button = <ShowButton onClick={()=>this.handleShowClick()}/>
        }
        return (
            <>
            <div>
                {subjects.map(subject=>(
                    <div key={subject.id}>
                        <b>{subject.name} </b>
                        <u>{subject.status}</u>
                    </div>
                ))}
            </div>
            <button onClick={()=>this.handleChangeStatus()}>Change status</button>
            <br/>
            <h2>Cut this</h2>
            <Annouce isShown={isShown} subjects={subjects}/> 
            {/* Truyền state subjects của class vào props subjects của const */}
            {button}
            </>
        );
    }
}

export default SubjectList2;