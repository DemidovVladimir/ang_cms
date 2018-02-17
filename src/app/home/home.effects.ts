import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiServices } from '../api.services';
import * as homeActions from './home.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../app.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators';

@Injectable()
export class HomeEffects {
  @Effect() getData$: Observable<ActionWithPayload<any>> = this.actions$
    .ofType(homeActions.GET_DATA)
    .switchMap(() => {
      return this.apiService.httpGetData()
        .map(data => {
          return {type: homeActions.GET_DATA_SUCCESS, payload: data};
        });
    });

  // @Effect({dispatch: false}) check$ = this.actions$.pipe(
  //   ofType(homeActions.GET_DATA_SUCCESS),
  //   tap(() => {
  //     console.log('checking...');
  //   })
  // )

  constructor(private actions$: Actions,
              private apiService: ApiServices) {
  }
}
