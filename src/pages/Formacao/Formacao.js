import React, { useContext } from 'react';
import { Container } from './styles';
import UnderBar from '../../components/UnderBar/UnderBar'
import Courses from '../../components/Courses/Courses'
import Course1 from '../../assets/course1.svg'
import Course2 from '../../assets/course2.svg'
import Course4 from '../../assets/course4.svg'
import { ThemeContext } from 'styled-components'

export default function Formacao(props) {
    const {colors} = useContext(ThemeContext)

  return (
    <Container id="formacao">
        <h1 data-animate="slideInLeft">Formação</h1>
        <UnderBar
            width={100}
            height={5}
            color={colors.elements}
            animate="slideInLeft"
        />
        <div className="container mt-5">
            <div className="row">
                <div className="col col-lg-4">
                    <Courses
                        percent={80}
                        title="Graduação"
                        desc={`Licenciatura em computação`}
                        Image={Course2}
                        link="https://www.ifsertao-pe.edu.br/index.php/cursos/superiores/petrolina/licenciatura-em-computacao"
                    />
                </div>
                <div className="col col-lg-4">
                    <Courses
                        percent={100}
                        title="Curso"
                        desc={`Descomplicando API em Laravel`}
                        Image={Course1}
                        link="https://www.udemy.com/course/descomplicando-apis-com-laravel/"
                    />
                </div>
                <div className="col col-lg-4">
                    <Courses
                        percent={90}
                        title="Curso"
                        desc={`Curso Web Moderno`}
                        Image={Course4}
                        link="https://www.udemy.com/course/curso-web/"
                    />
                </div>
                <div className="col col-lg-4">
                    <Courses
                        percent={90}
                        title="Curso"
                        desc={`Desenvolvendo APPs Nativas com React Native`}
                        Image={Course4}
                        link="https://www.udemy.com/course/curso-web/"
                    />
                </div>
            </div>
        </div>
    </Container>
  );
}
