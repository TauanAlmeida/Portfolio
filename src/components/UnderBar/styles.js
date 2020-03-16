import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: ${props => props.color};
    border-radius: 3px;
    margin: 0 auto;
`