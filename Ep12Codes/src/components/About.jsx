import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../../utils/userContext";


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
                <div>
                    <userContext.Consumer>
                        {({loggedInUser}) => (<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                    </userContext.Consumer>
                </div>
                <h2>This is Namaste React</h2>
                <UserClass name={"My name is khan"} location="Patna" />
            
            </div>
        )
    }
}

export default About;