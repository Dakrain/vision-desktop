import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '@/store/loading/slice';

const useLoading = () => {
  const dispatch = useDispatch();

  const withLoading = async <T>(promise: Promise<T>): Promise<T> => {
    try {
      dispatch(showLoading());
      return await promise;
    } finally {
      dispatch(hideLoading());
    }
  };

  return { withLoading };
};

export default useLoading;
