import React from "react";

function Message() {
    let eid = 101;
    let ename = "Rahul Gandhi";
    let loc = ["Wayanad", "New Delhi"];
    let details = {
        sal: 450000,
        avail: true
    };
    return (
        <div>
            <h2>Message Component</h2>
            <h3>Employee Id: {eid}</h3>
            <h3>Employee Name: {ename}</h3>
            <h3>Employee Location: {loc[0]}</h3>
            <h3>Employee Details: {JSON.stringify(details)}</h3>
        </div>
    );
}

export default Message;
