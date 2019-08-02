import React from 'react';
import './CardForm.css'

export default function CardForm(props) {
  

  return (
    <div className="card content-card">
        <div className="card-body">
          <div className="img-container">
            <img className={  props.large ? 'udemy card-img-top': 'img-logo card-img-top'} src={props.image} alt=""/>
          </div>
            <div className="progress">
            <div style={{width: `${props.percent}%`}}className="progress-bar bg-success" role="progressbar" aria-valuenow={props.percent} aria-valuemin="0" aria-valuemax="100">{`${props.percent}%`}</div>
        </div>
        <p className="card-text">{props.desc}</p>
        </div>
    </div>
  );
}
