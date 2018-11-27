import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Heading } from './TextInputExample';
import { Container } from './Layout';

const Card = styled.View`
  margin: 8px;
  background-color: #FFF;
  border-radius: 6px;
  padding: 8px;
  display: flex;
`;

class StyledComponentExample extends Component {
  render() {
    return (
      <Container>
        <Heading>Styled Component Example</Heading>
        <Card>
          <Text>
            {`const Card = styled.View\`
  margin: 8px;
  background-color: #FFF;
  border-radius: 6px;
  padding: 8px;
  display: flex;
\`;
          `}
          </Text>
        </Card>
      </Container>
    );
  }
}

export default StyledComponentExample;