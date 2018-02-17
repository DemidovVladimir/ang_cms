import { MockedData } from '../api.services';
import * as actions from './home.actions';

export interface State {
  fetchingData?: boolean;
  loadedData?: MockedData | null;
}

export const initialState: State = {
  fetchingData: false,
  loadedData: null
};

export const reducer = (state = initialState, action: actions.HomeActions): State => {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        fetchingData: true
      }

    case actions.GET_DATA_SUCCESS:
      return {
        ...state,
        loadedData: action.payload
      }
    default:
      return state;
  }
}

export const getFetchingDataStatus = (state: State) => state.fetchingData;
export const getLoadedData = (state: State) => state.loadedData;
