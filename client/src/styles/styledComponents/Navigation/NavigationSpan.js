import styled from 'styled-components';

export const NavigationSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${({ isActive }) => (isActive ? '#1af1f1 ' : 'white')};
`;
