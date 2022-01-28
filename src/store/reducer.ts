import {ApplicationState, StateAction} from '@app/types/store';
import {plansReducer} from './plans';

export default function rootReducer(
  state: ApplicationState,
  action: StateAction
): ApplicationState {
  const {plans} = state;

  return {
    plans: plansReducer(plans, action),
  };
}
