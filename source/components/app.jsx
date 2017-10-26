import React from 'react';
import { RouteWithSubRoutes } from '../router';

const App = (props: Object) => (
  <div>
    {
      props.routes.map((route: Object, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
    }
  </div>
);

export default App;

