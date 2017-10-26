import App from './components/app';
import Login from './features/auth/login';
import ResetPassword from './features/auth/reset-password';
import NewPassword from './features/auth/new-password';
import MainLayouts from './components/main-layouts';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/reset_password',
    component: ResetPassword,
  },
  {
    path: '/new_password',
    component: NewPassword,
  },
  {
    path: '/',
    exact: true,
    component: App,
    routes: [
      {
        path: '/',
        component: MainLayouts,
      },
    ],
  },
];
