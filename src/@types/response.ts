export interface AppResponseType<T> {
  status: number;
  statusText: string;
  data?: T;
  errors?: any;
}
