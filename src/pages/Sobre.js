import React from 'react';
import './Sobre.css'
import Hexagon from '../components/Hexagon'

export default function Sobre() {
  return (
    <div id="sobre" className="sobre-wrapper">
     
            <h1 className="title">Sobre</h1>
            <div className="card mb-3 mt-4">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src="https://avatars2.githubusercontent.com/u/23041553?s=400&v=4" className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title ">TAUAN ALMEIDA FEITOSA</h2>
                    <div className="card-sub">
                        <div className="row">
                        <div className="col-12">
                            <i className="fas fa-phone-alt"></i><span>(87) 98832-6362 </span>
                        </div>
                        <div className="col-12">
                            <i className="fas fa-envelope"></i> <span>Tauan_almeida@hotmail.com </span>
                        </div>
                        <div className="col-12">
                            <i className="fas fa-map-marker-alt"></i><span>Petrolina - PE</span>
                        </div>

                        </div>
                    </div>
                    <p className="card-text mt-2 p-align">
                    <span className="bold">Tauan</span> é licenciando em computação, no Instituto Federal do Sertão Pernambucano Campus Petrolina.
                        Apaixonado pelo desenvolvimento, atualmente estudando para ser FullStack Development Javascript, porém fascinado pelo front-end.
                        Sua principal pretenção é manter o código sempre limpo e com melhor desempenho possível, um cara bastante extrovertido
                        bom de grupo e o melhor, é que ele nunca para, sempre em busca de aperfeiçoamentos e novos conhecimentos.
                    
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 month ago</small></p>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 ajust-center">
                <Hexagon icon="fas fa-lightbulb"/>
                <h3 className=" white-color">Intuitivo</h3>
                <p className="white-color">Forte preferência por UX / UI intuitiva e fácil de usar.</p>
                </div>
                <div className="col-12 col-sm-6  col-lg-3 ajust-center">
                <Hexagon icon="fas fa-tachometer-alt"/>
                <h3 className=" white-color">Rápido</h3>
                <p className=" white-color">Código limpo e eficaz e interação sem atraso.</p>
                </div>
                <div className="col-12 col-sm-6  col-lg-3 ajust-center">
                <Hexagon icon="fas fa-chart-line"/>
                <h3 className=" white-color">Escalonável</h3>
                <p className="white-color">Cresça seu projeto de forma qualitativa e sem problemas.</p>
                </div>
                <div className="col-12 col-sm-6  col-lg-3 ajust-center">
                <Hexagon icon="fas fa-rocket"/>
                <h3 className=" white-color">Dinâmico</h3>
                <p className="white-color">Seu site funcionando em multiplataformas</p>
                </div>
                </div>
    </div>
  );
}
