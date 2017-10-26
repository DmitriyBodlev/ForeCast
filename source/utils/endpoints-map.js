// add all endpoints here

const endpointsMap = {
  login: 'oauth/token',
  forgot: 'password/reset',
  reset: 'password/save',
  checkToken: 'oauth/check_token',
  listUsers: '/user/list',
  createUser: '/user',
  listInternalTypes: '/internalType/list',
  listCustomerTypes: '/customerType/list',
  menus: '/menu',
  getLocaleEndpoint: (lng: string) => `/i18/${lng}`,
  getMenuEndpoint: (lng: string) => `/menu/${lng}`,
  getUserSettingsEndpoint: (guid: string) => `/users_profile/bag/${guid}`,
  getRemoveUserEndpoint: (guid: string) => `/user/${guid}`,
};

export default endpointsMap;
