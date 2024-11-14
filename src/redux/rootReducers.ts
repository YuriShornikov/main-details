import { combineReducers } from 'redux';
import { servicesReducer } from '../redux/reducers';

const rootReducer = combineReducers({
  service: servicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
