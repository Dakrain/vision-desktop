import { AppError } from '@/shared/network/response';
import { User } from '@/shared/types';

export type StateType = {
  isOffline: boolean;
  user?: User;
  error?: AppError;
};
