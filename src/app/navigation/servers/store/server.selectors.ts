import { createSelector } from "@ngrx/store";
import {AppState} from "../../../interfaces/app.state.interface";

export const selectFeature = (state: AppState) => state.counter;

export const countSelector = createSelector(selectFeature, state => state.count);
