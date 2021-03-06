import React, { Component } from 'react';

const initialValue = {};

export const AppContext = React.createContext(initialValue);

class ContextProvider extends Component {
  state = {
    user: {},
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          // setState: this.setState
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const ContextConsumer = AppContext.Consumer;

export default ContextProvider;