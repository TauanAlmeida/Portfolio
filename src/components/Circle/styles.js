import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.scale}px;
    height: ${props => props.scale}px;
    position: absolute;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    z-index: 2;
`;
