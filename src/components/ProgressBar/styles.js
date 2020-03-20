import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  line-height: 150px;
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;
 margin-bottom: 20px;
&:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 7px solid ${props => props.theme.colors.cardBackground};
  position: absolute;
  top: 0;
  left: 0;
}
& > span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}
& .progress-left {
  left: 0;
}
& .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 7px;
  border-style: solid;
  position: absolute;
  top: 0;
  border-color: #bd2130;
}
& .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
  
}
& .progress-right {
  right: 0;
}
& .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 75px;
  border-bottom-left-radius: 75px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  
}
& .progress-value {
  display: flex;
  border-radius: 50%;
  font-size: 36px;
  text-align: center;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 300;

}

& .progress-value > img {
  position: absolute;
  width: 70%;
  opacity: 0.3;
  filter: grayscale(100%);
  z-index: 0;
}
& .progress-value div {
  margin-top: 10px;
  z-index: 2;
}
& .progress-value span {
  font-size: 12px;
  text-transform: uppercase;
}

/* This for loop creates the 	necessary css animation names 
Due to the split circle of progress-left and progress right, we must use the animations on each side. 
*/
&[data-percentage="10"] .progress-right .loadProgress {
  animation: loading-1 1.5s linear forwards;
}
&[data-percentage="10"] .progress-left .loadProgress {
  animation: 0;
}

&[data-percentage="20"] .progress-right .loadProgress {
  animation: loading-2 1.5s linear forwards;
}
&[data-percentage="20"] .progress-left .loadProgress {
  animation: 0;
}

&[data-percentage="30"] .progress-right .loadProgress {
  animation: loading-3 1.5s linear forwards;
}
&[data-percentage="30"] .progress-left .loadProgress {
  animation: 0;
}

&[data-percentage="40"] .progress-right .loadProgress {
  animation: loading-4 1.5s linear forwards;
}
&[data-percentage="40"] .progress-left .loadProgress {
  animation: 0;
}

&[data-percentage="50"] .progress-right .loadProgress {
  animation: loading-5 1.5s linear forwards;
}
&[data-percentage="50"] .progress-left .loadProgress {
  animation: 0;
}

&[data-percentage="60"] .progress-right .loadProgress {
  animation: loading-5 1.5s linear forwards;
}
&[data-percentage="60"] .progress-left .loadProgress {
  animation: loading-1 1.5s linear forwards 1.5s;
}

&[data-percentage="70"] .progress-right .loadProgress {
  animation: loading-5 1.5s linear forwards;
}
&[data-percentage="70"] .progress-left .loadProgress {
  animation: loading-2 1.5s linear forwards 1.5s;
}

&[data-percentage="80"] .progress-right .loadProgress {
  animation: loading-5 1.5s linear forwards;
}
&[data-percentage="80"] .progress-left .loadProgress {
  animation: loading-3 1.5s linear forwards 1.5s;
}

&[data-percentage="90"] .progress-right .loadProgress {
  animation: loading-5 1.5s linear forwards;
}
&[data-percentage="90"] .progress-left .loadProgress {
  animation: loading-4 1.5s linear forwards 1.5s;
}

&[data-percentage="100"] .progress-right .loadProgress {
  animation: loading-5 1.5s linear forwards;
}
&[data-percentage="100"] .progress-left .loadProgress {
  animation: loading-5 1.5s linear forwards 1.5s;
}

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(36);
    transform: rotate(36deg);
  }
}
@keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(72);
    transform: rotate(72deg);
  }
}
@keyframes loading-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(108);
    transform: rotate(108deg);
  }
}
@keyframes loading-4 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(144);
    transform: rotate(144deg);
  }
}
@keyframes loading-5 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180);
    transform: rotate(180deg);
  }
}
`