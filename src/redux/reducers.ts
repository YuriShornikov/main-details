import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
} from '../actions/actions';

const initialState = {
  services: [],
  serviceDetails: null,
  error: null,
  loading: false,
};

export const servicesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SERVICES_SUCCESS:
      return { ...state, loading: false, services: action.payload };
    case FETCH_SERVICES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_SERVICE_DETAILS_REQUEST:
      return { ...state, loading: true, serviceDetails: null, error: null };
    case FETCH_SERVICE_DETAILS_SUCCESS:
      return { ...state, loading: false, serviceDetails: action.payload };
    case FETCH_SERVICE_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
