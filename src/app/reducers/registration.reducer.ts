import { RegistrationActions, RegistrationActionTypes } from '../actions/registration.actions';
import { initialRegistration, RegistrationChatter } from '../models/registration.model';



export interface State {
  registration: RegistrationChatter
}

export const initialState: State = {
  registration: initialRegistration
};

export function reducer(state = initialState, action: RegistrationActions): State {
  switch (action.type) {

    case RegistrationActionTypes.LoadRegistration: {
      return {
        ...state,
        registration: {
          ...state.registration,
          isLoading: true,
          isError: false,
          isSuccess: false
        }
      };
    }

    case RegistrationActionTypes.LoadRegistrationSuccess: {
      console.log('Payload', action.payload)
      return {
        ...state,
        registration: {
          ...action.payload,
          isLoading: false,
          isError: false,
          isSuccess: true
        }
      };
    }

    case RegistrationActionTypes.SaveRegistration: {
      return {
        ...state,
        registration: {
          ...action.payload,
          isLoading: true,
          isError: false,
          isSuccess: false
        }
      };
    }

    case RegistrationActionTypes.SaveRegistrationSuccess: {
      return {
        ...state,
        registration: {
          ...action.payload,
          isLoading: false,
          isError: false,
          isSuccess: true
        }
      };
    }

    default:
      return state;
  }
}

export const getRegistration = (state: State) => state.registration;