import 'regenerator-runtime/runtime';

import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from '../';
import locale from '../../../locale-default';

describe('source/components/Header', () => {
  it('should render component without props', () => {
    const wrapper = shallow(<HeaderComponent locale={locale} />);

    expect(wrapper).toMatchSnapshot();
  });
});
