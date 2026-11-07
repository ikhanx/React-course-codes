import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name:  "Dummy",
                location: "Dummy",
                avatar_url: "http//-jashdb/idkwms"

            }
        }

        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ikhanx")
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    render() {

        
       const {name , location, avatar_url} = this.state.userInfo;

        return(
        <div className="user-card">
            <img src={avatar_url} alt="photo" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: ikhan155676@gmail.com</h4>
        </div>
        );
    }
}

export default UserClass;
