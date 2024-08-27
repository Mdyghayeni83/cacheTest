export interface GetUserAction {
  response: {
    data: User[];
  };
}
export interface User {
  firstname: string;
  lastname: string;
  id: number;
  phone?: string;
}


