import React, { useContext, useState, useEffect } from 'react';
import { Container, IconSocial } from './styles';
import UnderBar from '../UnderBar/UnderBar'
import { ThemeContext } from 'styled-components'

const midia = {
    facebook: 'http://wwww.facebook.com/tauan.face',
    instagram: 'https://www.instagram.com/tauan.almd/',
    linkedin: 'https://www.linkedin.com/in/tauan-almeida-1a508411b/',
    github: 'https://github.com/tauanAlmeida'
}

export default function Footer() {

    const [year, setYear] = useState(2019)
    const { colors } = useContext(ThemeContext)

    const handleDate = () => {
        return setYear(new Date().getFullYear())
    }

    useEffect(() => {
        handleDate()
    }, [])
    
  return (
    <Container>
            <div className="social-work"> 
                <ul className="navbar-nav">
                    <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Facebook">
                        <a className="nav-link"  target="_blank" rel="noopener noreferrer" href={midia.facebook}><IconSocial className="fab fa-facebook"></IconSocial></a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Instagram">
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.instagram}><IconSocial className="fab fa-instagram"></IconSocial></a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Github">
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.github}><IconSocial className="fab fa-github"></IconSocial></a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Linkedin">
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.linkedin}><IconSocial className="fab fa-linkedin"></IconSocial></a>
                    </li>
                </ul>
            </div>
         <UnderBar
            width={300}
            height={2}
            color={colors.elements}
            animate="slideInLeft"
        />
            <div className="mt-2 copyright">
                <span>Copyright © <span className="data"> {year}</span> Desenvolvido por Tauan Almeida. Todos os direitos reservados.</span>
            </div>
       
    </Container>
  );
}
