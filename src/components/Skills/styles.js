import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  max-height: 310px;
  height: 210px; 
  background-color: ${props => props.theme.colors.cardBackground}; 
  -webkit-box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.04);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.04);
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 5px;
  & h4{
      text-align: center; 
  }
  & img{
    width: 64px;
    height: auto;
    max-height: 70px;
    margin: 0 auto;
    display: block;
    padding-top: 15px;
  }
`;

export const Tecnologias = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0;
    margin-top: 20px;
    & span{
        padding-top: 5px;
        font-size: 18px;
    }
`
