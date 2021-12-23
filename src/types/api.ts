export interface ApiResponseType {
  code: number;
  message?: string;
}

export interface ApiErrorResponse {
  errorCode: number;
  errorMsg: string;
}
