import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100%;
    text-align: center;
    padding: 0em 3.2em;

`
export const ColAlignCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Img = styled.img`
    width: 250px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 6px 10px -4px;
    margin: 10px;
`
export const Quote = styled.p`
    margin-top: 10px;
    font-size: 16px;
    text-align: justify;
`
export const Description = styled.div`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    text-align: left;
    i{
        color: ${props => props.theme.colors.elements};
        padding: 30px 15px 0px 0px;
    }
` 