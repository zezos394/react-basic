import React from 'react';


export default function SubjectList(props){
    const subjects = [
        {id: 1, name: 'Math', status: 'pass'},
        {id: 2, name: 'Biology', status: 'failed'},
        {id: 3, name: 'Chemistry', status: 'passed'},
        {id: 4, name: 'Physics', status: 'passed'},
    ]
    return (
        <div>
            {subjects.map((subject)=>(
                <div key={subject.id}>
                    {subject.name} - {subject.status}
                </div>
            ))}
        </div>
    )
}

 





