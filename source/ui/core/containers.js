import styled from 'react-emotion';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { space } from 'styled-system';
import colors from '../../themes/colors';
import { makeSelectOpenedSidebar } from '../../features/menus/selectors';

export const RootWrapper = styled.div`
 
`;

export const LayoutsWrapper = styled.div`
 
`;

const mapStateToProps = (state: Object) => (createStructuredSelector({
  openedSidebar: makeSelectOpenedSidebar(state),
}));

export const PageWrapper = connect(mapStateToProps)(styled.div`
  composes: ${space};

  background-color: ${(props: Object) => props.bgColor ? props.bgColor : colors.white};

  height: calc(100vh - 140px);
  overflow: auto;

  margin-top: 140px;
  padding-bottom: 60px;
  position: relative;

  transition: margin-left .2s linear;

  margin-left: ${(props: Object) => props.openedSidebar ? '210px' : '0px'};

  &::-webkit-scrollbar-thumb
  {
    background-color: ${({theme}: Object) => theme.scroll.bgColor};
  }
`);

export const ListsPagesHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  margin-bottom: 15px;
  padding: 10px;

  background-color: ${({theme}: Object) => theme.pages.listsPages.header.bgColor};
  border-color: ${({theme}: Object) => theme.pages.listsPages.header.borderColor};
  color: ${({theme}: Object) => theme.pages.listsPages.header.textColor};
`;