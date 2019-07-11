import React from 'react';
//Import CSS
import './App.css';

//Import JS
import Navmenu from './Navmenu';


let menu = [
  { name: "Home" },
  {
    name: "Services",

    tab: ['For Entrepreneurs', 'For Students', 'For Hobbyists'],
   
  },
  { name: "Contact"}
]




function App() {
  return (
    <div className="App">
      <Navmenu tomate={menu} />
    </div>
  );
}

export default App
