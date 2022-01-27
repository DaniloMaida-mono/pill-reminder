import {FormAction, FormState} from '@app/types/form';

export const reducer = (state: FormState, action: FormAction): FormState => {
  if (action.type === 'SET_PILLS_NAME') {
    return {...state, name: action.payload};
  }
  if (action.type === 'SET_PILLS_QUANTITY') {
    return {...state, qty: action.payload};
  }
  if (action.type === 'SET_PILLS_DAYS') {
    return {...state, days: action.payload};
  }
  if (action.type === 'SET_PILLS_EATING_TIME') {
    return {...state, eatingTime: action.payload};
  }

  return {...state};
};
