import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.footer`
  height: 100px;
  background-color: ${props =>  shade(0.1 ,props.theme.colors.background)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  & .social-work ul{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }

  & .navbar-nav > li {
      padding: 0px 20px;
  }
`;

export const IconSocial = styled.i`
     font-size: 25px;
     color: ${props => props.theme.colors.text};
     &:hover{
        color: #EA5455;
     }
`

