import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../app.reducers';
import { Observable } from 'rxjs/Observable';
import { MockedData } from '../api.services';
import { GET_DATA } from './home.actions';
import * as fromRoot from '../app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data$: Observable<any>;

  constructor(private store: Store<State>) {
    this.data$ = store.select(fromRoot.getLoadedData);
  }

  ngOnInit() {
  }

  loadData(e) {
    this.store.dispatch({ type: GET_DATA });
  }
}
