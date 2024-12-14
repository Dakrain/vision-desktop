export type ApiErrorDetail = {
  code: string;
  message: string;
  field?: string;
};

export type AppError = {
  code: string;
  message: string;
  details?: ApiErrorDetail[];
};

export type BaseResponse<T> = {
  data?: T;
  error?: AppError;
};

export type ApiResponse<T> = Promise<BaseResponse<T>>;
