import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TextInputExample from '../../components/TextInputExample';

it('renders correctly', () => {
  const tree = renderer.create(<TextInputExample />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('accepts user input', () => {

})