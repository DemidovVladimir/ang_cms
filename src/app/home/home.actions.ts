import { Action } from '@ngrx/store';
import { MockedData } from '../api.services';

export const GET_DATA = '[home] Load data';
export const GET_DATA_SUCCESS = '[home] Loaded data';

export class GetDataAction implements Action {
  readonly type = GET_DATA;
}

export class GetDataSuccessAction implements Action {
  readonly type = GET_DATA_SUCCESS;

  constructor(public payload: any) {

  }
}

export type HomeActions = GetDataAction | GetDataSuccessAction;
