import React, { useEffect, useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import {Nav, NavItem, ToggleIconBlack, ToggleIconWhite, SwitchContainer} from './styles'

export default function Navbar(props) {

    const { colors, title } = useContext(ThemeContext)

    useEffect(() => {
        var element = document.getElementById("navbar")
        var button = document.getElementById("toTop")
        element.style.background = colors.background
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            
            var toggle = document.getElementById("botao")
            //navbar scroll
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                element.classList.remove("navbar-transparent");
                element.style.boxShadow = "0 6px 10px -4px rgba(0, 0, 0, 0.15)"
                element.style.background = colors.background
                element.style.colors = colors.secondary
                toggle.classList.add("navbar-toggler-icon2")
            } else {
                element.style.background = 'transparent'
                element.style.boxShadow = "none"
                element.classList.remove("nav-scroll")
            }
            //button to top page
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                button.style.display = 'block'
            } else {
                button.style.display = "none"
            }
        }
    },[props.toggleTheme, colors.background, colors.secondary]);
    

  return (
    <Nav id="navbar" className="navbar navbar-expand-sm navbar-transparent fixed-top">
        <button id="botao" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            {title === 'light' ? <ToggleIconBlack/> : <ToggleIconWhite/>}
        </button>
        <SwitchContainer data-toggle="tooltip" data-placement="bottom" title={`Modo Lite/Dark`}>
            <Switch 
                className="switch mr-3"
                onChange={props.toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                offHandleColor={'#dc3545'}
                onHandleColor={'#dc3545'}
                handleDiameter={18}
                onColor={shade(0.15, colors.text)}
            />
        </SwitchContainer>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavItem className="nav-link" href="#sobre">Sobre</NavItem>
                </li>
                <li className="nav-item">
                    <NavItem className="nav-link" href="#habilidades">Habilidades</NavItem>    
                </li>
                <li className="nav-item">
                    <NavItem className="nav-link" href="#exp">Projetos</NavItem>
                </li>
                <li className="nav-item">
                    <NavItem className="nav-link" href="#formacao">Formação</NavItem>
                </li>
                <li className="nav-item">
                    <NavItem className="nav-link"  target="_blank" rel="noopener noreferrer"  href="https://docs.google.com/document/d/1VpGOM3U_qlGs62_oVhYHtitOliqcBrUlpBiZ0nDoQaA/edit?usp=sharing">Currículo</NavItem>
                </li>
            </ul>
        </div>
        
    </Nav>
  )

}