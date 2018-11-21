import React, { Component } from 'react';
import { ActionSheetIOS, Button, Text, View } from 'react-native';
import { Container } from './Layout';
import { ContextConsumer } from './Context';

const options = ['Cancel', 'Save', 'Delete']

class ActionSheetExample extends Component {
  state = {
    optionSelected: '',
  }

  toggleVisible = () => {
    // console.log('TOGGLING VISIBLE');
    // const { actionSheetVisible } = this.state;
    // this.setState({ actionSheetVisible: !actionSheetVisible });

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
        <ContextConsumer>
          {(context => {
            console.log(context);
          return (
            <View></View>
          )
          })}
        </ContextConsumer>
        <Button title="Show ActionSheet" onPress={this.toggleVisible} />
        <View style={{ marginTop: 20 }}>
          <Text>Selected: {optionSelected || 'None' }</Text>
        </View>
      </Container>
    );
  }
}

export default ActionSheetExample;