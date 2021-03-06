import { ActionCreatorsMapObject } from 'redux';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
} from './actions';

export { State, Section } from './state';
export { Props, StateProps, DispatchProps } from './';
export { ActionType } from './constants';
export { Action } from './actions';
export interface ErrorType { message: string }

export interface ActionMap extends ActionCreatorsMapObject {
  loadInitiation: () => LoadInitiationAction;
  loadSuccess: (data: string) => LoadSuccessAction;
  loadFailure: (error: ErrorType) => LoadFailureAction;
  loadCancel: () => LoadCancelAction;
}

export interface SectionPayload {
  index: number;
  visible: boolean;
}
