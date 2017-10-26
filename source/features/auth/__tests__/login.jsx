import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../login';
import { Form, AlertDanger } from '../../../ui';
import locale from '../../../locale-default';

describe('features/auth/login', () => {
  const handleSubmit = jest.fn();

  it('should render Redirect component', () => {
    const wrapper = shallow(<Login auth={{loggedIn: true}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render login form', () => {
    const wrapper = shallow(
      <Login
        handleSubmit={handleSubmit}
        auth={{loggedIn: true}}
        locale={locale} />);

    const formComponent = wrapper.find(Form);

    expect(wrapper).toMatchSnapshot();
    expect(formComponent).toBeTruthy();
  });

  it('should render alert component', () => {
    const wrapper = shallow(
      <Login
        handleSubmit={handleSubmit}
        auth={{loggedIn: true, logInError: 'error'}}
        locale={locale} />);

    const alertComponent = wrapper.find(AlertDanger);

    expect(wrapper).toMatchSnapshot();
    expect(alertComponent).toBeTruthy();
  });

  it('should handle submit form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(
      <Login
        handleSubmit={handleSubmit}
        auth={{loggedIn: false}}
        locale={locale} />);

    wrapper.find(Form).simulate('submit');

    expect(handleSubmit).toBeCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
