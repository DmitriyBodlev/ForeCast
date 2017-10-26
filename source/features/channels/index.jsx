import React from 'react';
import { connect } from 'react-redux';
import { makeSelectChannels } from './selectors';
import { createStructuredSelector } from 'reselect';
import { BunnerWrapper, BlaBla } from './ui';

export const Consolee = (text: string) => {
  console.log(text);
};

const Channels = (props: object) => (
  <div>
    <BlaBla onClick={Consolee('SOME TEST')} >
        ASGASGASG
    </BlaBla>
    {props.images &&
    props.images.map((image: string, index: number) => {
      return (
        <BunnerWrapper image={image} key={index} />
      );
    })}
  </div>
);

const mapStateToProps = (state: Object) => (createStructuredSelector({
  images: makeSelectChannels(state),
}));

export default connect(mapStateToProps, {})(Channels);
