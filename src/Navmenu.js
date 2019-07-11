
import React from 'react'
//Import CSS
import './App.css';




const Navmenu = (props) => {
    return (<ul> {props.tomate.map(elm => <li><a href='/'>{elm.name} </a>{elm.tab && <ul className="subMenu">{elm.tab.map(el => <li>{el}</li>)}</ul>}</li>)}</ul>)
}





export default Navmenu