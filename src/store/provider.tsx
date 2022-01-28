import {ApplicationState} from '@app/types/store';
import React, {createContext, useCallback} from 'react';
import rootReducer from './reducer';

export const initialState: ApplicationState = {
  plans: [],
};

interface StateProviderProps {
  children: any;
}
export interface IStateContext {
  state: ApplicationState;
  dispatch: ({type}: {type: string}) => void;
}

// A basic empty context object.
export const GlobalStore = createContext({} as IStateContext);

const asyncer = (dispatch: any, state: ApplicationState) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

export function StateProvider(props: StateProviderProps) {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispatch = useCallback(asyncer(dispatchBase, state), []);

  return (
    <GlobalStore.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalStore.Provider>
  );
}
