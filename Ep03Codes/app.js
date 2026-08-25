import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span> React Element</span>

// React Element
const element = (
    
    <h1> {elem} Hello World !🚀</h1>
)

// React Functional Component 
const Title = ()=> (
   <h1 className="header" >
    Namaste React using jsx 🚀!
    </h1>
);

// React Component Composintion 

const HeadingComponent1 = () => (
    <div id="container">
    {element}
    {console.log("consoling....")}
    {Title()}
   <Title/>
   <Title></Title>
    <h1 className="heading">Namaste React Functional Coponent</h1> 
    </div>
);



//console.log(Heading); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);


