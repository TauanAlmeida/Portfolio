import React,{ useContext} from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components'
import UnderBar from '../../components/UnderBar/UnderBar'
import ProgressBar from '../../components/ProgressBar//ProgressBar'


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
          <div className="row py-4">
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={80}
                  tecName="HTML5"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={80}
                  tecName="CSS3"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
              <ProgressBar
                  percentage={70}
                  tecName="Javascript"
                  animate="loadProgress"
              />
              </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={70}
                  tecName="ReactJS"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={40}
                  tecName="VueJS"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
              <ProgressBar
                  percentage={70}
                  tecName="NodeJS"
                  animate="loadProgress"
              />
              </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={50}
                  tecName="Laravel"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={40}
                  tecName="mongodb"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
              <ProgressBar
                  percentage={70}
                  tecName="Git"
                  animate="loadProgress"
              />
              </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={80}
                  tecName="Figma"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
                <ProgressBar
                  percentage={90}
                  tecName="Bootstrap"
                  animate="loadProgress"
                />
            </div>
            <div className="col col-lg-3">
              <ProgressBar
                  percentage={70}
                  tecName="Vscode"
                  animate="loadProgress"
              />
              </div>
        </div>
        </div>
    </Container>
  );
}
