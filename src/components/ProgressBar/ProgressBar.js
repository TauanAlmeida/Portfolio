import React from 'react';
import { Container } from './styles';

export default function ProgressBar(props) {
  return (
    <Container data-percentage={props.percentage}>
        <span className="progress-left">
            <span className="progress-bar " data-animate={props.animate}></span>
        </span>
        <span className="progress-right">
            <span className="progress-bar " data-animate={props.animate}></span>
        </span>
        <div className="progress-value">
            <div>
                {props.percentage}%<br/>
                <span>{props.tecName}</span>
            </div>
        </div>
    </Container>
  );
}
