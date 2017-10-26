import React from 'react';
import { RouteWithSubRoutes } from '../router';

const RootContainer = (props: Object) => (
    <div>
      {props.routes.map((route: Object, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
);


export default RootContainer;
