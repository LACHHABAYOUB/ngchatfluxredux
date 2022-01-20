import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExamplePojo } from './example.reducer';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  saveExample(a): Observable<ExamplePojo> {
    return of({name: ''});
  }
}
