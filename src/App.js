import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Sobre from './pages/Sobre/Sobre';
import Habilidades from './pages/Habilidades/Habilidades'
import Projetos from './pages/Projetos/Projetos';
import Formacao from './pages/Formacao/Formacao'
import ThemePersistedState from './utils/ThemePersistedState'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'
import { startAnimate } from './utils/IntersectObserver'
import $ from 'jquery'

export default function App() {
    const [theme, setTheme] = ThemePersistedState('theme', light)

    const toggleTheme = ( ) => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    useEffect(()=> {  
        //start tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
        //start animations
        startAnimate();
    },[])

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <ScrollTop/>
            <Home toggleTheme={toggleTheme}/>
            <Sobre/>
            <Habilidades/>
            <Projetos/>
            <Formacao/>
            <Footer/>
        </ThemeProvider>
    )
}
