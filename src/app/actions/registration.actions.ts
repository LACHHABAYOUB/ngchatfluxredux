import { Action } from '@ngrx/store';
import { RegistrationChatter } from '../models/registration.model';

export enum RegistrationActionTypes {
  LoadRegistration = '[Registration] Load Registration',
  LoadRegistrationSuccess = '[Registration] Load Registration Success',
  SaveRegistration = '[Registration] Save Registration',
  SaveRegistrationSuccess = '[Registration] Save Registration Sucess'
}

export class LoadRegistration implements Action {
  readonly type = RegistrationActionTypes.LoadRegistration;
  constructor() {}
}

export class LoadRegistrationSuccess implements Action {
  readonly type = RegistrationActionTypes.LoadRegistrationSuccess;
  constructor(public payload: RegistrationChatter) {}
}

export class SaveRegistration implements Action {
  readonly type = RegistrationActionTypes.SaveRegistration;
  constructor(public payload: RegistrationChatter) {}
}

export class SaveRegistrationSuccess implements Action {
  readonly type = RegistrationActionTypes.SaveRegistrationSuccess;
  constructor(public payload: RegistrationChatter) {}
}

export type RegistrationActions = LoadRegistration | SaveRegistration | LoadRegistrationSuccess | SaveRegistrationSuccess ;
