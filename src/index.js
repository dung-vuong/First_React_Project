import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
PASSING PARAMETERS
function Hello({library, message, number}){
  return(
    <div>
      <h1>Welcome to {library}</h1>
      <p>{message}</p>
      <p>{number} Props Total</p>
    </div>
  )
}

COMPONENTS
function Lake({name}){
  return <h1>{name}</h1>
}
function App(){
  return(
    <div>
      <Lake name="Lake Tahoe"/>
      <Lake name="Angora Lake"/>
      <Lake name="Shirley Lake"/>
    </div>
  )
}

const lakeList = [
  {id: "1", name: "Dung", trailhead: "Echo"},
  {id: "2", name: "Danh", trailhead: "Wrights"},
  {id: "3", name: "Bong", trailhead: "Bayview"}
];

const list = [1,2,3,4,5];

function App({items}){
  return (
    <ul>
      {items.map(item => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  )
}
*/

function Lake({name}){
  return(
    <div>
      <h1>Visit {name}!</h1>
    </div>
  )
}
function SkiResort({name}){
  return(
    <div>
      <h1>Welcome to {name}!</h1>
    </div>
  )
}
function App({season}){
  return (
    <div>
      {season === "summer" ? (<Lake name="Summer Lake" />) : (<SkiResort name="Other Lake" />)} 
    </div>
  )
}

ReactDOM.render(
  <App season="sumer"/>, 
  document.getElementById('root')
);