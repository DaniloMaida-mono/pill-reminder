import {FormState} from '@app/types/form';
import {PlansActionTypes, StateAction} from '@app/types/store';

export const plansReducer = (
  state: FormState[],
  action: StateAction
): FormState[] => {
  switch (action.type) {
    case PlansActionTypes.addPlan: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
