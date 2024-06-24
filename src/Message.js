import React from 'react'
class Message extends React.Component{
    msg="Hello"
    gmHandler=()=>{
        console.log("Test Case");
        this.msg="Good Morning"
        console.log(this.msg);
    }
        render(){
            return <div>
                <h1>Message</h1>
                <hr/>
                <h3>Message:{this.msg}</h3>
                        <button onClick={this.gmHandler()}>click</button>
                        <button></button>
            </div>
        
    }
}