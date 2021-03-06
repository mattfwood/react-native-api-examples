import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components/native';
import { Container } from './Layout';

export const ExampleInput = styled.TextInput`
  background-color: #FFF;
  padding: 8px;
`;

export const Heading = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
`;

class TextInputExample extends Component {
  state = {
    value: '',
  }

  // onChangeText returns the value
  // event.target.value isn't needed
  onChange = (value) => {
    console.log('CHANGING INPUT');
    console.log(value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Heading>{`<TextInput />`}</Heading>
        <ExampleInput onChangeText={this.onChange} />
        <Text>Value: {value}</Text>
      </Container>
    );
  }
}

export default TextInputExample;