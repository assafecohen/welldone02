import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const CategoryCard = styled(Card)`
  width: 100%;
  text-align: center;
  ${({ isactive }) => isactive && `background: #ffcf2259`}
`;
export const LocationCard = styled(Card)`
  width: 100%;
  text-align: center;
  ${({ isactive }) => isactive && `background: #ffcf2259`}
`;
