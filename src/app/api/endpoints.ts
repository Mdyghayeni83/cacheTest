const baseRoute = process.env.API_HOST ?? "http://localhost:3000/api/";

function makeRoute(route: string, param?: string): string {
  if (param) {
    return baseRoute + route + param + "/";
  }
  return baseRoute + route;
}

export const API_ROUTES = {
  users: {
    get: makeRoute("users/get/"),
    user: {
      create: makeRoute("users/create/"),
      delete: (id: string) => makeRoute("users/user/delete/", id),
      get: (id: string) => makeRoute("users/get-user-by-id/", id),
    },
  },
};
