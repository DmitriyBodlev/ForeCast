import React from 'react';
import { connect } from 'react-redux';
import { sendLogOutRequest } from '../../features/auth/actions';
import { changeLngRequest } from '../../features/locales/actions';
import { renderLogoLink } from '../../utils/global-helpers';
import style, { HeaderWrapper, Logo } from './ui';
import { getFirstDataRequest } from '../../features/channels/actions';

export const HeaderComponent = (props: Object) => {
  const { themeName } = props;

  return (
    <HeaderWrapper onClick={props.getFirstDataRequest}>
      <div className={style.brand}>
        <span className={style.logo}>
          <span className={style.helper} />
          <Logo
            src={renderLogoLink(themeName)}
            alt='logo' />
        </span>
        <span className={style.text} />
      </div>
    </HeaderWrapper>
  );
};


export default connect(null, {
  sendLogOutRequest,
  changeLngRequest,
  getFirstDataRequest,
})(HeaderComponent);
