import React, {useContext} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Content, Button } from './style'
import { ThemeContext } from 'styled-components'

export default function Home(props) {

  useContext(ThemeContext)

  return (
    <Container id="home">
      <Navbar toggleTheme={props.toggleTheme}/>
      <Content>
        <h1 data-animate="bounce">TAUAN <span>ALMEIDA</span></h1>
        <p>Olá, Trabalho com desenvolvimento Backend/Frontend, sou apaixonado pelo Javascript e a cada dia procuro sempre aprender um pouquinho mais.
        </p>
        <Button className="btn" href="#sobre">Confira meu trabalho</Button>
      </Content>
    </Container>
  );
}
