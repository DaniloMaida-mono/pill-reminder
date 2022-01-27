import {FoodItem, FormState} from '@app/types/form';
import LunchIcon from '@assets/img/lunch.svg';
export const initialFormState: FormState = {
  name: '',
  qty: undefined,
  days: undefined,
  eatingTime: -1,
};

export const foodItems: FoodItem[] = [
  {
    icon: LunchIcon,
    value: 0,
  },
  {
    icon: LunchIcon,
    value: 1,
  },
  {
    icon: LunchIcon,
    value: 2,
  },
];
