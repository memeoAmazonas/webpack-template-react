import { configureStore, combineReducers } from '@reduxjs/toolkit';
import language from './slice/language';
import theme from './slice/theme';
import header from './slice/menu';
import user from './slice/user';

const combinedReducer = combineReducers({
  header,
  language,
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
