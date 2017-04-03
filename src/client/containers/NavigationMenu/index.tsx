import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as GlobalState } from 'root/state';
import { Action, ActionMap } from './types';
import actionCreators from './actionCreators';
import * as selectors from './selectors';
import Presentation from './presentation';

type MapStateToProps = (state: GlobalState) => StateProps;
const mapStateToProps: MapStateToProps = (state) => ({
  isVisible: selectors.selectIsVisible(state),
});

type MapDispatchToProps = (dispatch: Dispatch<Action>) => DispatchProps;
const mapDispatchToProps: MapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

export interface DispatchProps {
  actions: ActionMap;
}

export interface StateProps {
  isVisible: boolean;
}

export type Props = StateProps & DispatchProps;

class NavigationMenu extends React.Component<Props, undefined> {
  public render() {
    return (
      <Presentation {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationMenu);
