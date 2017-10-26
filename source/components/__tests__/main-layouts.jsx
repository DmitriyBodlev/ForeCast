// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import React from 'react';
import { shallow } from 'enzyme';
import { MainLayouts } from '../main-layouts';
import { HeaderComponent } from '../header';
import { ModalComponent } from '../common/modal';

describe('source/main-layouts.jsx', () => {
  it('should render component with header and modal', () => {
    const wrapper = shallow(<MainLayouts modal={{ isOpened: true }} />);

    const headerComponent = wrapper.find(HeaderComponent);
    const modalComponent = wrapper.find(ModalComponent);

    expect(wrapper).toMatchSnapshot();
    expect(headerComponent).toBeTruthy();
    expect(modalComponent).toBeTruthy();
  });
});
