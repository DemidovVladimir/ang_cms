import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { Params, RouterStateSnapshot } from '@angular/router';
import { environment } from '../environments/environment';
import * as fromHome from './home/home.reducer';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router?: fromRouter.RouterReducerState<RouterStateSnapshot>;
  home: fromHome.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  home: fromHome.reducer
};

export const initialState = {
  home: fromHome.initialState
};

export const logger = (reducer: ActionReducer<State>): ActionReducer<State> => {
  return (state: State, action: Action): State => {
    return reducer(state, action);
  };
};

export const getRouterState = (state: State) => state.router;
export const getHomeState = (state: State) => state.home;
export const getRouterPath = createSelector(getRouterState, (router: fromRouter.RouterReducerState) => router.state.url);
export const getFetchingData = createSelector(getHomeState, fromHome.getFetchingDataStatus);
export const getLoadedData = createSelector(getHomeState, fromHome.getLoadedData);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze]: [];
