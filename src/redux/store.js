import { configureStore } from '@reduxjs/toolkit'
import contentSlice from './features/contentSlice.js';

export default configureStore({
  reducer: {
    cmsContent: contentSlice,
  },
})