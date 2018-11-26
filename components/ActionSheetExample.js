import React, { Component } from 'react';
import { ActionSheetIOS, Button, Text, View } from 'react-native';
import { Container } from './Layout';

const options = ['Cancel', 'Save', 'Delete'];

class ActionSheetExample extends Component {
  state = {
    optionSelected: '',
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options,
      destructiveButtonindex: 1,
      cancelButtonIndex: 0,
    }, (selectedButtonIndex) => {
      console.log(selectedButtonIndex);
      this.setState({ optionSelected: options[selectedButtonIndex] });
    })
  }

  render() {
    const { optionSelected } = this.state;
    return (
      <Container>
        <Button title="Show ActionSheet" onPress={this.showActionSheet} />
        <View style={{ marginTop: 20 }}>
          <Text>Selected: {optionSelected || 'None' }</Text>
        </View>
      </Container>
    );
  }
}

export default ActionSheetExample;