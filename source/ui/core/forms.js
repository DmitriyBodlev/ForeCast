import React from 'react';
import styled, { css } from 'react-emotion';
import { connect } from 'react-redux';
import { map } from 'ramda';
import { space, width, fontSize } from 'styled-system';
import { createStructuredSelector } from 'reselect';
import { makeSelectOpenedSidebar } from '../../features/menus/selectors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100% - 60px);
`;

const mapStateToProps = (state: Object) => (createStructuredSelector({
  openedSidebar: makeSelectOpenedSidebar(state),
}));

export const LeftLabelsWrapper = connect(mapStateToProps)(styled.aside`
  min-height: 100%;
  width: 320px;
  position: absolute;
  left: 1px;
  z-index: 9;
  transition: left .2s linear;

  background-color: ${({theme}: Object) => theme.forms.labelsWrapper.bgColor};
`);

export const FormTitle = styled.div`
  composes: ${space} ${width} ${fontSize};

  text-align: center;

  color: ${({theme}: Object) => theme.forms.titleColor};
`;

export const FormGroup = styled.div`
  align-items: ${(props: Object) => (props.align ? props.align : 'center')};
  flex-direction: ${(props: Object) => (props.direction ? props.direction : 'column')};
  display: flex;
  min-height: 30px;

  &:last-of-type {
    margin-bottom: 5px;
  }
`;

export const FormGroupTitle = styled.div`
  height: 30px;
  line-height: 30px;
  margin-bottom: 5px;
  padding-left: 15px;

  background-color: ${({theme}: Object) => theme.forms.group.title.bgColor};
  color: ${({theme}: Object) => theme.forms.group.title.textColor};
`;


export const GroupWrapper = styled.div`
  display: flex;

  align-items: ${(props: Object) => props.alignItems};
  justify-content: ${(props: Object) => props.justifyContent};
`;

const renderBorderColor = (props: Object) => {
  if (props.error && props.touched) {
    return props.theme.forms.inputs.borderColorErr;
  }
  return props.theme.forms.inputs.borderColor;
};

export const Input = styled.input`
  composes: ${space} ${width} ${fontSize};

  background-color: ${({theme}: Object) => theme.forms.inputs.bgColor};
  border: 1px solid ${(props: Object) => renderBorderColor(props)};
  border-radius: 2px;
  cursor: text;
  height: 30px;
  line-height: 30px;
  outline: none;
  padding-left: 15px;


  &:focus {
    box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
  }
`;

export const Textarea = styled.textarea`
  composes: ${space};

  background-color: ${({theme}: Object) => theme.forms.inputs.bgColor};
  border: 1px solid ${(props: Object) =>
    (props.error &&
      props.touched
      ? props.theme.forms.inputs.borderErrorColor : props.theme.forms.inputs.borderColor)};

  border-radius: 1px;
  cursor: text;
  font-size: 16px;
  height: 72px;
  width: 540px;
  line-height: 36px;
  outline: none;
  padding: 5px 20px;
  resize: none;

  &:focus {
    box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;

  &:after {
    border: solid black;
    border-width: 0px 1px 1px 0;
    content: '';
    height: 6px;
    position: absolute;
    right: 25px;
    top: 18px;
    transform: rotate(45deg) translate(0, -60%);
    width: 6px;
  }
`;

export const Select = styled.select`
  composes: ${space} ${width} ${fontSize};

  appearance: none;
  background-color: ${({theme}: Object) => theme.forms.inputs.bgColor};
  border: 1px solid ${(props: Object) => renderBorderColor(props)};
  border-radius: 2px;
  height: 30px;
  line-height: 30px;
  outline: none;
  padding-left: 15px;
  position: relative;
  z-index: 0;

  &:focus {
    box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
  }
`;

export const Option = styled.option`
`;

export const ReadOnly = styled.div`
  composes: ${space};

  color: ${({ theme }: Object) => theme.forms.readOnlyColor};
  padding: 0 5px;
  font-weight: bold;
`;

export const Checkbox = styled.input`
  composes: ${space};

  position: relative;
  z-index: 0;

  &:focus {
    outline: none;
  }

  &:before {
    background-color: ${({theme}: Object) => theme.forms.checkboxes.bgColor};
    border: 1px solid ${({theme}: Object) => theme.forms.checkboxes.borderColor};
    border-radius: 2px;
    content: '';
    height: 16px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 16px;
  }

  &:checked:before {
    background-color: ${({theme}: Object) => theme.forms.checkboxes.bgColorChecked};
    border: 1px solid ${({theme}: Object) => theme.forms.checkboxes.borderColorChecked};
    border-radius: 2px;
    content: '';
    height: 16px;
    position: absolute;
    width: 16px;
  }

  &:checked:after {
    border: solid ${({theme}: Object) => theme.forms.checkboxes.textColorChecked};
    border-width: 0px 2px 2px 0;
    content: '';
    height: 8px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: rotate(45deg) translate(0, -90%);
    width: 3px;
  }
`;

export const Label = styled.label`
  composes: ${space} ${fontSize};

  color: ${({theme}: Object) => theme.forms.inputs.labelColor};

  display: block;
`;

export const Error = styled.span`
  composes: ${space} ${fontSize};

  color: ${({theme}: Object) => theme.forms.inputs.errorTextColor};
`;

export const renderInputGroup = ({
  width,
  fontSize,
  margin,
  padding,
  labelFontSize,
  labelMargin,
  errorFontSize,
  errorMargin,
  label,
  placeholder,
  input,
  type,
  direction,
  additionClass,
  meta: { touched, error },
}: Object) => (
  <FormGroup
    direction={direction || 'column'}
    className={additionClass}
  >
    {label && <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>}
    <Input
      {...input}
      type={type}
      width={width}
      fontSize={fontSize}
      m={margin}
      p={padding}
      placeholder={placeholder}
      touched={touched}
      error={error} />
    {touched && error && <Error fontSize={errorFontSize} m={errorMargin}>{error}</Error>}
  </FormGroup>
);

export const renderSelectGroup = ({
  width,
  fontSize,
  margin,
  padding,
  labelFontSize,
  labelMargin,
  errorFontSize,
  errorMargin,
  input,
  label,
  options,
  direction,
  additionClass,
  meta: { touched, error },
}: Object) => {
  function renderOptions() {
    if (!Array.isArray(options) && options) {
      const defaultOption = [<Option key={1} value='' />];
      map((obj: Object) => (
        defaultOption.push(
          <Option key={obj.guid} value={obj.guid}>{obj.displayValue}</Option>)),
          options);

      return defaultOption;
    } else if (!options) {
      return null;
    }

    return options.map((option: string, index: number) => {
      if ((typeof option) === 'string') {
        return <Option key={index} value={option}>{option}</Option>;
      }

      return <Option key={index} value={option.value}>{option.name}</Option>;
    });
  }

  return (
    <FormGroup
      direction={direction || 'column'}
      className={additionClass}
    >
      <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>
      <SelectWrapper>
        <Select
          {...input}
          width={width}
          fontSize={fontSize}
          m={margin}
          p={padding}
        >
          { renderOptions() }
        </Select>
      </SelectWrapper>
      {touched && error && <Error fontSize={errorFontSize} m={errorMargin}>{error}</Error>}
    </FormGroup>
  );
};

export const renderTextareaGroup = ({
  width,
  fontSize,
  margin,
  padding,
  labelFontSize,
  labelMargin,
  errorFontSize,
  errorMargin,
  input,
  label,
  type,
  direction,
  additionClass,
  meta: { touched, error },
}: Object) => (
  <FormGroup
    direction={direction || 'column'}
    className={additionClass}
  >
    <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>
    <Textarea
      {...input}
      type={type}
      fontSize={fontSize}
      m={margin}
      p={padding}
      touched={touched}
      error={error} />
    {touched && error && <Error fontSize={errorFontSize} m={errorMargin}>{error}</Error>}
  </FormGroup>
);

export const renderCheckboxGroup = ({
  labelFontSize,
  labelMargin,
  labelPosition,
  errorFontSize,
  errorMargin,
  margin,
  input,
  label,
  type,
  direction,
  additionClass,
  meta: { touched, error },
}: Object) => (
  <FormGroup
    direction={direction || 'column'}
    className={additionClass}
    align='center'
  >
    {labelPosition === 'left' && <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>}
    <Checkbox m={margin} {...input} type={type} touched={touched} error={error} />
    {touched && error && <Error fontSize={errorFontSize} m={errorMargin}>{error}</Error>}
    {(labelPosition === 'right' || !labelPosition) &&
      <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>}
  </FormGroup>
);

export const renderReadOnlyGroup = ({
  labelFontSize,
  labelMargin,
  labelPosition,
  direction,
  additionClass,
  parent,
  margin,
  label,
}: Object) => (
  <FormGroup
    direction={direction || 'column'}
    className={additionClass}
    align='center'
  >
    {labelPosition === 'left' && <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>}
    <ReadOnly m={margin}>
      {
        parent
        ? (parent.name || parent.enterpriseName)
        : 'No Parent'
      }
    </ReadOnly>
    {(labelPosition === 'right' || !labelPosition) &&
      <Label fontSize={labelFontSize} m={labelMargin}>{label}</Label>}
  </FormGroup>
);

export const renderFormGroup = (type: string) => {
  switch (type) {
    case ('input'):
      return renderInputGroup;
    case ('checkbox'):
      return renderCheckboxGroup;
    case ('select'):
      return renderSelectGroup;
    case ('textarea'):
      return renderTextareaGroup;
    case ('read-only'):
      return renderReadOnlyGroup;
    default:
      return renderInputGroup;
  }
};

const inputGroup = css`
  & label {
    padding-left: 15px;
    width: 320px;
  }

  &:first-of-type {
    margin-top: 5px;
  }
`;

export const styles = {
  inputGroup,
};
