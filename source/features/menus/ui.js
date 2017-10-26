import styled from 'react-emotion';
import { withTheme } from 'theming';

export const NavContainer = withTheme(styled.nav`
  box-shadow: 'inset 0 0 2px 1px rgba(217, 217, 217, 0.5)';
  display: flex;
  height: 40px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 40px;

  transition: margin-left .2s linear;

  margin-left: ${(props: Object) => props.openedSidebar ? '210px' : '0px'};
  background-color: ${({theme}: Object) => theme.menus.nav.bgColor};
  color: ${({theme}: Object) => theme.menus.nav.itemTextColor};
`);

const renderBackgroundIcon = (props: Object) => {
  if (props.currentTheme === 'dark') {
    return props.darkLink;
  }
  return props.lightLink;
};

export const NavItem = withTheme(styled.div`
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 15px;
  padding: 0 10px 0 45px;

  background-image: url(${(props: Object) => renderBackgroundIcon(props)});

  &:hover {
    background-color: ${({theme}: Object) => theme.menus.nav.bgColorHovered};
  }
`);

export const SidebarContainer = withTheme(styled.aside`
  box-shadow: 'inset 0 0 2px 1px rgba(217, 217, 217, 0.5)';
  cursor: default;
  font-size: 14px;
  height: calc(100vh - 87px);
  position: absolute;
  left: -210px;
  width: 210px;

  transition: left .2s linear;

  background-color: ${({theme}: Object) => theme.menus.sidebar.bgColor};
  color: ${({theme}: Object) => theme.menus.sidebar.itemTextColor};

  &.opened {
    left: 0px;
  }
`);

export const SidebarHeader = withTheme(styled.div`
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 180px;
  height: 40px;
  padding: 0 10px 0 45px;

  background-image: url('https://s3.amazonaws.com/amous-front-dev/icons/close.svg');

  &:hover {
    background-color: ${({theme}: Object) => theme.menus.sidebar.bgColorHovered};
  }
`);

const renderSidebarGroupWrapperBgColor = (props: Object) => {
  if (props.opened) {
    return props.theme.menus.sidebar.bgColorHovered;
  }
  return props.theme.menus.sidebar.bgColor;
};

export const SidebarGroupWrapper = withTheme(styled.div`
  background-color: ${(props: Object) => renderSidebarGroupWrapperBgColor(props)};
`);

export const SidebarGroupSubitemsWrapper = withTheme(styled.div`
`);

export const SidebarItem = withTheme(styled.div`
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 15px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  padding: 0 10px 0 45px;

  background-image: url(${(props: Object) => renderBackgroundIcon(props)});
  font-weight: ${({opened}: Bool) => opened && 'bold'};
  color: ${(props: Object) => props.opened ? props.theme.menus.sidebar.itemTextColorHovered : props.theme.menus.sidebar.itemTextColor};

  &:hover {
    background-color: ${({theme}: Object) => theme.menus.sidebar.bgColorHovered};
    color: ${({theme}: Object) => theme.menus.sidebar.itemTextColorHovered};
  }
`);

export const SidebarItemRightPlusIcon = withTheme(styled.span`
  &::after { 
    content: "+";
    color: #ce2828;
    font-size: 20px;
    font-weight: 900;
    float: right;
  }
`);

const renderArrowIconRotate = ({opened}: boolean) => {
  if (opened) {
    return 'rotate(-45deg)';
  }
  return 'rotate(135deg)';
};

export const SidebarItemRightArrowIcon = withTheme(styled.span`
  &::after {
    border-top: 2px solid #ce2828;
    border-right: 2px solid #ce2828;
    content: '';
    display: block;
    float: right;
    margin-top: 15px;
    margin-right: 2px;
    width: 5px;
    height: 5px;

    transform: ${(props: Object) => renderArrowIconRotate(props)};
  }
`);
