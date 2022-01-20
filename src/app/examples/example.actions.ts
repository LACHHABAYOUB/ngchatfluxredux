import { Action } from '@ngrx/store';
import { ExamplePojo } from './example.reducer';

export enum ExampleActionTypes {
  LoadExamples = '[Example] Load Examples',
  LoadExamplesSuccess = '[Example] Load Examples Success',
  LoadExamplesFailure = '[Example] Load Examples Failure',
  SaveExample = '[Example] Save Example',
  SaveExampleSuccess = '[Example] Save Example Success',
  SaveExampleFailure = '[Example] Save Example Failure'
}

export class LoadExamples implements Action {
  readonly type = ExampleActionTypes.LoadExamples;
}

export class LoadExamplesSuccess implements Action {
  readonly type = ExampleActionTypes.LoadExamplesSuccess;
  constructor(public payload: ExamplePojo){}
}

export class LoadExamplesFailure implements Action {
  readonly type = ExampleActionTypes.LoadExamplesFailure;
  constructor(public payload: any){}
}


export class SaveExample implements Action {
  readonly type = ExampleActionTypes.SaveExample;
  constructor(public payload: ExamplePojo){}
}

export class SaveExampleSuccess implements Action {
  readonly type = ExampleActionTypes.SaveExampleSuccess;
  constructor(public payload: ExamplePojo){}
}

export class SaveExampleFailure implements Action {
  readonly type = ExampleActionTypes.SaveExampleFailure;
  constructor(public payload: any){}
}


export type ExampleActions = LoadExamples | LoadExamplesSuccess | LoadExamplesFailure
| SaveExample | SaveExampleSuccess | SaveExampleFailure;
