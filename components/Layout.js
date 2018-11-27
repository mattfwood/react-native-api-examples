import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled.View`
  margin: 15px;
`;

export const Row = styled.View`
  margin-bottom: 20px;
  display: flex;
  /* flex-direction: row; */
`;

export const FlexBetweenRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;