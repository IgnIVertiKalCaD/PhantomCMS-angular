import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './server.actions';
import {ServerStateInterface} from "../interface/server.state.interface";
export const initialState: ServerStateInterface = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ count: state.count + 1})),
  on(CounterActions.decrement, (state) => ({ count: state.count - 1})),
  on(CounterActions.reset, (state) => ({ count: 0 }))
);
