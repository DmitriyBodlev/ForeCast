import React from 'react';
import { shallow } from 'enzyme';
import { ResetPassword } from '../reset-password';
import { Form } from '../../../ui';
import locale from '../../../locale-default';

describe('features/auth/reset-password', () => {
  const handleSubmit = jest.fn();

  it('should render reset password form', () => {
    const wrapper = shallow(<ResetPassword handleSubmit={handleSubmit} locale={locale} />);

    const formComponent = wrapper.find(Form);

    expect(wrapper).toMatchSnapshot();
    expect(formComponent).toBeTruthy();
  });

  it('should handle submit form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<ResetPassword handleSubmit={handleSubmit} locale={locale} />);

    wrapper.find(Form).simulate('submit');

    expect(handleSubmit).toBeCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
