import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

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