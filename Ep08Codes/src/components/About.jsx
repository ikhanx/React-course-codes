import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <h1>About class Component</h1>
                <h2>This is Namaste React</h2>
                <UserClass name={"My name is khan"} location="Patna" />
            
            </div>
        )
    }
}

export default About;