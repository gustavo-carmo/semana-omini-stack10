import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './src/routes';

export default function App() {
  // TODO - DESABILITEI A BARRA DE STATUS POR QUE NÃO CONSEGUI FAZER ELA MUDAR DE COR
  const hideStatusBar = true;

  return (
    <>
      <StatusBar barStyle="light-content" hidden={hideStatusBar} />
      <Routes />
    </>
  );
}