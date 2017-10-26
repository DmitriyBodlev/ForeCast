import styled from 'react-emotion';
import { Form } from 'redux-form';
import { Button, LinkTo } from '../../ui';

const renderBackgroundLink = (props: Object) => {
  if (props.currentTheme === 'dark') {
    return 'https://s3.amazonaws.com/amous-front-dev/images/dark-background.svg';
  }
  return 'https://s3.amazonaws.com/amous-front-dev/images/light-background.svg';
};

export const FormWrapper = styled.div`
  align-items: center;
  background-image: url(${(props: Object) => renderBackgroundLink(props)});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
  display: flex;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`;

export const FormContainer = styled.div`
  margin-left: 25%;
  width: 50%;

  & input {
    height: 42px;

    &[type='text']:focus, &[type='password']:focus, &[type='email']:focus {
      box-shadow: ${(props: Object) => props.theme.auth.forms.inputs.boxShadow};
    }
  }

  & .remember label {
    font-weight: 500;
    margin-left: 5px;
    color: ${(props: Object) => props.theme.auth.forms.labels.color};
  }
`;

export const FormLogo = styled.div`
  text-align: center;
  margin-bottom: 20px;

  & img {
    max-width: 100%;
  }
`;

export const StyledForm = styled(Form)`
  padding: 30px 48px;
  background-color: ${(props: Object) => props.theme.auth.forms.bgColor};
`;

export const StyledFormTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;;

  color: ${(props: Object) => props.theme.auth.forms.titleColor};
`;

export const StyledFormSubtitle = styled.div`
  font-size: 14px;
  margin-bottom: 21px;

  color: ${(props: Object) => props.theme.auth.forms.titleColor};
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
  height: 42px;

  background-color: ${(props: Object) => props.theme.auth.forms.buttons.bgColor};
  color: ${(props: Object) => props.theme.auth.forms.buttons.textColor};
`;

export const StyledLinkTo = styled(LinkTo)`
  font-weight: 500;
  margin-right: 15px;

  color: ${(props: Object) => props.theme.auth.forms.labels.color};
`;

