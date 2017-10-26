// add all routes here

// TODO, add all string routes here
const routesMap = {
  homePage: '/',
  loginPage: '/login',
  getUserSettingsRoute: (guid: string) => `/users/${guid}/settings`,
  usersPage: '/users/list',
  createUserPage: '/users/new',
};

export default routesMap;
