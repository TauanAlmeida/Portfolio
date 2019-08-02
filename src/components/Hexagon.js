import React from 'react';
import './Hexagon.css'

export default function Hexagon(props) {

function handleIcon(props){
  return props.icon ? `${props.icon} icon` :  `fas fa-lightbulb icon`
}

return (
    <div className="adjust-icon" id="hexagono" >
        <i className={handleIcon(props)}></i>
    </div>
  );
}
