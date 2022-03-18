import { configureStore, combineReducers } from '@reduxjs/toolkit';

import header from './slice/header';
import language from './slice/language';
import query from './slice/query';
import theme from './slice/theme';
import user from './slice/user';

const combinedReducer = combineReducers({
  header,
  language,
  query,
  theme,
  user,
});
const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    state = { theme: state.theme, language: state.language };
  }
  return combinedReducer(state, action);
};
export default configureStore({
  reducer: rootReducer,
});
