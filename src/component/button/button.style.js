import styled from 'styled-components'

const padMap = {
  nimic: "8px 16px",
  
};

const colorMap = {
  funGreen: '#046B2D',
  milanoRed: '#C62A08',
  transparent: 'transparent',
}

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: ${({ padi }) => padMap[padi] };
  background-color: ${({ color }) => color? colorMap[color] : "yellow"};
  color: ${({ textcol }) => textcol};
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

