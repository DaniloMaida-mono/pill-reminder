import {FormState} from './form';

export interface ApplicationState {
  plans: FormState[];
}

export interface StateAction {
  type: string;
  payload: any;
}

export enum PlansActionTypes {
  addPlan = 'ADD_PLAN',
}
