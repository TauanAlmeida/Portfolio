import React from 'react';

import { Container } from './styles';

export default function UnderBar(props) {
  return (
    <Container
        width={props.width}
        height={props.height}
        color={props.color}
        data-animate={props.animate}
    />
  );
}
