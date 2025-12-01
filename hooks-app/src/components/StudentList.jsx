import React from "react";

function StudentList({students}){

    const passed = students.filter(s => s.marks >= 50);

    return(
        <>
            <h2>Passed Students</h2>

            <ul>
                {
                    passed.map(({id,name,marks}) => (<li key={id}>{name} - {marks}</li>))
                }
            </ul>
        </>
    )
}

export default StudentList;