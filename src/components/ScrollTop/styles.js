import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    scroll-behavior: smooth;
    padding: 15px;
    
    & i{
        color: #EA5455;
        font-size: 25px;
    }
    & i:hover{
       color: #EC3237;
    }
`;
