import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import axios from 'axios';
import {
  FETCH_SERVICES_REQUEST,
  fetchServicesSuccess,
  fetchServicesFailure,
  FETCH_SERVICE_DETAILS_REQUEST,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from '../actions/actions';

// Запрос на сервис
const fetchServicesEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    mergeMap(() =>
      axios
        .get('http://localhost:7070/api/services')
        .then((response) => fetchServicesSuccess(response.data))
        .catch((error) => fetchServicesFailure(error.message))
    )
  );

// Запрос на детали
const fetchServiceDetailsEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_SERVICE_DETAILS_REQUEST),
    mergeMap((action: any) =>
      axios
        .get(`http://localhost:7070/api/services/${action.payload}`)
        .then((response) => fetchServiceDetailsSuccess(response.data))
        .catch((error) => fetchServiceDetailsFailure(error.message))
    )
  );

// Комбинирование
import { combineEpics } from 'redux-observable';
export const rootEpic = combineEpics(
  fetchServicesEpic,
  fetchServiceDetailsEpic
);
