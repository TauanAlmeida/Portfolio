import styled from 'styled-components'

export const Nav = styled.nav`
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
  padding: 0;
  height: 60px;
  @media screen and (max-width: 600px) {
   & ul {
        height: auto !important;
        background-color: ${props => props.theme.colors.background};
        margin: 0 !important;
    }
   & ul > li > a {
        padding-left: 50px;
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;

    }
  }
  ul{
      height: 60px;
      margin-left: 50px;
  }
  & li {
      display: flex;
  }
  & .switch{
        position: absolute;
        right: 0;
    }
`
export const NavItem = styled.a`
    -webkit-transition: all 100ms linear;
    -moz-transition: all 100ms linear;
    -o-transition: all 100ms linear;
    -ms-transition: all 100ms linear;
    transition: all 100ms linear;
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    &:hover{
        color: ${props => props.theme.colors.secondary};
        transition: color 1s;
        transition: border 1s;
        background: ${props => props.theme.colors.elements};
  }
   
`
export const IconSocial = styled.i`
     font-size: 25px;
     color: ${props => props.theme.colors.text};
`
export const ToggleIconBlack = styled.span`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat 50%;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgb(0,0,0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
`

export const ToggleIconWhite = styled.span`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat 50%;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgb(255,255,255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
`

export const SwitchContainer = styled.div`
    position: absolute;
    right: 0;
`