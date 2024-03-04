import { configureStore } from '@reduxjs/toolkit';
import locationSlice from '../features/marker/locationSlice';

export default configureStore({
  reducer: {
    counter: locationSlice,
  },
});
