import * as React from 'react';
import { withTheme } from 'styled-components';
import Presentation from './presentation';
import withGraphql from './withGraphql';
import { Client } from './types';
import { ThemeColorMap } from '../../types';

export interface Props {
  clients: Client[];
  loading: boolean;
  error: string;
  theme: ThemeColorMap;
}

class Clients extends React.Component<Props, undefined> {
  public render() {
    return (
      <Presentation {...this.props} />
    );
  }
}

export default withTheme(withGraphql(Clients));
