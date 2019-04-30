// @flow
import React from 'react';
import {
  ThemeProvider,
} from 'styled-components';

import type {
  StatelessFunctionalComponent,
  Node,
} from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import * as S from './styled';

const theme = {
  primary: '#0079BF',
};

type Props = {};

const Main: StatelessFunctionalComponent<Props> = (): Node => (
  <ThemeProvider theme={theme}>
    <S.Main>
      <S.Left>
        <Header />
        <Sidebar />
      </S.Left>
      <webview
        src="https://trello.com/b/jQoLS8B6/new-web-app-front-end"
        autosize="on"
        style={{
          display: 'inline-flex',
          width: '800px',
          height: '680px',
        }}
      />
    </S.Main>
  </ThemeProvider>
);

export default Main;