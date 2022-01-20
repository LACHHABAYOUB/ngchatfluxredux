import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers';
import { LoadExamples, SaveExample } from '../example.actions';
import { ExamplePojo, getExampleState } from '../example.reducer';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {

    const ex: Observable<ExamplePojo> = 
      this.store.pipe(select(getExampleState));

      ex.subscribe();

      this.store.dispatch(new LoadExamples());

  }

  handleOnSave(myExample: ExamplePojo) {
    this.store.dispatch(new SaveExample(myExample));
  }

}
