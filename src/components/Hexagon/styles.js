import styled from 'styled-components'

export const Container = styled.div` 
    height: 4em;
    margin: 3.4641em 0;
    position: relative;
    width: 6.9282em;
    background-color: ${props => props.theme.colors.elements};
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:before {
        border-right:3.4641em solid transparent;
        border-bottom:2em solid ${props => props.theme.colors.elements};
        border-left:3.4641em solid transparent;
        content: '';
        height:0;
        left: 0;
        position: absolute;
        right: 0;
        top: -2em;
        width: 0;
        
    }
    &:after {
        border-top:2em solid ${props => props.theme.colors.elements};
        border-right:3.4641em solid transparent;
        border-left:3.4641em solid transparent;
        bottom:-2em;
        content: '';
        height:0;
        left: 0;
        position: absolute;
        right: 0;
        width:0;
    }
    i {
        color: white;
        font-size: 50px;
    }
` 
