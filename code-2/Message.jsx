import React from "react";
class Message extends React.Component{
    eid=101;
    ename="Vigor"
    loc=["Waynad","Bhubaneswar","Banglore"]
    details={
        sal:45000,
        avail:false
    }
    render(){
        
            return <div>
                <h2>Message Component</h2> 
                <h3>Employee Id:{this.eid}</h3>    
                <h3>Employee Name:{this.ename}</h3>   
                <h3>Employee Id:{this.loc}</h3>   
                <h3>Employee Id:{JSON.stringify(this.details)}</h3>   
            </div>
        }
    }
export default Message
