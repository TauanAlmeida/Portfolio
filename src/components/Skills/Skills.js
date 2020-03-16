import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components'
import { Container, Tecnologias } from './styles'
import UnderBar from '../UnderBar/UnderBar'


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
                            <Tecnologias key={index} className="col" >
                               {data.name === 'Materialize' 
                                ? <img src={data.imgUrl} style={{height: '70px'}} alt="Materialize"/>
                                : <img src={data.imgUrl} alt="Materialize"/>}
                                <span>{data.name}</span>
                            </Tecnologias> 
                        ))
                        }
                        </div>
                </div>
            </Container>
  );
}