import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
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
  
`;

