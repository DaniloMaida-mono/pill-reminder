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
    case PlansActionTypes.editPlan: {
      const {id, data} = action.payload;
      let plan = state.find(el => el.id === id);
      return plan ? [...state.filter(el => el.id !== id), data] : [...state];
    }
    default:
      return state;
  }
};
