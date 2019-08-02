import React from 'react';
import './CardExp.css'


export default function CardExp(props) {
  return (
    <>
    <div className="card mb-3 card-exp-width">
      <img src={props.img} className="card-img-top image" alt="projeto"/>
        <div className="middle">
          <div className="text">{props.desc}</div>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark stretched-link">Saiba mais</a>
        </div>
    </div>
    </>
  );
}
