import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from './actions';
import styles, { ModalWrapper, Title, ModalContent, Header, Footer } from './ui';


export const HeaderComponent = (props: Object) => (
  <Header>
    <Title>{props.title}</Title>
    <a onClick={props.closeAction} >
      a,sfsafa
    </a>
  </Header>
);

export const FooterComponent = (props: Object) => (
  <Footer>
    {
      props.buttons.map((button: Object, i: number) =>
        <button
          key={i}
          className={button.type}
          onClick={button.action}
        >
          {button.name}
        </button>,
      )
    }
    <button onClick={props.closeAction}>Cansel</button>
  </Footer>
);


export const ModalComponent = (props: Object) => {
  const { options, component } = props.params.modal;
  const closingModal = () => {
    options.closeAction();
    props.closeModal();
  };

  return (
    <ModalWrapper>
      <ModalContent
        className={styles[options.position]}
        params={options}
      >
        <HeaderComponent
          title={options.title}
          closeAction={closingModal} />
        { component }
        {options.controlButtons.length
          && <FooterComponent buttons={options.controlButtons} closeAction={closingModal} />
        }
      </ModalContent>
    </ModalWrapper>
  );
};

export default connect(null, {
  closeModal,
})(ModalComponent);
