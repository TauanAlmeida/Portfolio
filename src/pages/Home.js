import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
    <div className="home-wrapper">
    <Navbar/>
        <div className="home-content">
            <h1>TAUAN ALMEIDA</h1>
            <p>Olá, Sou um amante do Front-End, atualmente estudando 
                para ser um desenvolvedor Fullstack Javascript.</p>
            <button type="button" className="btn btn-dark">Confira meu trabalho</button>
          
        </div>
    </div>
    </>
  );
}



/*

<div className="row sp-top">
<div className="col ajust-center">
  <Hexagon icon=""/>
  <h3 className="space-top">Intuitivo</h3>
  <p>Forte preferência por UX / UI intuitiva e fácil de usar.</p>
</div>
<div className="col ajust-center">
  <Hexagon icon=""/>
  <h3 className="space-top">Rápido</h3>
  <p>Código limpo e eficaz e interação sem atraso.</p>
</div>
<div className="col ajust-center">
  <Hexagon icon=""/>
  <h3 className="space-top">Escalonável</h3>
  <p>Cresça seu projeto de forma qualitativa e sem problemas.</p>
</div>
<div className="col ajust-center">
  <Hexagon icon=""/>
  <h3 className="space-top">Dinâmico</h3>
  <p>Seu site funcionando em multiplataformas</p>
</div>

</div>*/