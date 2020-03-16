import React,{ useContext} from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components'
import UnderBar from '../../components/UnderBar/UnderBar'
import Skills from '../../components/Skills/Skills'
import html from '../../assets/skills-img/html5.png' 
import vue from '../../assets/skills-img/logo.png'
import react from '../../assets/skills-img/react.png'
import css from '../../assets/skills-img/css3.png'
import bootstrap from '../../assets/skills-img/bootstrap.png'
import materialize from '../../assets/skills-img/materialize.png'
import node from '../../assets/skills-img/nodejs.png'
import mysql from '../../assets/skills-img/mysql.svg'
import mongo from '../../assets/skills-img/mongodb.png'
import Github from '../../assets/skills-img/github.png'
import git from '../../assets/skills-img/git.png'
import ps from '../../assets/skills-img/photoshop.png'
import vsCode from '../../assets/skills-img/vscode.png'
import figma from '../../assets/skills-img/figma.png'
import styled from '../../assets/skills-img/styled.png'
import laravel from '../../assets/skills-img/laravel.svg'

export default function Habilidades(props) {
   const {colors} = useContext(ThemeContext)
  return (
    <Container id="habilidades">
         <h1 data-animate="slideInLeft">Habilidades</h1>
        <UnderBar
            width={100}
            height={5}
            color={colors.elements}
            animate="slideInLeft"
        />
        <div className="container mt-5">
        <div className="row">
          <div className="col col-lg-4">
            <Skills
              title="Frontend"
              data={[
              { name: "HTML5", imgUrl: html },
              { name: "ReactJS", imgUrl: react },
              { name: "VueJS", imgUrl: vue}
              ]}
            />
          </div>
          <div className="col col-lg-4">
            <Skills
              title="CSS"
              data={[
              { name: "CSS3", imgUrl: css },
              { name: "Bootstrap", imgUrl: bootstrap },
              { name: "Materialize", imgUrl: materialize},
              { name: "Styled...", imgUrl: styled}
              ]}
            />
          </div>
          <div className="col col-lg-4">
            <Skills
              title="Backend"
              data={[
              { name: "NodeJS", imgUrl: node },
              { name: "Laravel", imgUrl: laravel },
              ]}
            />
          </div>
          <div className="col col-lg-4">
            <Skills
              title="Banco de Dados"
              data={[
              { name: "Mysql", imgUrl: mysql },
              { name: "MongoDB", imgUrl: mongo },
              ]}
            />
          </div>
          <div className="col col-lg-4">
            <Skills
              title="Versionamento"
              data={[
              { name: "Git", imgUrl: git },
              { name: "Github", imgUrl: Github },
              ]}
            />
          </div>
          <div className="col col-lg-4">
            <Skills
              title="Outros"
              data={[
              { name: "Photoshop", imgUrl: ps },
              { name: "Figma", imgUrl: figma },
              { name: "VsCode", imgUrl: vsCode },
              ]}
            />
          </div>
        </div>
        </div>
    </Container>
  );
}
