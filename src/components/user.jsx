import React, {useState,useEffect} from "react";               

const User = (props) => {      //hooks
 const [planet,setPlanet] = useState("Earth"); // const [planet,setPlanet] = React.useState("Earth");
 //componentDidMount
 useEffect(()=>{
     //heavy computing
     console.log("component mounting");
     //componentWillUnmount
    return console.log("bye bye");
 },[]);
 //componentDidUpdate,shouldComponentUpdate
 useEffect(()=>{
     console.log("planet changes");
 },[planet]);

 return( <div>                          
    <h1>{props.name}</h1>   
    <p>{props.description}</p>   
    <button onClick={()=> setPlanet("Pluto")}>{planet}</button>
  </div>
  );  
};
// //life-cycle 
// class User extends React.Component{  //required if props and states are taken(to create the state)(life-cycle methods)
//     constructor(props){              //constructor in a code is used to create an object
//       super(props);                  //super is constructor/super class of react
//       this.state ={
//         planet: "Earth",            // only state(one component) can hold
//       };
//       console.log("Hey!! I am from constructor");
//     }

//     componentDidMount(){
//       this.setState({
//         planet: "Jupiter"
//       });
//     }

//     //  static getDerivedStateFromProps(prop,state){
//     //   console.log("I am from get derived state from props");
//     //    return {planet: "Jupiter"};
//     //  }

//     shouldComponentUpdate(nextProp,nextState){
//       console.log({
//         nextProp,
//         nextState
//       });
//       return true;
//     }

//     getSnapshotBeforeUpdate(prevProp,prevState){
//       console.log({
//         prevProp,
//         prevState
//       });
//       return true;
//     }

//     componentDidUpdate(){
//       console.log(this.state);
//     }

//     render(){
//       console.log("Hey!! I am from render");
//      //Component- Life-Cycle Methods     //in class component code this keyword is necessary
//       return( <div>                          
//           <h1>{this.props.name}</h1>   
//           <p>{this.props.description}</p>
//           <h4>{this.state.planet}</h4>      
//       </div>
//         );            //to access the state(this.state.planet)
//     }
// }


export default User; // =>ES6   (previously=> module.exports = User;)