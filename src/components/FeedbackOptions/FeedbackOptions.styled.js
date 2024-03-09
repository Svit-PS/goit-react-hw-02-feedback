import styled from 'styled-components';

export const Button = styled.button`
  margin-right: 20px;
  height: 50px;
  width: 80px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  &:hover,
  :focus {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
      0px 2px 20px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
