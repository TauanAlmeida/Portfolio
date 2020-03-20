import React, { useContext } from 'react';
import { Container, ColAlignCenter, Img, Quote, Description } from './styles';
import Hexagon from '../../components/Hexagon/Hexagon'
import UnderBar from '../../components/UnderBar/UnderBar'
import Perfil from '../../assets/perfil.jpg'
import { ThemeContext } from 'styled-components'

export default function Sobre() {
   const {colors} = useContext(ThemeContext);

  return (
    <Container id="sobre">
        <h1 className="mt-5 test" data-animate="slideInLeft">Sobre</h1>
        <UnderBar
            width={100}
            height={5}
            color={colors.elements}
            animate="slideInLeft"
        />
        <div className="mt-5 row">
            <ColAlignCenter className="col-12 col-sm-6 col-lg-3 ajust-center" data-animate="fadeInUp"> 
                <Hexagon icon="fas fa-lightbulb"/>
                <h3 className="white-color">Intuitivo</h3>
                <p className="white-color">Forte preferência por UX / UI intuitiva e fácil de usar.</p>
            </ColAlignCenter>
            <ColAlignCenter className="col-12 col-sm-6  col-lg-3 ajust-center" data-animate="fadeInUp">
                <Hexagon icon="fas fa-tachometer-alt"/>
                <h3 className="white-color">Rápido</h3>
                <p className="">Código limpo e eficaz e interação sem atraso.</p>
            </ColAlignCenter>
            <ColAlignCenter className="col-12 col-sm-6  col-lg-3 ajust-center" data-animate="fadeInUp">
                <Hexagon icon="fas fa-chart-line"/>
                <h3 className=" white-color">Escalonável</h3>
                <p className="white-color">Cresça seu projeto de forma qualitativa e sem problemas.</p>
            </ColAlignCenter>
            <ColAlignCenter className="col-12 col-sm-6  col-lg-3 ajust-center" data-animate="fadeInUp">
                <Hexagon icon="fas fa-rocket"/>
                <h3 className=" white-color">Dinâmico</h3>
                <p className="white-color">Seu site funcionando em multiplataformas</p>
            </ColAlignCenter>
        </div>
        <div className="mt-5 row">
            <div className="col" data-animate="slideInLeft">
                <Quote><i className="quotes fas fa-quote-left"></i>
                Sou licenciando em computação, no Instituto Federal do Sertão Pernambucano Campus Petrolina. Apaixonado pelo desenvolvimento, atualmente estudando para ser desenvolvedor FullStack Javascript, porém fascinado pelo front-end. Minha principal pretenção é manter o código sempre limpo e com melhor desempenho possível, um cara bastante extrovertido bom de grupo e o melhor, estou sempre em busca de aperfeiçoamentos e novos conhecimentos.
                <i className="quotes fas fa-quote-right"></i></Quote>
            </div>
            <div className="col" data-animate="fadeInUp">
                <Img src={Perfil}/>
            </div>
            <div className="col"  data-animate="slideInRight">
                <Description><i className="fas fa-envelope"></i><span>Tauan_almeida@hotmail.com </span></Description>
                <Description><i className="fas fa-phone-alt"></i><span>(87) 98832-6362 </span></Description>
                <Description><i className="fas fa-map-marker-alt"></i><span>Petrolina - PE</span></Description>
                <Description><i className="far fa-calendar-alt"></i><span>24 anos</span></Description>
            </div>
        </div>
    </Container>
  );
}
