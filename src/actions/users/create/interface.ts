export interface CreateUserAction {
  request: User;
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
