import React from 'react';
import {GlobalStore, IStateContext} from './store/provider';

// A higher order component to inject the state and dispatcher
export default function withApplicationState(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <GlobalStore.Consumer>
        {(context: IStateContext) => (
          <Component
            {...props}
            state={context.state}
            dispatch={context.dispatch}
          />
        )}
      </GlobalStore.Consumer>
    );
  };
}
