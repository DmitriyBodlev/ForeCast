import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { compose, withHandlers, pure } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { reduxForm, Field } from 'redux-form';
import { makeSelectLocale } from '../locales/selectors';
import { makeSelectAuthData } from '../auth/selectors';
import { required } from '../../utils/validator';
import {
  renderCheckboxGroup,
  renderInputGroup,
  GroupWrapper,
  AlertDanger } from '../../ui';
import { sendLogInRequest } from './actions';
import {
  FormWrapper,
  FormContainer,
  FormLogo,
  StyledForm,
  StyledFormTitle,
  StyledButton,
  StyledLinkTo } from './ui';

export const enhance = compose(
  reduxForm({
    form: 'loginForm',
  }),
  withHandlers({
    handleSubmitLogin: (props: Object) => (values: any) => {
      props.sendLogInRequest(values);
    },
  }),
  pure,
);

export const Login = (props: Object) => {
  if (props.auth.loggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <FormWrapper >
      <FormContainer>
        <FormLogo>
          xcxbxcb
        </FormLogo>
        <StyledForm
          onSubmit={props.handleSubmit(props.handleSubmitLogin)}
        >
          <StyledFormTitle>{props.locale['features:auth:titles:login']}</StyledFormTitle>
          <Field
            errorFontSize={10}
            errorMargin='0 0 5px 0'
            width={1}
            margin='10px 0px 10px 0px'
            padding='0px 26px'
            fontSize={14}
            name='username'
            placeholder={props.locale['features:auth:username']}
            component={renderInputGroup}
            type='text'
            validate={required} />
          <Field
            errorFontSize={10}
            errorMargin='0 0 5px 0'
            width={1}
            margin='10px 0px 10px 0px'
            padding='0px 26px'
            fontSize={14}
            name='password'
            placeholder={props.locale['features:auth:password']}
            component={renderInputGroup}
            type='password'
            validate={required} />
          <GroupWrapper alignItems='center' justifyContent='space-between'>
            <Field
              labelFontSize='12px'
              margin='0px 5px 0px 15px'
              name='remember'
              label={props.locale['features:auth:remember']}
              component={renderCheckboxGroup}
              type='checkbox'
              direction='row'
              additionClass='remember' />
            <StyledLinkTo
              to='reset_password'
              fontSize='12px'
            >
              {props.locale['features:auth:links:forgot']}
            </StyledLinkTo>
          </GroupWrapper>
          <StyledButton
            width={1}
            my='10'
            fontSize={18}
            type='submit'
            disabled={props.pristine || !props.valid || props.submitting}
          >
            {props.locale['features:auth:btn:sign-in']}
          </StyledButton>
        </StyledForm>
        { props.auth.logInError && <AlertDanger>{props.auth.logInError}</AlertDanger> }
      </FormContainer>
    </FormWrapper>
  );
};

const mapStateToProps = (state: Object) => (createStructuredSelector({
  locale: makeSelectLocale(state),
  auth: makeSelectAuthData(state),
}));

export default connect(mapStateToProps, {
  sendLogInRequest,
})(enhance(Login));

