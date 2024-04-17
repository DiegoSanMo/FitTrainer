import styled from '@emotion/styled';
import { Container } from '@mui/material';
import Link from '@mui/material/Link';

export const ImageContainer = styled('img')`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const TextContainer = styled(Container)`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, 85%); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`

export const LinkContainer = styled(Link)`
font-size: 1.2rem;
cursor: pointer;
`;