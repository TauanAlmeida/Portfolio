import React from 'react';
import './Experiencia.css'
import CardExp from '../components/CardExp'
import sgtt from '../assets/sgtt.png'
import socketChat from '../assets/socket-chat.png'

export default function Experiencia() {
  return (
    <div id="exp" className="exp-wrapper title-exp">
        <div className="exp-content">
          <h1 className="main-title">Projetos</h1>
          <div className="container">
            <div className="row pt">
              <div className="col-12 mb-4 col-lg-6 col-md-6 col-sm-12">
                <CardExp
                  img={socketChat}
                  desc={`
                    Chat desenvolvido para disciplina de Redes e computadores. Desenvolvido em 
                    NodeJS + Socket.io. 
                  `}
                  link="https://www.github.com/TauanAlmeida"
                />
              </div>
              <div className="col-12 mb-4 col-lg-6 col-md-6 col-sm-12">
                <CardExp
                  img={sgtt}
                  desc={`
                    Sistema para realizar e transferência de tecnologia. Desenvolvido em 
                    Laravel + Bootstrap (*Em desenvolvimento).
                  `}
                  link="https://www.github.com/TauanAlmeida"
                />
              </div>
            
            </div>
          </div>
        </div>
    </div>
    );
}
