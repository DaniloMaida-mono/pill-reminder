import {SvgProps} from 'react-native-svg';

export type FormState = {
  name: string;
  qty?: number;
  days?: number;
  eatingTime: number;
};

export enum ActionTypes {
  setPillName = 'SET_PILLS_NAME',
  setPillsQuantity = 'SET_PILLS_QUANTITY',
  setPillsDay = 'SET_PILLS_DAYS',
  setPillsEatingTime = 'SET_PILLS_EATING_TIME',
}

export interface FormAction {
  type: ActionTypes;
  payload: any;
}

export type FoodItem = {
  icon: React.FC<SvgProps>;
  value: number;
};
