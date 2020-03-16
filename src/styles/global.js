import { createGlobalStyle, keyframes } from 'styled-components'
import { bounce, slideInRight, slideInLeft, fadeInUp } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const slideInRightAnimation = keyframes `${slideInRight}`
const slideInLeftAnimation = keyframes `${slideInLeft}`
const fadeInUpAnimation = keyframes `${fadeInUp}`

export default createGlobalStyle`

.fadeInUp{
  animation: 1s ${fadeInUpAnimation};
}

.bounce{
    animation: 1s ${bounceAnimation};
}

.slideInRight{
  animation: 1s ${slideInRightAnimation}
}

.slideInLeft{
  animation: 1s ${slideInLeftAnimation}
}
 
body{
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
}

p{
    font-size: 18px;
    color: ${props => props.theme.colors.text};
}

.card-exp-width{
  width: 350px;
  height: 234px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.04);
  -moz-box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.04);
  box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.04);
}
.card-text{
    text-align: justify;
}

.image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    height: 232px;
  }
  
  .middle {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #f4f4f7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .card-exp-width:hover .image {
    opacity: 0.1;
  }
  
  .card-exp-width:hover .middle {
    opacity: 1;
  }
  
  .text {
    color: #5f6368;
    font-size: 16px;
    padding: 16px 32px;
    text-align: center;
  }

  .exp-content h1 {
    color: black;
  }

  @media screen and (max-width: 600px) {
    .text {
      color: #5f6368;
      font-size: 12px;
      padding: 8px 16px;
      text-align: center;
    }
  
  }

    
`