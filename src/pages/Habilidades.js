import React from 'react';
import './Habilidades.css'
import Card from '../components/Card'
import html from '../assets/skills-img/html5.png' 
import vue from '../assets/skills-img/logo.png'
import react from '../assets/skills-img/react.png'
import css from '../assets/skills-img/css3.png'
import bootstrap from '../assets/skills-img/bootstrap.png'
import materialize from '../assets/skills-img/materialize.png'
import node from '../assets/skills-img/nodejs.png'
import javascript from '../assets/skills-img/javascript.png'
import mysql from '../assets/skills-img/mysql.png'
import sqlite from '../assets/skills-img/sqlite.jpg'
import mongo from '../assets/skills-img/mongodb.png'
import Github from '../assets/skills-img/github.png'
import git from '../assets/skills-img/git.png'
import ps from '../assets/skills-img/photoshop.png'
import vsCode from '../assets/skills-img/vscode.png'
import figma from '..//assets/skills-img/figma.png'


export default function Habilidades() {
  return (
   <>
   <div id="habilidades" className="skills-wrapper">
        <h1 className="title-sk">Habilidades</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 col-lg-4 col-md-6 col-sm-12">
              <Card title="Frontend"
                data={[
                  {
                    name: 'HTML5',
                    imgUrl: html
                  },
                  {
                    name: 'Vue',
                    imgUrl: vue
                  },
                  {
                    name: 'React',
                    imgUrl: react
                  },
                  
                  
                ]}
              />
            </div>
            <div className="col-12 mb-4 col-lg-4 col-md-6 col-sm-12">
              <Card title="CSS"
                data={[
                  {
                    name: 'CSS3',
                    imgUrl: css
                  },
                  {
                    name: 'Bootstrap',
                    imgUrl: bootstrap
                  },
                  {
                    name: 'Materialize',
                    imgUrl: materialize
                  },
                  
                ]}
              />
            </div>
            <div className="col-12 mb-4 col-lg-4 col-md-6 col-sm-12">
              <Card title="Backend"
                data={[
                  {
                    name: 'NodeJs',
                    imgUrl: node
                  },
                  {
                    name: 'Javascript',
                    imgUrl: javascript
                  },         
                ]}
              />
            </div>
            <div className="col-12 mb-4 col-lg-4 col-md-6 col-sm-12">
              <Card title="Banco de Dados"
                data={[
                  {
                    name: 'MySql',
                    imgUrl: mysql
                  },
                  {
                    name: 'SqLite',
                    imgUrl: sqlite
                  },
                  {
                    name: 'MongoDB',
                    imgUrl: mongo
                  },
                  
                ]}
              />
            </div>
            <div className="col-12 mb-4 col-lg-4 col-md-6 col-sm-12">
              <Card title="Versionamento"
                data={[
                  {
                    name: 'Git',
                    imgUrl: git
                  },
                  {
                    name: 'Github',
                    imgUrl: Github
                  },
                ]}
              />
            </div>
            <div className="col-12 mb-4 col-lg-4 col-md-6 col-sm-12">
              <Card title="Outros"
                data={[
                  {
                    name: 'Photoshop',
                    imgUrl: ps
                  },
                  {
                    name: 'Figma',
                    imgUrl: figma
                  },
                  {
                    name: 'VsCode',
                    imgUrl: vsCode
                  },
                ]}
              />
              
            </div>
          </div>
        </div>
   </div>
   </>
  );
}
