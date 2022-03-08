import { configureStore } from '@reduxjs/toolkit';
import language from './slice/language';
import theme from './slice/theme';
import header from './slice/menu';

export default configureStore({
  reducer: {
    header,
    language,
    theme,

  },
});
