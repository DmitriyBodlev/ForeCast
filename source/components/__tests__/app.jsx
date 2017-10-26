// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import React from 'react';
import { shallow } from 'enzyme';
import App from './../app';
import routes from '../../routes-config';

describe('source/app.jsx', () => {
  it('should render component with routes', () => {
    const wrapper = shallow(<App routes={routes} />);

    expect(wrapper).toMatchSnapshot();
  });
});
