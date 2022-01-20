import { Action, createSelector } from '@ngrx/store';
import { BaseModel } from '../models/base.model';
import { ExampleActions, ExampleActionTypes } from './example.actions';


export interface State {
  example: ExamplePojo
}

export const initialState: State = {
  example: { name: '', isError: false, isLoading: false, isSuccess: false }
};

export function reducer(state = initialState, action: ExampleActions): State {
  switch (action.type) {

    case ExampleActionTypes.LoadExamples: {
      return {
        ...state,
        example: {
          ...state.example,
          isError: false,
          isLoading: true,
          isSuccess: false
        }
      }
    }

    case ExampleActionTypes.LoadExamplesSuccess: {
      return {
        ...state,
        example: {
          ...action.payload,
          isError: false,
          isLoading: false,
          isSuccess: true
        }
      }
    }


    case ExampleActionTypes.LoadExamplesFailure: {
      console.error('Error Loading', action.payload);
      return {
        ...state,
        example: {
          ...state.example,
          isError: true,
          isLoading: false,
          isSuccess: false
        }
      }
    }

    default:
      return state;
  }
}

export const getExample = (state: State) => state.example;
export const getExampleState: ExamplePojo = createSelector(getExample)

export interface ExamplePojo extends BaseModel {
  name: string
}