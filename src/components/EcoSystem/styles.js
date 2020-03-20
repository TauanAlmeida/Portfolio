import styled, { keyframes} from 'styled-components';

const rotation = keyframes`
    0%   { 
        width: 3.5em;
        height: 3.5em;
    }
    25%  {
        width: 3.6em;
        height: 3.6em;
    }
    50%  {
        width: 3.7em;
        height: 3.7em;
    }

    75%{
        width: 3.6em;
        height: 3.6em;
    }

    100% {
        width: 3.5em;
        height: 3.5em;
    }
`

export const CircleWrapper = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & .icons {
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: 3;
    }
    & .icons a img {
        width: 95%;
        border-radius: 50%;
    }
    
    & .icons a{
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 50%;
        margin: -1.5em;
        border-radius: 50%;
        background-color: white;
        padding: 1px;
        box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025);
    }

    & .icons .circle3, .icons .circle2, .icons .circle1{
        width: 3.5em;
        height: 3.5em;
    }

    & .icons a.circle3:nth-of-type(1) {
        left: 197px;
        right: auto;
        top: auto;
        bottom: 0px;
    }
    & .icons a.circle3:nth-of-type(2) {
        padding: 5px;
        top: 0;
        left: 197px;
        right: auto;
    }
    & .icons a.circle3:nth-of-type(3) {
        top: auto;
        left: 5px;
        right: auto;
        bottom: 142px;
    }
    & .icons a.circle3:nth-of-type(4) {
        top: auto;
        left: 45px;
        right: auto;
        bottom: 70px;
    }
    & .icons a.circle3:nth-of-type(5) {
        top: auto;
        left: auto;
        right: 45px;
        bottom: 70px;
    }

   /*  & .icons a.circle3:nth-of-type(5) > img{
        padding-top: 5px;
        width: 32px;
        border-radius: 0;
    } */

    & .icons a.circle3:nth-of-type(6) {
        top: 50px;
        left: 60px;
        right: auto;
    }

/*     & .icons a.circle3:nth-of-type(6) > img{
        padding-top: 5px;
        width: 32px;
        border-radius: 0;
    } */

    & .icons a.circle3:nth-of-type(7) {
        top: 30px;
        left: auto;
        right: 85px;
    }

    & .icons a.circle2:nth-of-type(1) {
        left: auto;
        right: 74px;
    }

    & .icons a.circle2:nth-of-type(2) {
        top: auto;
        left: 150px;
        right: auto;
        bottom: 90px;
    }

    & .icons a.circle2:nth-of-type(3) {
        left: 75px;
        right: auto;
    }
    & .icons a.circle2:nth-of-type(4) {
        left: auto;
        right: 105px;
        top: 110px;
    }
/* 
    & .icons a.circle2:nth-of-type(3) > img{
        padding-top: 5px;
        width: 32px;
        border-radius: 0;
    } */

    & .icons a.circle1:nth-of-type(1) {
        left: 150px;
    }

/*     & .icons a.circle1:nth-of-type(1) > img{
        padding-top: 1px;
        width: 35px;
        border-radius: 0;
    } */


    & .icons a.circle1:nth-of-type(2) {
        left: 200px;
        top: 150px;
        bottom: auto;
        right: auto;
    }

    & .icons a.circle1:nth-of-type(3) {
        left: 240px;
    }

    & .FoiPorra{
        animation: 1.5s linear 0s infinite normal none running ${rotation};
        animation-timing-function: ease-in-out;
        transition: all 10s linear;
    }
`;
