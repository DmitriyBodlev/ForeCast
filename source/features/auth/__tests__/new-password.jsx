import React from 'react';
import { shallow } from 'enzyme';
import { NewPassword } from '../new-password';
import { Form } from '../../../ui';
import locale from '../../../locale-default';

describe('features/auth/new-password', () => {
  const handleSubmit = jest.fn();

  it('should render new password form', () => {
    const wrapper = shallow(
      <NewPassword
        handleSubmit={handleSubmit}
        auth={{createNewPasswordError: null}}
        locale={locale} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render AlertDanger component', () => {
    const wrapper = shallow(
      <NewPassword
        handleSubmit={handleSubmit}
        auth={{createNewPasswordError: 'error'}}
        locale={locale} />);

    const formComponent = wrapper.find(Form);

    expect(wrapper).toMatchSnapshot();
    expect(formComponent).toBeTruthy();
  });

  it('should handle submit form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(
      <NewPassword
        handleSubmit={handleSubmit}
        auth={{createNewPasswordError: null}}
        locale={locale} />);

    wrapper.find(Form).simulate('submit');

    expect(handleSubmit).toBeCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
