import React from 'react';
import { shallow } from 'enzyme';
import { ModalComponent, HeaderComponent, FooterComponent } from '../';

describe('source/components/common/modal', () => {
  describe('modal component', () => {
    it('should render component', () => {
      const closeModal = jest.fn();
      const modalParams = {
        modal: {
          component: <div>some text</div>,
          options: {
            position: 'top-right',
            title: 'text',
            controlButtons: [],
          },
        },
      };
      const wrapper = shallow(
        <ModalComponent
          closeModal={closeModal}
          params={modalParams} />,
      );
      const modalBody = wrapper.contains(<div>some text</div>);

      expect(wrapper).toMatchSnapshot();
      expect(modalBody).toBeTruthy();
    });

    it('should render component with control button', () => {
      const closeModal = jest.fn();
      const buttonAction = jest.fn();
      const modalParams = {
        modal: {
          component: <div>some text</div>,
          options: {
            position: 'top-left',
            width: 600,
            height: 400,
            controlButtons: [
              { name: 'Save', type: 'primary', action: buttonAction },
            ],
          },
        },
      };

      const wrapper = shallow(
        <ModalComponent
          closeModal={closeModal}
          params={modalParams} />,
      );

      const headerComponent = wrapper.find(HeaderComponent);
      const footerComponent = wrapper.find(HeaderComponent);

      expect(wrapper).toMatchSnapshot();
      expect(headerComponent).toBeTruthy();
      expect(footerComponent).toBeTruthy();
    });
  });

  describe('header component', () => {
    it('should render header component', () => {
      const closeModal = jest.fn();

      const wrapper = shallow(
        <HeaderComponent
          closeAction={closeModal}
          title='Test' />,
      );

      wrapper.find('a').simulate('click');

      expect(wrapper).toMatchSnapshot();
      expect(closeModal).toHaveBeenCalled();
    });
  });

  describe('footer component', () => {
    it('should render footer component', () => {
      const closeModal = jest.fn();
      const buttonAction = jest.fn();
      const buttonList = [
        { name: 'Save', type: 'primary', action: buttonAction },
      ];
      const wrapper = shallow(
        <FooterComponent
          closeAction={closeModal}
          buttons={buttonList} />,
      );

      const buttons = wrapper.find('button');
      const modalButtons = buttonList.length + 1;

      buttons.forEach((button: Object) => button.simulate('click'));

      expect(wrapper).toMatchSnapshot();
      expect(closeModal).toHaveBeenCalled();
      expect(buttonAction).toHaveBeenCalled();
      expect(buttons.length).toEqual(modalButtons);
    });
  });
});
