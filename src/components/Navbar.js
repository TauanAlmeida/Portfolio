import React, { useEffect } from 'react';
import './Navbar.css'


export default function Navbar() {
    const midia = {
        facebook: 'http://wwww.facebook.com/tauan.face',
        instagram: 'https://www.instagram.com/tauan.almd/',
        linkedin: 'https://www.linkedin.com/in/tauan-almeida-1a508411b/',
        github: 'https://github.com/tauanAlmeida'
    }

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            var element = document.getElementById("navbar")
            
            var toggle = document.getElementById("botao")
         
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                element.classList.remove("navbar-transparent");
                element.classList.add("nav-scroll")
                element.style.boxShadow = "0 6px 10px -4px rgba(0, 0, 0, 0.15)"
                toggle.classList.add("navbar-toggler-icon2")
            } else {
                element.classList.add("navbar-transparent")
                element.style.boxShadow = "none"
                element.classList.remove("nav-scroll")
            }
        }
    });
    

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-transparent fixed-top">
        <button id="botao" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#sobre">Sobre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#habilidades">Habilidades</a>     
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#exp">Projetos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#formacao">Formação</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  target="_blank" rel="noopener noreferrer"  href="https://docs.google.com/document/d/1VpGOM3U_qlGs62_oVhYHtitOliqcBrUlpBiZ0nDoQaA/edit?usp=sharing">Currículo</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link"  target="_blank" rel="noopener noreferrer" href={midia.facebook}><i className="fab fa-facebook"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.instagram}><i className="fab fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.github}><i className="fab fa-github"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.linkedin}><i className="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </div>
    </nav>
  )

}
