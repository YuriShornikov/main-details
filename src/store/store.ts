import { configureStore } from '@reduxjs/toolkit';
import { servicesReducer } from '../redux/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../epics/epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
