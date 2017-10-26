// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import React from 'react';
import { shallow } from 'enzyme';
import { LoaderComponent } from '../index';
import { LoaderWrapper, LoaderContent} from '../ui';

describe('component/common/loader/index.jsx', () => {
  it('should render component with wrapper and content sections', () => {
    const wrapper = shallow(<LoaderComponent />);

    const loaderWrapperComponent = wrapper.find(LoaderWrapper);
    const loaderContentComponent = wrapper.find(LoaderContent);

    expect(wrapper).toMatchSnapshot();
    expect(loaderWrapperComponent.length).toBeGreaterThan(0);
    expect(loaderContentComponent.length).toBeGreaterThan(0);
  });
});
