import React from 'react';
import './Formacao.css'
import CardForm from '../components/CardForm'
import ifsertao from '../assets/Marca_CP.png'
import udemy from '../assets/udemy.png'

export default function Formacao() {
  return (
    <div id="formacao" className="formacao-wrapper">
        <h1 className="title">Formação</h1>
        <div className="container">
            <div className="form-content">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <CardForm
                            image={ifsertao}
                            desc={`Licenciando em computação - VI Periodo.`}
                            percent="80"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <CardForm
                            image={udemy}
                            large={true}
                            desc={`Curso Web Moderno com JavaScript.
                                ES2015, ES2016, ES2017, ES2018, HTML e CSS, Gulp, Webpack, jQuery, 
                                Bootstrap, React, Vue JS, ExpressJS, MySQL e MongoDB.
                            `}
                            percent="65"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <CardForm
                            image={udemy}
                            large={true}
                            desc={`Desenvolvimento de aplicativos nativos com React Native para Android e iOS.
                                React, React-Native, Redux e Flexbox.
                            `}
                            percent="50"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
