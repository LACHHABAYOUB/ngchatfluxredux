import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExampleEffects } from './example.effects';

describe('ExampleEffects', () => {
  let actions$: Observable<any>;
  let effects: ExampleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExampleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ExampleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
