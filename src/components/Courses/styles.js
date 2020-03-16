import styled, { keyframes } from 'styled-components';

export const progressBarAnimated = keyframes`
  0% {
    width: 0;
  }
  100% {
   width: ${props => props.percent};
  }
`
export const Container = styled.div`
    width: 360px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 30px;
    background-image: url(${props => props.Image});
    background-size: cover;
    border-radius: 10px;
    border: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 10px -4px;
    margin-bottom: 30px;
    & img{
        width: 124px;
        padding-bottom:20px;
    }
    & .progress {
        width: 100%;
        -webkit-box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.04);
        -moz-box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.04);
        box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.04);
    }

    & .bg-prime{
        background-image: linear-gradient( 135deg, #49C628 10%, #70F570 100%);

    }
    & .progress-bar{
        animation: 4s ${progressBarAnimated};
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background-color: #007bff;
        transition: width 0.6s ease;
    }
    & p{
        font-size: 25px;
    }
    & h5{
        font-weight: bold;
    }
    & h5, p{
        color: white;
    }
`;

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    width: 100%;

    & > a{
        background-color: #fff;
        padding: 0.375rem 0.75rem;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 10px -4px;
        color: #28C76F;
        border-radius: 2px;
    }
    & > a:hover{
        text-decoration: none;
        opacity: 0.9;
    }
`

export const Percentage = styled.span`
    position: relative;

`