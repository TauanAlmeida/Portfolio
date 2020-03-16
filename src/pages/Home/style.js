import styled from 'styled-components'

export const Container = styled.section`
    background-color: ${props => props.theme.colors.background};
    height: 100vh;
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-weight: 00;
        line-height: 1.2;
    }
    p{
        font-size: 20px;
        max-width: 600px;
        text-align: center;
    }
    span{
        color: #dc3545;
    }
`
export const Button = styled.a`
    color: #fafafa;
    background-color: #dc3545;
    border-color: #dc3545;
    transition: color 0.8s;
    -webkit-transition: all 300ms linear;
    -moz-transition: all 300ms linear;
    -o-transition: all 300ms linear;
    -ms-transition: all 300ms linear;
    transition: all 300ms linear;
    &:hover {
        background-color: #BB1626;
        border-color: #BB1626;
        color: white;
    }
`