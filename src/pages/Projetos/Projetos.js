import React,{ useContext } from 'react';
import { Container } from './styles'
import UnderBar from '../../components/UnderBar/UnderBar'
import CardExp from '../../components/CardExp/CardExp'
import SocketChat from '../../assets/socket-chat.png'
import Sgtt from '../../assets/sgtt.png'
import Gold from '../../assets/gold.png'
import Infortec from '../../assets/infortec.png'
import { ThemeContext } from 'styled-components'

export default function Projetos() {
    const {colors} = useContext(ThemeContext)

  return (
    <Container id="exp">
         <h1 data-animate="slideInLeft">Projetos</h1>
        <UnderBar
            width={100}
            height={5}
            color={colors.elements}
            animate="slideInLeft"
        />
        <div className="container mt-5">
            <div className="row">
                <div className="col col-lg-4">
                    <CardExp
                        img={SocketChat}
                        description="Chat desenvolvido para disciplina de Redes e computadores. Desenvolvido em 
                        NodeJS + Socket.io."
                        link="https://www.github.com/TauanAlmeida"
                    />
                </div>
                <div className="col col-lg-4">
                    <CardExp
                        img={Sgtt}
                        description="Sistema de gerenciamento e transferência de tecnologia. (Em desenvolvimento)"
                        link="https://www.github.com/TauanAlmeida"
                    />
                </div>
                <div className="col col-lg-4">
                    <CardExp
                        img={Gold}
                        description="Site Oficial da empresa Gold Construtora."
                        link="https://www.goldconstrutora.com.br"
                    />
                </div>
                <div className="col col-lg-4">
                    <CardExp
                        img={Infortec}
                        description="Empresa especializada em desenvolvimento de softwares e sistemas web. Site desenvolvido como atividade obrigatória da disciplina Desenv. de Software no IFSertão-PE."
                        link="https://fsspe.petrolina.ifsertao-pe.edu.br/infortec/public/"
                    />
                </div>
            </div>
        </div>
    </Container>
  );
}
