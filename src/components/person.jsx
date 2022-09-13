import React, { Component } from 'react';

export var Infor = (props) =>{
    return ( 
        <div>
            <h2>Number {props.number}</h2>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
        </div>
     );
}
export function Description(props) {
    return ( 
        <div>
            <h3>{props.description}</h3>
        </div>
     );
}
export class Person extends Component {
    render() { 
        // this.props.firstName, ...
        let {firstName, lastName, job} = this.props
        return (
            <div>
                <h2>{firstName}</h2>
                <h3>{lastName}</h3>
                {/* in array */}
                <div className='job-list'>
                    {job.map((item, index) => {
                        return (
                            <div key={item.id} >
                                {item.title} - {item.salary}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

 
