import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, pure } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { reduxForm, Field } from 'redux-form';
import { makeSelectLocale } from '../locales/selectors';
import { makeSelectAuthData } from '../auth/selectors';
import { required } from '../../utils/validator';
import { renderInputGroup } from '../../ui';
import { sendResetPasswordRequest } from './actions';
import {
  FormWrapper,
  FormContainer,
  FormLogo,
  StyledForm,
  StyledFormTitle,
  StyledFormSubtitle,
  StyledButton } from './ui';

export const enhance = compose(
  reduxForm({
    form: 'resetPasswordForm',
  }),
  withHandlers({
    handleSubmitReset: (props: Object) => (values: any) => {
      props.sendResetPasswordRequest(values);
    },
  }),
  pure,
);

export const ResetPassword = (props: Object) => (
  <FormWrapper >
    <FormContainer>
      <FormLogo>
        xcvxcbxcbx
      </FormLogo>
      <StyledForm onSubmit={props.handleSubmit(props.handleSubmitReset)}>
        <StyledFormTitle>{props.locale['features:auth:links:forgot']}</StyledFormTitle>
        <StyledFormSubtitle>{props.locale['features:auth:subtitles:reset']}</StyledFormSubtitle>
        <Field
          errorFontSize={10}
          errorMargin='0 0 5px 0'
          margin='10px 0px 10px 0px'
          width={1}
          padding='0px 26px'
          name='loginId'
          component={renderInputGroup}
          type='text'
          placeholder={props.locale['features:auth:username']}
          validate={required} />
        <Field
          errorFontSize={10}
          errorMargin='0 0 5px 0'
          width={1}
          margin='10px 0px 10px 0px'
          padding='0px 26px'
          name='email'
          component={renderInputGroup}
          type='email'
          placeholder={props.locale['features:auth:email']}
          validate={required} />
        <StyledButton
          width={1}
          my='10'
          fontSize={18}
          type='submit'
          disabled={props.pristine || !props.valid || props.submitting}
        >
          {props.locale['features:auth:btn:reset']}
        </StyledButton>
      </StyledForm>
    </FormContainer >
  </FormWrapper>
);

const mapStateToProps = (state: Object) => (createStructuredSelector({
  locale: makeSelectLocale(state),
  auth: makeSelectAuthData(state),
}));

export default connect(mapStateToProps, {
  sendResetPasswordRequest,
})(enhance(ResetPassword));
