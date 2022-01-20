import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { RegistrationActionTypes, SaveRegistration } from '../actions/registration.actions';
import { RegisterService } from '../services/register.service';



@Injectable()
export class RegistrationEffects {

  constructor(private actions$: Actions,
    private service: RegisterService) { }

  @Effect()
  registration$: Observable<Action> = this.actions$.pipe(
    ofType(RegistrationActionTypes.LoadRegistration),
    mergeMap(action =>
      this.service.getRegistration().pipe(
        map(data => ({
          type: RegistrationActionTypes.LoadRegistrationSuccess,
          payload: data
        }))
      )
    )
  );

  @Effect()
  registrationSave$: Observable<Action> = this.actions$.pipe(
    ofType(RegistrationActionTypes.SaveRegistration),
    mergeMap((action: SaveRegistration) =>
      this.service.updateRegistration(action.payload).pipe(
        map(data => ({
          type: RegistrationActionTypes.SaveRegistrationSuccess,
          payload: data
        }))
      )
    )
  );

}
