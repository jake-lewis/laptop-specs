import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import specReducer from '../features/specs/specSlice';

export const store = configureStore({
  reducer: {
    laptopSpecs: specReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
