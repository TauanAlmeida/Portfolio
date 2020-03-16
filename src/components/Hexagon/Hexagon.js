import React, {useContext} from 'react';
import { Container } from './styles'
import { ThemeContext } from 'styled-components'

export default function Hexagon(props) {
  useContext(ThemeContext)


function handleIcon(props){

  return props.icon ? `${props.icon} icon` :  `fas fa-lightbulb icon`
}

return (
    <Container>
        <i className={handleIcon(props)}></i>
    </Container>
  );
}