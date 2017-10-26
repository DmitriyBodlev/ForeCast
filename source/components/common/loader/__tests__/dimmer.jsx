import 'regenerator-runtime/runtime';

import React from 'react';
import { shallow } from 'enzyme';
import { DimmerComponent } from '../dimmer';
import { TableRectangle, TitleRectangle, Rectangle, DimmerWrapper } from '../ui';

describe('component/common/loader/dimmer.jsx', () => {
  it('should render component with wrapper and title sections', () => {
    const wrapper = shallow(<DimmerComponent />);

    const dimmerWrapperComponent = wrapper.find(DimmerWrapper);
    const titleRectangleComponent = wrapper.find(TitleRectangle);
    const tableRectangleComponent = wrapper.find(TableRectangle);
    const rectangleComponentInTable = tableRectangleComponent.find(Rectangle);
    const rectangleComponent = wrapper.find(Rectangle);

    expect(wrapper).toMatchSnapshot();
    expect(dimmerWrapperComponent.length).toBeGreaterThan(0);
    expect(titleRectangleComponent.length).toBeGreaterThan(0);
    expect(rectangleComponent.length).toBeGreaterThan(0);
    expect(tableRectangleComponent.length).toBe(0);
    expect(rectangleComponentInTable.length).toBe(0);
  });

  it('should render component with wrapper, title and table sections', () => {
    const wrapper = shallow(<DimmerComponent tableCount={2} rectangleCount={4} />);

    const dimmerWrapperComponent = wrapper.find(DimmerWrapper);
    const titleRectangleComponent = wrapper.find(TitleRectangle);
    const tableRectangleComponent = wrapper.find(TableRectangle);
    const rectangleComponentInTable = tableRectangleComponent.find(Rectangle);
    const rectangleComponent = wrapper.find(Rectangle);

    expect(wrapper).toMatchSnapshot();
    expect(dimmerWrapperComponent.length).toBeGreaterThan(0);
    expect(titleRectangleComponent.length).toBeGreaterThan(0);
    expect(rectangleComponent.length).toBeGreaterThan(0);
    expect(tableRectangleComponent.length).toBe(2);
    expect(rectangleComponentInTable.length).toBe(8);
  });
});
