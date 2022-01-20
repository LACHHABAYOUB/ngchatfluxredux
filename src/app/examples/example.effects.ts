import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import { ExampleActionTypes, SaveExample, SaveExampleFailure } from './example.actions';
import { Action } from '@ngrx/store';
import { ExampleService } from './example.service';
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class ExampleEffects {

  
  constructor(private actions$: Actions,
    private service: ExampleService) { }

    @Effect()
    registrationSave$: Observable<Action> = this.actions$.pipe(
      ofType(ExampleActionTypes.SaveExample),
      mergeMap((action: SaveExample) =>
        this.service.saveExample(action.payload).pipe(
          map(data => ({
            type: ExampleActionTypes.LoadExamplesSuccess,
            payload: data
          })),
          catchError((e) => of(new SaveExampleFailure(e)))
        )
      )
    );
}
