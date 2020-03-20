import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components'
import { Container, Tecnologias } from './styles'
import UnderBar from '../UnderBar/UnderBar'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Card(props) {
    const {colors} = useContext(ThemeContext)
  return (
            <Container>
                <div>
                    <h4>{props.title}</h4>
                    <UnderBar
                         width={190}
                         height={5}
                         color={colors.elements}
                    />
                    <div className="row">
                        {
                        props.data.map(( data, index)=> (  
                            <div className="col-4 mt-5">
                                <ProgressBar
                                    percentage={data.percentage}
                                    tecName={data.tecName}
                                    animate="loadProgress"

                                />
                            </div>
                        ))
                        }
                        </div>
                </div>
            </Container>
  );
}