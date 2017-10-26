import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, pure } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { reduxForm, Field } from 'redux-form';
import { makeSelectLocale } from '../locales/selectors';
import { makeSelectAuthData } from '../auth/selectors';
import { required } from '../../utils/validator';
import { renderLogoLink } from '../../utils/global-helpers';
import { renderInputGroup, AlertDanger } from '../../ui';
import { sendCreateNewPasswordRequest } from './actions';
import {
  FormWrapper,
  FormContainer,
  FormLogo,
  StyledForm,
  StyledFormTitle,
  StyledButton } from './ui';

const qs = require('qs');

export const enhance = compose(
  reduxForm({
    form: 'newPasswordForm',
  }),
  withHandlers({
    handleSubmitNew: (props: Object) => (values: any) => {
      const params = qs.parse(props.location.search, { ignoreQueryPrefix: true });
      props.sendCreateNewPasswordRequest({ ...values, ...params });
    },
  }),
  pure,
);

export const NewPassword = (props: Object) => (
  <FormWrapper >
    <FormContainer>
      <FormLogo>
        xcvxcbcxbxcb
      </FormLogo>
      <StyledForm onSubmit={props.handleSubmit(props.handleSubmitNew)}>
        <StyledFormTitle>{props.locale['features:auth:titles:new-password']}</StyledFormTitle>
        <Field
          errorFontSize={10}
          errorMargin='0 0 5px 0'
          width={1}
          margin='10px 0px 10px 0px'
          padding='0px 26px'
          fontSize={14}
          name='oldPassword'
          component={renderInputGroup}
          type='password'
          placeholder={props.locale['features:auth:password-old']}
          validate={required} />
        <Field
          errorFontSize={10}
          errorMargin='0 0 5px 0'
          width={1}
          margin='10px 0px 10px 0px'
          padding='0px 26px'
          fontSize={14}
          name='newPassword'
          component={renderInputGroup}
          type='password'
          placeholder={props.locale['features:auth:password-new']}
          validate={required} />
        <StyledButton
          width={1}
          my='10'
          p='8px 16px'
          fontSize={16}
          type='submit'
          disabled={props.pristine || !props.valid || props.submitting}
        >
          {props.locale['features:auth:btn:send']}
        </StyledButton>
      </StyledForm>
      { props.auth.createNewPasswordError &&
        <AlertDanger>{props.auth.createNewPasswordError}</AlertDanger> }
    </FormContainer >
  </FormWrapper>
);

const mapStateToProps = (state: Object) => (createStructuredSelector({
  locale: makeSelectLocale(state),
  auth: makeSelectAuthData(state),
}));

export default connect(mapStateToProps, {
  sendCreateNewPasswordRequest,
})(enhance(NewPassword));
