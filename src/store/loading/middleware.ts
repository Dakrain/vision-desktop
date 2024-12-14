import { Middleware } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from './slice';

const loadingMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check if action is async
    if (action.type.endsWith('/pending')) {
      dispatch(showLoading());
    }

    if (
      action.type.endsWith('/fulfilled') ||
      action.type.endsWith('/rejected')
    ) {
      dispatch(hideLoading());
    }

    return next(action);
  };

export default loadingMiddleware;
